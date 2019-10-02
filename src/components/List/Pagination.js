import React from 'react';
import './Pagination.css';
const Pagination = (props) => {
    const {page, totalPages,handlePaginationClick}=props
    return(
        <div className="Pagination">
            <button className="Pagination-button" disabled={1===page} onClick={() =>{
                handlePaginationClick('prev')}
                }>
            

            
                &larr;
            </button>
                 <span className="Pagination-info">
                     Pag <b>{page}</b> of <b>{totalPages}</b>
                 </span>


            <button className="Pagination-button" disabled={totalPages===page} onClick={() =>{
                handlePaginationClick('next')
            }

            } >
                &rarr;
            </button> 
        </div>
    )
}
export default Pagination

