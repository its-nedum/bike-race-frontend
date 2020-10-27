import React from 'react'
import '../../styles/home.css'
import Highlights from '../helpers/highlights'
import Timer from '../helpers/timer'
import Footer from '../layouts/footer'

const Home = () => {
    return (
        <div className="">
            <div className="welcome-banner">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title heading-txt">
                        <h5>The city of Boulder, Colorado <i>presents</i> </h5>
                        <h2>Boulder Bike Tour 2021 Edition</h2>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="bg-home">
                <Timer />
            </div> 

            <div className="bg-highlight">
                <Highlights />
            </div>

            <Footer /> 
        </div>
    )
}

export default Home
