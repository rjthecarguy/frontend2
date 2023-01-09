import { useState } from "react"
import {FaUser} from "react-icons/fa"
import {toast} from "react-toastify"

function Register() {

  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]:e.target.value

    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password != password2) {
      toast.error("Passswords do not match")
    }
  }

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })

  const  {name, email, password, password2} = formData

  return (
    <>
    <section className="heading">
      <h1><FaUser/> Register</h1>
      <p>Please create an account</p>
    </section>
    
    <section className="form">
      <form onSubmit = {onSubmit}>
        <div className="form-group">
          <input
           type="text"
           className='form-control' 
           id = 'name' 
           name="name"
           value={name}
           placeholder="Please enter your name"
           onChange={onChange}
           required />
        </div>

        <div className="form-group">
          <input
           type="email"
           className='form-control' 
           id = 'email' 
           name="email"
           value={email}
           placeholder="Please enter your email address"
           onChange={onChange}
           required />
        </div>

        <div className="form-group">
          <input
           type="password"
           className='form-control' 
           id = 'password' 
           name="password"
           value={password}
           placeholder="Please enter your password"
           onChange={onChange}
           required />
        </div>

        <div className="form-group">
          <input
           type="password"
           className='form-control' 
           id = 'password2' 
           name="password2"
           value={password2}
           placeholder="Please confirm your password"
           onChange={onChange}
           required />
        </div>
        <div className="form-group">
          <button className="btn btn-block">
            Submit
          </button>  
        </div>
      </form>
    </section>
    </>
  )
}

export default Register