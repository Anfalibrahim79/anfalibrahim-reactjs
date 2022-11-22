import React from "react";

class ContainBody extends React.Component{
    render(){
        return(
            <div>
                <div className="p-5 text-center bg-black text-white">
                    <h1 className="display-3">Hello, my name </h1>
                    <p className="lead display-2">ANFAL IBRAHIM</p>
                    <hr className="my-2"></hr>
                    <p className="lead">
                    <a className="btn btn-primary btn-lg mt-3" href="https://www.google.com/" role="button">Click here!</a>
                    </p>
                </div>
            </div>
        )
    }
}
export default ContainBody;