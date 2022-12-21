import React from 'react'

const Pagination = ({totalPost, postPerPage, setCurrentPage}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
        pages.push(i)
        
    }
  return (
    <div className='pagination'>
        {
            pages.map((el, index)=>{
                return(
                    
                    <button key={index} onClick={()=> setCurrentPage(el)}>{el}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination