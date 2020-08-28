import React, {useEffect, useState} from 'react'
import Images from '../helpers/images.js'
import axios from 'axios'
import '../../styles/photos.css'
import Pagination from '../helpers/pagination'
import Footer from '../layouts/footer'

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [totalPhotos, settotalPhotos] = useState(0);
    // eslint-disable-next-line
    const [page, setPage] = useState(1)

    const getPhotos = (page) => {
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
        axios.get(
            `${url}`,{params}
        ).then((response) => {
            const { total, photo } = response.data.photos;
            setPhotos(photo);
            settotalPhotos(total)
            console.log(photo)
        }).catch((err) => {
            console.log(err)
        });
    };


    //Change page
    const paginate = (pageNumber) => {
        getPhotos(pageNumber)
    }

    // load the first page of photos
    useEffect((page) => {
        getPhotos(page)
    },[])

    return (
        <div>
            <div className="card photo-card">
                <div className="card-body">
                    <h3>A picture is worth a thousand words ~ Fred R. Barnard</h3>
                </div>
            </div>

            <div className="container-fluid">
                <Images photos={photos} />
                { photos.length !== 0 ? 
                    <Pagination total={parseInt(totalPhotos)} paginate={paginate} />
                : null }
            </div>
            <Footer />
        </div>
    )
}

export default Photos
