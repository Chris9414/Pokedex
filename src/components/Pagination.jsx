import React from 'react';
import { useState } from 'react';

const Pagination = ({currentPage,setCurrentPage,totalPages}) => {
    
    const [page,setPage] = useState(1)
    const [selectedPage, setSelectedPage] = useState(1)

    const nextPage = () =>{
        if( page < totalPages){
        setPage(page + 1)
        setCurrentPage(currentPage + 1)
    }}

    const backPage = () =>{
        if(page>1){
        setPage(page - 1)
        setCurrentPage(currentPage - 1)
    }}

    const selectPage = () =>{
        if(selectedPage<107){
        setPage(selectedPage)
        setCurrentPage(selectedPage)
    }else{
        alert("Pagina no existe")
    }}

    
    return (
        <div className='pagination'>
            <div className='pagination-container'>
                <button className='back-pagination-button' onClick={backPage}>Back</button>
                <p className='current-page'> {currentPage} of {totalPages}</p>
                <button className='next-pagination-button' onClick={nextPage}>Next</button>
            </div>
            
            <div className='search-page'>
                 <input type='text' placeholder="write the page number..." value={selectedPage} onChange={e => setSelectedPage(e.target.value)}/>
                <button onClick={selectPage}>Go to page</button>
            </div>
        </div>
    );
};

export default Pagination;