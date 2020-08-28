import React from 'react'
import '../../styles/riders.css'
import bike from '../../images/b1.jpg'
import Footer from '../layouts/footer'

const Riders = () => {
    return (
        <div>
            <div className="card riders-card">
                <div className="card-body">
                    <h3>We know what we are, but not what we may be ~ Anonymous</h3>
                </div>
            </div>
            <div className="container-fluid">
            <h3 className="rider-title">Meet our riders for this edition</h3>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-7">
                    <div className="table-responsive">
                    <table className="table table-color table-sm">
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
                                <td>8</td>
                                <td>Tara</td>
                                <td>Taylor</td>
                                <td>Minneapolis</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Alejandro</td>
                                <td>Smith</td>
                                <td>Scarborough</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Tricia</td>
                                <td>Renshaw</td>
                                <td>Mystic</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Travis</td>
                                <td>Cook</td>
                                <td>Twin Lakes</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Joan</td>
                                <td>Brooks</td>
                                <td>Norfolk</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Joseph</td>
                                <td>Rodgers</td>
                                <td>Wayne</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Matthew</td>
                                <td>Gregson</td>
                                <td>Brashear</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Katie</td>
                                <td>Dunlap</td>
                                <td>Marion</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Leo</td>
                                <td>Howard</td>
                                <td>Dallas</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Maria</td>
                                <td>Baisden</td>
                                <td>Raleigh</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Sandy</td>
                                <td>Townsend</td>
                                <td>Newport</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Melinda</td>
                                <td>Stephenson</td>
                                <td>Kahului</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>Jason</td>
                                <td>Nichols</td>
                                <td>Alexandria</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <img src={bike} className="img-fluid" alt="riders" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Riders
