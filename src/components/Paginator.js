import React from 'react'

const Paginator = ({ resultsPerPage, totalResults, paginate }) => {
    const pageNumbers = [];
    
    // Calculate the amount of pages 
    for(let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="paginator">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" >
                        <a onClick={() => paginate(number)} href="!#" className="page-link" >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Paginator;