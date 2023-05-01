import React from 'react'
import './login.scss'
const Login = () => {
  return (
    <div>
      <div className="login-form">
        <h2>Login</h2>
        <div className="logins">
            <div className="userlogin">
                <h3>User Login</h3>
                <form>
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" />
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password" />
                        <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="ownerlogin">
                <h3>Owner Login</h3>
                <form>
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" />
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password" />
                        <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="adminlogin">
                <h3>Admin Login</h3>
                <form>
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" />
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password" />
                        <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
