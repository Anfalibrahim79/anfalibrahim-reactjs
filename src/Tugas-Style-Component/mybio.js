import React from "react";
import './biografi.css'
import asset1 from './assets/asset1.jpg'
import asset2 from './assets/asset2.jpg'
import asset3 from './assets/asset3.png'

class MyBio extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid text-center mybio" id="bio">
                    <h3 className="fw-bold pt-4">My BIO</h3>
                    <p className="fs-2 p-5 fs-italic">
                    Halo perkenalkan nama saya Anfal Ibrahim, Umur saya 21 tahun, lulusan SMAN
                    1 Banjaran dan lulus pada tahun 2018, tinggal di Bandung.
                    </p>
                    
                    <div className="row row-cols-1 row-cols-md-3 g-6 ">
      
                     
                            <div className="col">
                                <div className="card w-100" >
                                    <h6 className="fs-5 fw-bold">Listening musik</h6>
                                    <img src={asset1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">
                                        Dengan musik seseorang dapat menyebabkan tubuh mengeluarkan endorfin
                                        atau hormon kenikmatan sehingga dapat meredakan rasa nyeri tersebut.
                                        Selain itu musik memiliki manfaat lain yaitu menurunkan tekanan darah
                                        dan merelaksasi jantung. Musik juga dapat membantu penderita migrain
                                        serta mampu meningkatkan kekebalan tubuh.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                            <div className="col">
                                <div className="card w-100" >
                                    <h6 className="fs-5 fw-bold">Playing Game</h6>
                                    <img src={asset2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">
                                        Game adalah sesuatu yang dapat dimainkan dengan aturan tertentu sehingga ada yang menang dan ada yang kalah, biasanya dalam konteks tidak serius atau dengan tujuan refreshing.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                            <div className="col">
                                <div className="card" >
                                    <h6 className="fs-5 fw-bold">Listening musik</h6>
                                    <img src={asset3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">
                                        Bernyanyi atau bersenandung adalah suatu tindakan vokal untuk menghasilkan hal musikal dengan menggunakan suara dan juga menambah pidato reguler, tentunya ditambah dengan menambahkan nada suara yang berkelanjutan dalam penggunaanya serta irama dan berbagai teknik vokal lainnya.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                            
                        
                    
                           
                    

                    </div>
                </div>
            </div>
        )
    }
}
export default MyBio;