import React from 'react'
import { useState } from 'react'
import CardNews from './CardNews'



const NewsContent = () => {
  const[search, setSearch] = useState('');
  const[loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }


  return (
    <div className='news-content'>
    <div className='text-center text-content '>
      <h1 className='font-weight-bold p-5'>test</h1>
      <p className='mt-2 p-3 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aperiam, porro asperiores iste perspiciatis magnam repellat suscipit aspernatur in autem tempora libero officiis et mollitia, facere illum ex quidem quasi.</p>
      <div className='m-5'>
        <input type="text" id='news' className='input' placeholder="Search" onChange={handleSearch} />

      </div>
      <div className='d-flex flex-wrap'>
        <CardNews search= {search} loading={loading}/>
        {/* <CardNews dataNews={currentPost} searchNews ={search}/>
        <Pagination  totalPost={news.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/> */}
      </div>
    </div>
</div>
  )
}

export default NewsContent