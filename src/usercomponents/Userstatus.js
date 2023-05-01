import React from'react';
import { Link } from 'react-router-dom';


function Userstatus()
{
    return(
       <div  style={{backgroundColor:'lightgray'}}>

<div className='container-fluid whole'>
      <div className='row header'>
        <div className='col-md-8'>
         <center><h1>Car Rental Application</h1></center> 
        </div>

       
        
        <div className='col-md-4 '>
          <nav className='ss'>
          <ul className='ulstyle' style={{paddingTop:'20px'}}>
        <Link to='/'><li>Available Cars</li></Link>
     
     <Link to='/Userhistory'><li> History</li></Link>
      <Link to='/Userstatus'><li>Status</li></Link>
          </ul>
          </nav>
        </div>

      </div>
      </div>
       
        <div >
            <center>
                <h3>Current Status:</h3>
            <div className='row' style={{backgroundColor:'rgb(135, 175, 207)'}}>
          <div className='col-md-6 '>
            <center><h4>Here You can Edit Your Booking Details</h4></center>
          <form className='f1'>
          <label >
                        Booking Id:&nbsp;
                    <input type="text"  />
                </label>
                <br/><br/>
                    <label >
                        Car Model:&nbsp; <input type="text"  />
                </label><br/><br/>
                <label >
                    Car Colour:&nbsp;<input type="text" />
                </label>
                <br/><br/>                             
                <label >
                    End Date:&nbsp;&nbsp;<input type="text" placeholder='m/dd/yyyy' />
                </label><br/><br/>
                <button className="btn1" type="submit">Modify Booking Details</button>
            </form>  
            </div>   
          <div className='col-md-6' >
          <center><h4>Here You can Cancel Your Booking </h4></center>
          <form className='f1'>
         <div style={{marginLeft:'1%'}}>
         <label style={{marginLeft:'-3%'}} >
                        Booking Id &nbsp;&nbsp;&nbsp;
                </label>
              <input type="text"  />
           
         </div>
            <br/>
            <div style={{marginLeft:'4%'}}>
            <label style={{marginLeft:'-3%'}}>
                     Licence Plate 
                </label>
               <input type="text"  />
            </div>
            <br/>
            <div>
            <label style={{marginLeft:'-3%'}} >
                  Time Left &nbsp;
                </label>
               <input type="text" style={{marginRight:'-9%'}}/>
            </div>
            <br/>
            <div>
            <label  > Amount Paid:&nbsp;&nbsp;
                </label>
               <input type="text" />
            </div>
          <br/>
         
                
<button className="btn2" type="submit">Terminate Booking</button>
        </form>  
          
          </div>
            </div>                  
            </center>
            <h3 style={{textAlign:'center',marginTop:'2%'}}>Booking Information</h3>
            <div className='row'>
                <div className='col-md-12'>
                 <center><table className='table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>UserName</th>
                            <th>CarName</th>
                            <th>Licence</th>
                            <th>Booking Id</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </table>
                  </center>
                </div>
            </div>
       </div>
       </div>
    );

}
export default Userstatus;