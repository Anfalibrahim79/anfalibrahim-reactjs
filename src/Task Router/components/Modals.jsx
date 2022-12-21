import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

const Modals = ({openModal, dataNews, setOpen}) => {
  const [show, setShow] = useState(openModal);
  useEffect(() =>{
    setShow(openModal)
  },[openModal]) 

  return (
    <> 
          

        <Modal
            show={show}
            onHide={() => setOpen(false)}
            dialogClassName="modal-200w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <div className='container'>
            <div className='row'>
                <div className="col-6">
                    <Modal.Title id="example-custom-modal-styling-title" className='text-center fs-5' >
                        {dataNews.title}
                    </Modal.Title>
                    <img src={dataNews.urlToImage} alt="imgnews" style={{width: "16rem", height: "10rem", padding: "10px"}}/>

                    

                </div>
                <div className="col-6">
                    <Modal.Body >
                    <p>
                        {dataNews.description}
                    </p>
                    <p>
                        author: <span className='fw-bold'>{dataNews.author}</span>
                    </p>
                    <p>
                        Published : <span className='fw-bold'>{dataNews.publishedAt}</span>
                    </p>
                    </Modal.Body>
                    
                </div>
            </div>
        </div>
        <div className='d-flex flex-row justify-content-center gap-4 p-3' >
            <button className='btn'><a href={dataNews.url} className="text-decoration-none">Go to News</a></button> 
            <button className='btnClose' onClick={() => setOpen(false)}>Close</button> 
        </div>
        </Modal>

    </>
  )
}

export default Modals