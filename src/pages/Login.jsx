import { useState } from "react"
import {FaSignInAlt} from "react-icons/fa"
import {toast} from "react-toastify"

function Login() {

  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]:e.target.value

    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

   
  }

  const [formData, setFormData] = useState({
    email:"",
    password:""
    })

  const  {email, password} = formData

  return (
    <>
    <section className="heading">
      <h1><FaSignInAlt/> Login</h1>
      <p>Please log in</p>
    </section>
    
    <section className="form">
      <form onSubmit = {onSubmit}>
        

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
          <button className="btn btn-block">
            Submit
          </button>  
        </div>
      </form>
    </section>
    </>
  )
}

export default Login