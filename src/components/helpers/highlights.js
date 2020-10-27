import React from 'react'
import "../../styles/highlights.css"
import diverse from "../../images/highlight1.jpg"
import experience from "../../images/highlight2.jpg"
import guides from "../../images/highlight3.jpg"
import destinations from "../../images/highlight4.jpg"

const shape = {
    borderLeft: '8px solid #EFB1C8',
    backgroundColor: '#743778'
}

const Highlights = () => {
    return (
        <div className="container-fluid">
            <h3 className="text-white mt-4 txt">Why Boulder Bike Tour?</h3>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="card my-4 highlight-cards">
                        <img className="card-img" src={diverse} alt="highlight pic" />
                        <div className="d-flex flex-column justify-content-end card-img-overlay">
                            <div className="ml-1 p-2 photo-info" style={shape}>
                                <h5 className="card-title text-white">Diverse Options</h5>
                                <p className="card-text text-white">Diverse types of bicycles to choose from and they are always tailored to your desires and skill level.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card my-4 highlight-cards">
                        <img className="card-img" src={experience} alt="highlight pic" />
                        <div className="d-flex flex-column justify-content-end card-img-overlay">
                            <div className="ml-1 p-2 photo-info" style={shape}>
                                <h5 className="card-title text-white">Experience & Value</h5>
                                <p className="card-text text-white">Every ride is led by seasoned, professional guides on top-quality equipment for a truly memorable tour.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="card my-4 highlight-cards">
                        <img className="card-img" src={guides} alt="highlight pic" />
                        <div className="d-flex flex-column justify-content-end card-img-overlay">
                            <div className="ml-1 p-2 photo-info" style={shape}>
                                <h5 className="card-title text-white">The Best Guides</h5>
                                <p className="card-text text-white">Our team is well-equipped and can even provide coaching to ensure that every rider of every skill level has a great time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card my-4 highlight-cards">
                        <img className="card-img" src={destinations} alt="highlight pic" />
                        <div className="d-flex flex-column justify-content-end card-img-overlay">
                            <div className="ml-1 p-2 photo-info" style={shape}>
                                <h5 className="card-title text-white">Beautiful Destinations</h5>
                                <p className="card-text text-white">We take pride in sharing stunning places and little-known trails in Boulder -there’s nothing quite like being on your bike and in the scenery. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
