import React from 'react'
import { Card, Button } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';



export default class NewsContent extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            news : [],
            seacrh: "",
            
        }
    }
    

    componentDidMount(){
        fetch('https://berita.apiku.workers.dev/v2/top-headlines?country=id&apiKey=ca0598bf76a64e138b5d742f83ed10ea')
        .then((res) => res.json())
        .then((e) =>{
            const dataNews = e.articles;
            console.log(dataNews);
            this.setState({ 
                news : dataNews
            })
        })
        AOS.init()
    }
    

   
  
  
    render() {
    
    return (
      <>
        <div className='container-news'>
            <div className="input-group mb-3 w-25 inputSearch ">
                <input onChange={(e) => this.setState({seacrh : e.target.value}, ()=> console.log(this.state))} type="text" className="form-control" placeholder="Search News" aria-label="Search News" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">Search</span>
                <div className='input-search'></div>
                </div>
            </div>
            <div  className='d-flex flex-wrap align-items-center newsCard'>
                {
                    this.state.news.filter((item) => {
                        return this.state.seacrh.toLowerCase() === "" ? item : item.title.toLowerCase().includes(this.state.seacrh)
                    }).map((el, index) => {
                        return(
                            <Card data-aos="fade-right"  className='shadow p-3 mb-5 bg-white rounded card' style={{ width: '17rem' , margin: '0 20px', height: '30rem', padding: "10px"}} key={index}>
                                <Card.Title className='fs-6' style={{height: "30px"}}>{el.title}</Card.Title>
                                <Card.Img variant="top" src={el.urlToImage} style={{width: "100%", height: "10rem", marginTop: "70px", marginBottom: "10px", padding: "10px 20p"}} />
                                <Card.Body>
                                    <Card.Text style={{height: "15px", textAlign: "center"}}>
                                    Author :"{el.author}"
                                    </Card.Text>
                                    <a href={el.url}><Button variant="primary" style={{marginTop : "50px", marginLeft: "40px"}}>Source News....</Button></a>
                                    
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
      </>
    )
  }
}
