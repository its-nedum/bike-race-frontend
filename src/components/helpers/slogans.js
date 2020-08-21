import React from 'react'

const Slogans = () => {
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
