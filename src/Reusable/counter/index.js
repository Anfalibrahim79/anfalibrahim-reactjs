import React from "react";

class Counter extends React.Component{
    state ={
        value: 0
    }
    handlePlus = () =>{
        this.setState({value : this.state.value + 1}, 
        () => this.props.receiveValue(this.state.value))
        
    }
    handleMinus = () =>{
        if(this.state.value > 0){
            this.setState({value: this.state.value -1},
                () => this.props.receiveValue(this.state.value))

        }
    }
    render(){
        return(
            <div style={{display: 'flex'}}>
                <button onClick={this.handleMinus}>-</button>
                <span>{'  '} {this.state.value} {' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}
export default Counter;