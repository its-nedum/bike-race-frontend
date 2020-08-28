import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from './spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../layouts/footer'

const Slogans = () => {
    const successMsg = () => toast.success("Submissions loaded successfully!");
    const [slogans, setSlogans] = useState([])

    useEffect(() => {
        const getSlogans = () => {
            axios({
                method: 'GET',
                url: 'https://boulderbiketour-api.herokuapp.com/api/v1/slogans',
                header: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                const { data:{ data} } = response
                setSlogans(data)
                successMsg()
            }).catch((err) => {
                console.log(err);
            })
        }
        getSlogans()
    }, []);

    return (
        
        <div>
            <div className="card contest-card">
                <div className="card-body">
                    <h3>Here is a list of submissions for the slogan contest</h3>
                </div>
            </div>
            <div className="container">
                <div className="row mt-4">
                <ToastContainer />    
                    <div className="col-sm-12">
                    {slogans.length === 0 ? <Spinner /> : 
                    <div className="table-responsive">
                        <table className="table table-color table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Submission</th>
                                </tr>
                            </thead>
                            <tbody>
                            { slogans && slogans.map((slogan) => {
                                    return(
                                        <tr key={slogan.id}>
                                            <td>{slogan.id}</td>
                                            <td>{slogan.firstname}</td>
                                            <td>{slogan.lastname}</td>
                                            <td>{slogan.email}</td>
                                            <td>{slogan.slogan}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    }
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Slogans
