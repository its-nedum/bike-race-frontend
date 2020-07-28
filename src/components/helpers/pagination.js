import React from 'react'

const Pagination = () => {
    return(
        <div className="row">
        <div className="col-md-4"></div>
            <div className="col-sm-12 col-md-4">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="!#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="!#">1</a></li>
                        <li className="page-item"><a className="page-link" href="!#">2</a></li>
                        <li className="page-item"><a className="page-link" href="!#">3</a></li>
                        <li className="page-item"><a className="page-link" href="!#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination