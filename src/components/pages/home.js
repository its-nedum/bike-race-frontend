import React from 'react'
import '../../styles/home.css'
import bike from '../../images/bike.jpg'

const Home = () => {
    return (
        <div className="">
            <div className="welcome-banner">
                <div className="card bg-danger">
                    <div className="card-body">
                        <div className="card-title">
                        <h5>The State of Colorado <i>Presents</i> </h5>
                        <h2>Prestigious Bike Race 2021 Edition</h2>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="container-fluid">
                <div className="row timer-banner">
                    <div className="col-md-8"></div>
                    <div className="col-sm-12 col-md-4 count-down">
                        <div className="row start-date">
                            <div class="text-center">
                                <h5 class="card-title">Thursday, April 1, 2021</h5>
                            </div>
                        </div>
                        <div className="row count-down-timer">
                            <div class="text-center">
                                <h5 class="card-title"> 2</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Months</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="about-banner">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About The <span className="text-danger standout-text">Prestigious Bike Race</span></h5><hr/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia tempore quasi non, repellendus deserunt? Perspiciatis at repellat, omnis non voluptas ut fugiat placeat animi nam iste quae totam distinctio?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora facilis consequatur dolorum voluptatem, quisquam soluta repudiandae ipsum, exercitationem aut vel obcaecati quas omnis expedita laboriosam est fuga repellat amet ab!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid image-banner">
                <h4 className="text-white">Photos From Past Edition</h4>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <img src={bike} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
