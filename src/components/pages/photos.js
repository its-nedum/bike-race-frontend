import React from 'react'
import Images from '../helpers/images.js'
import Pagination from '../helpers/pagination.js'
import '../../styles/photos.css'

const Photos = () => {
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
