import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Slogans = () => {
    const [slogans, setSlogans] = useState([])

    const getSlogans = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3001/api/v1/slogans',
            header: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            const { data:{ data} } = response
            setSlogans(data)
            //console.log(slogans)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getSlogans()
    });
    return (
        
        <div>
            <div className="card contest-card">
                <div className="card-body">
                    <h3>Here is a list of submitted slogan for the contest</h3>
                </div>
            </div>
            <div className="container">
                <div className="row mt-4">
                    
                    <div className="col-sm-12">
                    <table className="table table-color table-sm table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Slogan</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>1</td>
                                <td>Dustin</td>
                                <td>Green</td>
                                <td>Hickory Hills</td>
                                <td>Hickory Hills</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Slogans
