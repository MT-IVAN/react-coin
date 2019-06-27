import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props) =>{
    const {page, totalPages, paginationClick } = props;
    return(
        
        <div className="Pagination">
            <button
            className="Pagination-button"
            //Los parametros se los puede llamar dos formas-- CALLBACK
            onClick={() => paginationClick('prev')}
            disabled={page<=1}
            > 
                &larr;
            </button>

        <span className="Pagination-info">
            page <b>{page}</b> of <b>{totalPages}</b>
        </span>

            <button
            className="Pagination-button"
            //Los parametros se los puede llamar dos formas-- BIND
            onClick={paginationClick.bind(this, 'next')}
            disabled={page>=totalPages}
            >
                &rarr;
            </button>
        </div>
    );

}

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    paginationClick: PropTypes.func.isRequired,
}

export default Pagination;