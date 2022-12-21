import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import CardNews from './CardNews';
import Pagination from './Pagination';

const NewsContent = () => {
    const[news, setNews] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const[postPerPage] =useState(12);
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fecthData = async  () =>{
        let result = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2022-12-12&to=2022-12-12&sortBy=popularity&apiKey=ca0598bf76a64e138b5d742f83ed10ea`);
        let output = result.data.articles
        // console.log(output);
        setNews(output)
        }
        fecthData()
    },[])
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = news.slice(firstPostIndex, lastPostIndex);

    const handleSearch = (e) => {
      setSearch(e.target.value)
      // console.log(e);
    }

  return (
    <>
        <div className='news-content'>
            <div className='text-center text-content '>
              <h1 className='font-weight-bold p-5'>test</h1>
              <p className='mt-2 p-3 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aperiam, porro asperiores iste perspiciatis magnam repellat suscipit aspernatur in autem tempora libero officiis et mollitia, facere illum ex quidem quasi.</p>
              <div className='m-5'>
                <input type="text" id='news' className='input' placeholder="Search"  onChange={handleSearch}/>

              </div>
              <div className='d-flex flex-wrap'>
                
                <CardNews dataNews={currentPost} searchNews ={search}/>
                <Pagination  totalPost={news.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
              </div>
            </div>
      </div>
    </>
  )
}

export default NewsContent