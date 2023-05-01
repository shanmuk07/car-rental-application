//  import React from 'react'
//  import vasu from './Images/wall.png'
// function Login()
// {
//     return(
//         // <div  style={{backgroundImage:`url(${vasu})`}} className='log' >
//         <div>
//         <div class="box" >
//             <div class="form">
//                 <h2>Login</h2>
//                 <div class="inputBox">
//                     <input type="text" required="required"/>
//                     <span>Username</span>
//                     <i></i>
//                 </div>
//                 <div class="inputBox">
//                     <input type="password" required="required"/>
//                     <span>Password</span>
//                     <i></i>
//                 </div>
//                 <div class="links">
//                     <a href='#'>Forgot password?</a>
//                     <a href='#'>Sign Up</a>
//                 </div>
//                 <a href='#'><input type="submit" value="Login"/></a>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default Login
import React from "react";
function Login(){
    return(
        <div>
      <div className="body">      
      <form>
          <div className="title">Login</div>
          <input type="email" placeholder="Email" class="user-input"/>
          <input type="password" placeholder="Password" class="user-input"/>
          <input type="submit" value="Start" class="submit-button"/>
      </form>
      </div>
  
        </div>
    )
}
export default Login