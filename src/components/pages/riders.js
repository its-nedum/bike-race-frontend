import React from 'react'
import '../../styles/riders.css'

const Riders = () => {
    return (
        <div>
            <div className="card riders-card">
                <div className="card-body">
                    <h3>We know what we are, but not what we may be ~ Anonymous</h3>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <table className="table table-striped table-bordered table-info table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>City of Origin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dustin</td>
                                <td>Green</td>
                                <td>Hickory Hills</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jason</td>
                                <td>Finn</td>
                                <td>Huntington Beach</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Howard</td>
                                <td>Thompson</td>
                                <td>Hale</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Maggie</td>
                                <td>Lantz</td>
                                <td>Dublin</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Lawrence</td>
                                <td>Duran</td>
                                <td>Fort Myers</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Irene</td>
                                <td>Molina</td>
                                <td>Tucson</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Nancy</td>
                                <td>Garner</td>
                                <td>Baltimore</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Riders
