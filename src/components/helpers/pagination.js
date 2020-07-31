import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({photosPerPage,totalPhotos,paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++){
            pageNumbers.push(i)
    }
    return(
        <div className="row">
        
            
                <nav aria-label="Page navigation example">
                    <ul className="pagination center">
                        <li className="disabled page-item"><Link to="#!" className="page-link">Previous</Link></li>
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <Link onClick={ () => paginate(number)} to="#!" className="page-link">{number}</Link>
                            </li>
                        ))}
                        <li className="disabled page-item"><Link to="#!" className="page-link">Next</Link></li>
                    </ul>
                </nav>
            
        </div>
    )
}

export default Pagination