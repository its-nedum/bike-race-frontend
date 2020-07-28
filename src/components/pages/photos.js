import React from 'react'
import Images from '../helpers/images.js'
import Pagination from '../helpers/pagination.js'

const Photos = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3>A picture is worth a thousand words ~ Fred R. Barnard</h3>
                </div>
            </div>
            <Images />
            <Pagination />
        </div>
    )
}

export default Photos
