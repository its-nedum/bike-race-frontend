import React from 'react'
import '../../styles/home.css'
import Timer from '../helpers/timer'
import { Link } from 'react-router-dom'
import Footer from '../layouts/homeFooter'

const Home = () => {
    return (
        <div className="">
            <div className="welcome-banner">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                        <h5>The city of Boulder, Colorado <i>presents</i> </h5>
                        <h2>Boulder Bike Tour 2021 Edition</h2>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="bg-home">
                <Timer />
            </div> 
            <Footer /> 
        </div>
    )
}

export default Home
