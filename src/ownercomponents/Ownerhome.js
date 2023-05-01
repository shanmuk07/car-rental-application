import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import car1 from '../images/Audi.jpg';
import car2 from '../images/BMW.png'
import car3 from '../images/Hyundai.jpg'
import car4 from '../images/KIA.jpg'
// import car5 from '../images/Scorpio.jpg'
// import car6 from '../images/Thar.jpg'
import {AiFillStar} from 'react-icons/ai'
import { CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Ownerhome = () => {
    const navigate = useNavigate();
    const navigatecar = () =>{
      navigate('/Ownersinglecar');
    }

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-md-3">
          <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car1} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{ fontSize:"19px" , textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car2} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car3} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car4} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car2} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car2} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car1} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car2} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Ownerhome;