import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="footer-menu">
                <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <h4>About Us</h4>
                                <p className="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, neque perferendis ipsam dignissimos tempore vitae. Asperiores quae consequatur officiis veritatis esse fugit autem perferendis nihil. Odio, reprehenderit. Exercitationem, repudiandae impedit.</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h4>Quick Links</h4>
                                <div className="explore-links">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/photos">Photos</Link></li>
                                        <li><Link to="/locations">Location</Link></li>
                                        <li><Link to="/riders">Riders</Link></li>
                                        <li><Link to="/contest">Contest</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 mb-3">
                                <h4>Follow Us</h4>
                                <div className="social_links">
                                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-youtube"></span></a></li>
                                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"></span></a></li>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row text-muted">
                        <div className="col-md-3"></div>
                            <p>&copy; 2020 Prestigious Bike Race. All rights reserved | Developed by <a href="https://chineduemesue.netlify.app" target="_blank" rel="noopener noreferrer">Chinedu Emesue</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
