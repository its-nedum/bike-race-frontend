import React from 'react'
import Spinner from './spinner'

const Images = ({ photos }) => {
    return (
        <div> 
            {photos.length === 0 ? <Spinner /> : 
                <div className="row mt-3 mb-3">
                { photos && photos.map((photo) => {
                        return(
                            <div className="col-sm-12 col-md-3 mb-3" key={photo.id}>
                                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} alt="pix" className="img-fluid" />
                            </div>
                        )
                    }) }
                </div>
            }  
        </div>
    )
}

export default Images
