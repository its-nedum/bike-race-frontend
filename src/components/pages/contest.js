import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/contest.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contest = () => {
    // success and error message
    const successMsg = () => toast.success("Slogan submitted successfully!");
    const errorMsg = () => toast.error("An error occurred!");

    // my hooks
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [slogan, setSlogan] = useState('');
    const [btnValue, setBtnValue] = useState('SUBMIT')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if all fields are filled
        if (!firstname || !lastname || !email || !slogan) {
            setError('*All fields are required');
            return false;
        }
        // check if the email is valid
        if (/\S+@\S+\.\S+/.test(email) === false) {
            setError('*Enter a valid email address')
            return false;
        }

        // check for length of slogan
        if (slogan.length > 50) {
            setError('*Slogan idea must be under 50 characters')
            return false;
        }

        // when all input fields are filled
        if (firstname && lastname && email && slogan){
            setError('')
            setBtnValue('Sending...')

            // prepare data
            const entry = {
                firstname,
                lastname,
                email,
                slogan,
            }

            axios({
                method: 'POST',
                url: 'http://localhost:3001/api/v1/slogans',
                header: {
                    'Content-Type': 'application/json',
                },
                data: entry
            }).then((response) => {
                const { data:{ status } } = response
                if(status === 'Success'){
                    // clear all entries
                    setFirstname('')
                    setLastname('')
                    setEmail('')
                    setSlogan('')
                    setBtnValue('SUBMIT')

                    // call react-toastify
                    successMsg()
                }
                
            }).catch((err) => {
                console.log(err);
                errorMsg()
            })
        
        }

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
                    <ToastContainer />
                        <form className="contest-form mt-5" onSubmit={handleSubmit}>
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
                <div className="row">
                    <div className="center-text">
                        <Link to="/submissions" className="">View Submissions</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contest
