import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../styles/photos.css'
import Scroller from '../helpers/scroller'

const Scroll = () => {
    const [photos, setPhotos] = useState([]);
    const [hasMore, setHasMore] = useState(true)
    const [loadMore, setLoadMore] = useState(true)
    const [page, setPage] = useState(1);

    const getPhotos = async (page) => {
        const url = 'https://api.flickr.com/services/rest/'
        const params = {
            api_key: `36d171a5b0d688aa172352df116dd6c0`,
            method: 'flickr.photos.search',
            tags: 'bikerace,BoulderBikeTour',
            media: 'photo',
            per_page: 40,
            format: 'json',
            nojsoncallback: 1,
            extras: 'date_upload, icon_server, owner_name, views',
            page
        }
        try {
            const resp = await axios.get(`${url}`,{params})
            const {page, pages, perpage, photo, total} = resp.data.photos
            setPhotos(photo)
            setPage(page)
            console.log(page)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="card photo-card">
                <div className="card-body">
                    <h3>A picture is worth a thousand words ~ Fred R. Barnard</h3>
                </div>
            </div>

            <div className="container-fluid">
                <Scroller loadMore={getPhotos(page)} hasMore={hasMore} photos={photos}/>
            </div>
        </div>
    )
}

export default Scroll
