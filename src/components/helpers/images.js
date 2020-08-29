import React from 'react'
import Spinner from './spinner'
const shape = {
    borderLeft: '8px solid #743778',
    backgroundColor: '#EFB1C8'
}
const Images = ({ photos }) => {
    return (
        <div> 
            {photos.length === 0 ? <Spinner /> : 
                <div className="row mt-3 mb-3">
                { photos && photos.map((photo) => {
                        return(
                            <div className="col-sm-12 col-md-3 mb-3 card" key={photo.id}>
                                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} alt="pix" className="img-fluid" />
                            <div className="d-flex flex-column justify-content-end card-img-overlay">
                                <div className="ml-1 p-2 photo-info" style={shape}>
                                    <h6 className="card-text mb-0"><strong>Title:</strong> {photo.title}</h6>
                                    <p className="card-text mb-0"><strong>Owner:</strong> {photo.ownername}</p>
                                </div>
                            </div>
                            </div>
                        )
                    }) }
                </div>
            }  
        </div>
    )
}

export default Images
