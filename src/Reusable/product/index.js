import React from "react";
import Counter from "../counter";
import Burger from '../asset/image1.jpg'



class Product extends React.Component{
    state = {
        value: 0
    }
    handleValue = (data) =>{
        this.setState({value: data})
    }
    render(){
        return(
            <>
             <div>
             <div className="card" style={{width: '18rem'}}>
                <img src={Burger} className="card-img-top"  />
                <div className="card-body">
                <h5 className="card-title">{this.state.value}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Counter receiveValue={this.handleValue} />
            </div>
      </div>

             </div>
            </>
        )
    }
}
export default Product;