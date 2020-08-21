import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-4"></div>
                <div className="col-sm-12 col-md-4">
                    <div className="sweet-loading">
                        <ClipLoader 
                            size={150}
                            color={'#743778'}
                        />
                        <p className="text-white">Loading please wait...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner
