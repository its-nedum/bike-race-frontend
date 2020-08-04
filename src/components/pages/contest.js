import React, { useState } from 'react'
import '../../styles/contest.css'

const Contest = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [slogan, setSlogan] = useState('');
    const [btnValue, setBtnValue] = useState('SUBMIT')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !email || !slogan) {
            setError('All fields are required');
            return false;
        }

        if (/\S+@\S+\.\S+/.test(email) === false) {
            setError('Enter a valid email address')
            return false;
        }
            console.log({firstname,lastname,email,slogan})
        
    }
    return (
        <div>
            <div className="card contest-card">
                <div className="card-body">
                    <h3>It is the contest that delight us, and not the victory ~ Blaise Pascal</h3>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-sm-12 col-md-6">
                        <form className="contest-form mt-5">
                        <h3>Submit Your Slogan</h3>
                        <p>You think you have the perfect slogan for this year's edition? Lets' hear it.</p>
                        <p className="text-danger">{error}</p>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 input-group mb-3">   
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                </div>
                            <input type="text" className="form-control" placeholder="First Name" aria-label="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} aria-describedby="basic-addon1" required/>
                            </div>
                        
                            <div className="col-sm-12 col-md-6 input-group mb-3">   
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><span className="fas fa-user-circle"></span></span>
                                </div>
                            <input type="text" className="form-control" placeholder="Last Name" aria-label="lastname" value={lastname} onChange={e => setLastname(e.target.value)} aria-describedby="basic-addon1" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 input-group mb-3">   
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><span className="fas fa-envelope"></span></span>
                                </div>
                            <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} aria-label="email" aria-describedby="basic-addon1" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <textarea className="form-control" id="message" rows="3" value={slogan} onChange={e => setSlogan(e.target.value)} placeholder="Type your slogan here..." required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="submit_btn">
                                <input type="submit" className="form-control btn btn-primary" onClick={handleSubmit} value={btnValue} />
                            </div>
                        </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Contest
