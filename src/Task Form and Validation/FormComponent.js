import React, { useState } from 'react'
import { ShowError } from './ShowError';

const FormComponent = () => {
    const [input, setInput] = useState({
        email : "",
        password : "",
      

    })
    const[showErrors, setShowErrors]=useState([])

    const handleChange = (e) => {
        // if (e.target.name) {
        //   return setInput({ ...input, [e.target.name]: e.target.checked });
        // }
    
        return setInput({ ...input, [e.target.name]: e.target.value });
      };
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = input
        let message = []
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!re.test(String(data.email).toLowerCase())){
          message = [...message, 'email tidak valid']
        }
        
        if(data.email.length === 0){
          message = [...message, 'email tidak boleh kosong']
        }
        if(data.password.length === 0){
          message = [...message, 'password tidak boleh kosong']
        }
        if(data.password.length < 8){
          message = [...message, 'password terlalu pendek']
        }

        if(message.length > 0){
          setShowErrors(message)
          console.log(showErrors);
        }else{
            alert(`
            Email : ${input.email} 
            password : ${input.password}
        `)
        }


        setInput({
            email : "",
            password : "" ,
            
        })
    }
    

  return (
    <form  onSubmit={handleSubmit} className='w-50 border border-primary p-4 position-absolute top-50 start-50 translate-middle rounded'>
        {
          showErrors && <ShowError errorShow ={showErrors}/>
        }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={handleChange} value={input.email} id="exampleInputEmail1" placeholder='Masukan Email' name='email'/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleChange} value={input.password} id="exampleInputPassword1" placeholder='Masukan Password' name='password' />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" name='check'/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
)
}

export default FormComponent