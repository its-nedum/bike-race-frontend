import React, {useEffect, useState} from 'react'
import Images from '../helpers/images.js'
import Pagination from '../helpers/pagination.js'
import axios from 'axios'
import '../../styles/photos.css'

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    let tag = 'bikerace'
    let api_key = '36d171a5b0d688aa172352df116dd6c0'
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${tag}&format=json&nojsoncallback=1`,
        }).then((response) => {
            const { data } = response;
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    });
    
    return (
        <div>
            <div className="card photo-card">
                <div className="card-body">
                    <h3>A picture is worth a thousand words ~ Fred R. Barnard</h3>
                </div>
            </div>

            <div className="container-fluid">
                <Images />
                <Pagination />
            </div>
        </div>
    )
}

export default Photos
