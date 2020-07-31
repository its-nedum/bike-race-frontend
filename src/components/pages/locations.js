import React from 'react'
import '../../styles/locations.css'
import Maps from '../helpers/map'
const Locations = () => {
    return (
        <div>
            <div className="card locations-card">
                <div className="card-body">
                    <h3>A journey of a thousand miles begins with a single step ~ Lao Tzu</h3>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <Maps />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations
