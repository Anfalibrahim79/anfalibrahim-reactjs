import React from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { BiDetail } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { getListNews } from '../actions/newsAction';

const CardNews = () => {
    const{getListNewsResult, getListNewsLoading, getListNewsError }= useSelector((state) => state.NewsReducer)
    const dispatch = useDispatch();

    useEffect(() => {

        //panggil action getListNews
        console.log('useEffect componentDidMount');
        dispatch(getListNews());
    },[dispatch])
  return (
    <>
      {
        getListNewsResult ? (
          getListNewsResult.map((el, index) => {
            return (
              <Card key={index} className='shadow p-3 mb-5 bg-white rounded card' style={{ width: '17rem' , margin: '0 20px', height: '28rem', padding: "10px"}} >
                  <Card.Title style={{height : "70px"}}>{el.title}</Card.Title>
                  <Card.Img variant="top" style={{width: "15rem", height: "9rem", marginTop: "70px", marginBottom: "20px"}} src={el.urlToImage} />
                  <Card.Body>
                    <button className='btn-detail' type='button'><BiDetail/>More Detail</button>
                  </Card.Body>
              </Card>
            )
          })

        ): getListNewsLoading ? (
          <p>Loading ....</p>
        ):  (
          <p>{getListNewsError ? getListNewsError : 'Data Kosong'}</p>
        )
      }
      
      
    </>
  )
}

export default CardNews