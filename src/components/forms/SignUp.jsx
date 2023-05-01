import React from 'react'
import './signup.scss'
const SignUp = () => {
  return (
    <div className='SignUp'>
        <h2>SignUp</h2>
      <div className="form">
        <form>
            <input type="text" placeholder='Enter Name' />
            <input type="email" placeholder='Enter Email' />
            <input type="text" placeholder='Enter Mobile Number'/>
            <input type="text" placeholder='Enter License Number'/>
            <input type="password" placeholder='Enter Password' />
            <input type="password" placeholder='Enter Confirm Password' />
            <button type="submit" className="btn btn-success">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
