import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modals from './Modals'
import {BiDetail} from 'react-icons/bi'



const CardNews = ({dataNews}) => {

  const[openModal, setOpenModal] = useState(false)
  const[newsData, setDataNews]= useState({})
  
  const handleClick = (e) => {
    setOpenModal(true)
    setDataNews(e)
  }
  return (
    <>
        {   
            
            dataNews.map((el, index) => {
                return(

                <Card  className='shadow p-3 mb-5 bg-white rounded card' style={{ width: '17rem' , margin: '0 20px', height: '28rem', padding: "10px"}} key={index}>
                    <Card.Title style={{height : "70px"}}>{el.title}</Card.Title>
                    <Card.Img variant="top" style={{width: "15rem", height: "9rem", marginTop: "70px", marginBottom: "20px"}} src={el.urlToImage} />
                    <Card.Body>
                    <button className='btn-detail' type='button' onClick={() => handleClick(el)}><BiDetail/>More Detail</button>
                    </Card.Body>
                    
                </Card>
                )
            })
        }
      <Modals setOpen={setOpenModal} openModal={openModal} dataNews={newsData}/>
    </>
    
  )
}

export default CardNews