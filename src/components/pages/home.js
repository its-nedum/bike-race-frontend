import React from 'react'
import '../../styles/home.css'
import Timer from '../helpers/timer'
import bike from '../../images/bike.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="">
            <div className="welcome-banner">
                <div className="card bg-danger">
                    <div className="card-body">
                        <div className="card-title">
                        <h5>The city of Boulder, Colorado <i>Presents</i> </h5>
                        <h2>Boulder Bike Tour 2021 Edition</h2>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="container-fluid">
                <div className="row timer-banner">
                    <div className="col-md-8"></div>
                    <div className="col-sm-12 col-md-4 count-down">
                        <div className="row start-date">
                            <div className="text-center">
                                <h5 className="card-title">Start Date: Thursday, April 1, 2021</h5>
                            </div>
                        </div>
                        <div className="row count-down-timer">
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="about-banner">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About The <span className="text-danger standout-text">Boulder Bike Tour</span></h5><hr/>
                        <p className="about-text">Once in every decade the city of Boulder, Colorado brings together bike racer from and around cities in America to 
                        compete for glory and honour in the prestigious bike racing competition called The Boulder Bike Tour.
                        This bike racing competition has been on going for the 5th time in a row, and this year, the organizers are bringing together 20 Americas finest
                            bike racers from 20 American cities to participate and compete for best bike racer in the whole of America.
                        </p>
                        <p className="about-text">This year's edition edition will take place at the our regular venue and you guessed right in Colorado at the foot of the Rocky Mountains.<br />
                        You our wonderful audience and also good citizens of America are not just coming to watch your favorite riders on the track of action,
                            you too can participate in suggesting a cool slogan for this year's Boulder Bike Tour for a chance to win something nice from the organizers. Awesome right? I know. 
                            <span> Click <Link to="/contest">here</Link> to submit your slogan suggestions for this year's Boulder Bike Tour.</span>
                        </p>
                        <p className="about-text">While you are here feel free to explore our website by viewing photos, see list of this year's rider, track your favourite riders position on our map 
                            and don't forget to participate in the slogan contest as we countdown to this year's Boulder Bike Tour.
                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid image-banner">
                <h4 className="text-white">Photos From Past Editions of The Boulder Bike Tour</h4>
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
