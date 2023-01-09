import { useState } from "react"
import {FaUser} from "react-icons/fa"

function Register() {

  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]:e.target.value

    }))
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
      <form>
        <div className="form-group">
          <input
           type="text"
           className='form-control' 
           id = 'name' 
           name="name"
           value={name}
           placeholder="Please enter your name"
           onChange={onChange} />
        </div>

        <div className="form-group">
          <input
           type="email"
           className='form-control' 
           id = 'email' 
           name="email"
           value={email}
           placeholder="Please enter your email address"
           onChange={onChange} />
        </div>

        <div className="form-group">
          <input
           type="password"
           className='form-control' 
           id = 'password' 
           name="password"
           value={password}
           placeholder="Please enter your password"
           onChange={onChange} />
        </div>

        <div className="form-group">
          <input
           type="password"
           className='form-control' 
           id = 'password2' 
           name="password2"
           value={password2}
           placeholder="Please confirm your password"
           onChange={onChange} />
        </div>
      </form>
    </section>
    </>
  )
}

export default Register