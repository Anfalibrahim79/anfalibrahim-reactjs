import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardNews from './CardNews'
// import {BsSearch} from 'react-icons/bs'
import BeatLoader from "react-spinners/BeatLoader";


const NewsContent = () => {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  

  const[news, setNews]= useState([])
  const[search, setSearch] = useState('')
  const[loading, setLoading] = useState(false)
  const[currentPage, setCurrentPage] = useState(0)
  const[postPerPage, setPostPerPage] =useState(10)

  useEffect(() => {
    const fecthData = async () =>{
      setLoading(true)
      let result = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2022-12-12&to=2022-12-12&sortBy=popularity&apiKey=ca0598bf76a64e138b5d742f83ed10ea`)
      let data = result.data.articles
      console.log(data);

      setNews(data)
      setTimeout(() =>{
      setLoading(false)
    },3000)

    }
    fecthData()
  }, [])

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = news.slice(firstPostIndex, lastPostIndex)
  
  
  const handleSearch = (e) =>{
    setSearch(e.target.value)
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },2000)

    console.log(e);
  }

  return (
    <>
      <div className='news-content'>
            <div className='text-center text-content '>
              <h1 className='font-weight-bold p-5'>test</h1>
              <p className='mt-2 p-3 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aperiam, porro asperiores iste perspiciatis magnam repellat suscipit aspernatur in autem tempora libero officiis et mollitia, facere illum ex quidem quasi.</p>
              <div className='m-5'>
                <input type="text" id='news' className='input' placeholder="Search" onChange={handleSearch}/>

              </div>
              <div className='d-flex flex-wrap'>
                {
                  loading ? 
                  <BeatLoader
                  color={'#CDFCF6'}
                  loading={loading}
                  size={50}
                  cssOverride={override}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  />:
                  news.filter((item)=>{
                    return search.toLowerCase() === ''? item: item.title.toLowerCase().includes(search);
                    // if(search.toLowerCase() === ""){
                    //   return item
                    // }else{
                    //   return item.title.toLowerCase().includes(search)
                    // }
                  }).map((el, index) =>{
                    console.log(el);
                    return(
                      <CardNews data-aos="fade-up" dataNews = {el} currentPost={currentPost} index={index}/>
                     
                    )
                  })
                }
              </div>
            </div>
      </div>
    </>
  )
}

export default NewsContent