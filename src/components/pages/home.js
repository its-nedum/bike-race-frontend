import React from 'react'
import '../../styles/home.css'
import Timer from '../helpers/timer'
import bike1 from '../../images/bike1.jpg'
import bike2 from '../../images/bike2.jpg'
import bike3 from '../../images/bike3.jpg'
import bike4 from '../../images/bike4.jpg'
import bike5 from '../../images/bike5.jpg'
import bike6 from '../../images/bike6.jpg'
import bike7 from '../../images/bike7.jpg'
import bike8 from '../../images/bike8.jpg'
import image1 from '../../images/carousel_image.jpg'
import image2 from '../../images/carousel_image2.jpg'
import image3 from '../../images/carousel_image3.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="">
            <div className="welcome-banner">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                        <h5>The city of Boulder, Colorado <i>presents</i> </h5>
                        <h2>Boulder Bike Tour 2020 Edition</h2>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="container-fluid">
                <div className="row timer-banner">
                    <div className="col-sm-12 col-md-8 show-carousel">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={image1} className="d-block w-100 img-fluid" alt="bike"/>
                            </div>
                            <div className="carousel-item">
                            <img src={image2} className="d-block w-100 img-fluid" alt="bike"/>
                            </div>
                            <div className="carousel-item">
                            <img src={image3} className="d-block w-100 img-fluid" alt="bike"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 count-down">
                        <div className="row start-date">
                            <div className="text-center">
                                <h5 className="card-title">Start Date: Thursday, April 1, 2020</h5>
                            </div>
                        </div>
                        <div className="row count-down-timer">
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="about-banner">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title about-heading">About The <span className="text-danger standout-text">Boulder Bike Tour</span></h5><hr/>
                            <p className="about-txt">Once in every decade the city of Boulder, Colorado brings together bike racer from and around cities in America to 
                            compete for glory and honour in the prestigious bike racing competition called The Boulder Bike Tour.
                            This bike racing competition has been on going for the 5th time in a row, and this year, the organizers are bringing together 20 Americas finest
                                bike racers from 20 American cities to participate and compete for best bike racer in the whole of America.
                            </p>
                            <p className="about-txt">This year's edition edition will take place at the our regular venue and you guessed right in Colorado at the foot of the Rocky Mountains.<br />
                            You our wonderful audience and also good citizens of America are not just coming to watch your favorite riders on the track of action,
                                you too can participate in suggesting a cool slogan for this year's Boulder Bike Tour for a chance to win something nice from the organizers. Awesome right? I know. 
                                <span> Click <Link to="/contest">here</Link> to submit your slogan suggestions for this year's Boulder Bike Tour.</span>
                            </p>
                            <p className="about-txt">While you are here feel free to explore our website by viewing photos, see list of this year's rider, track your favourite riders position on our map 
                                and don't forget to participate in the slogan contest as we countdown to this year's Boulder Bike Tour.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid image-banner">
                <h4 className="text-white">Photos From Past Editions of The Boulder Bike Tour</h4>
                <div className="row">
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike1} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike2} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike3} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike4} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike5} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike6} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike7} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <img src={bike8} alt="race-pix" className="imgz img-fluid"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
