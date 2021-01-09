import React from 'react';
import "./MealApp.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export function MealApp() {
 
        return (
            <>
            <div className="content">
                <header id="header">MealApp <br></br><br></br>
                         welcome to this food page <br></br><br></br>
                         <img src="\src\client\assets\images\hyf.png" alt="" width="20" height="20"/>
                        <ul>
                        <li><Link to="/">main</Link></li>
                        <li><Link to="/meals">meals</Link></li>
                        <li><a href="#button">contact</a></li>
                        </ul>
                </header>
                <body>
                    <div className="left">
                         <h1>Rice Pudding</h1><br></br><br></br>
                         <><img src="\src\client\assets\images\rice.jpg" alt="" /></>

                         <h1>Soup Meat</h1><br></br><br></br>
                         <><img src="\src\client\assets\images\soup.png" alt="" /></>
                         
                     
                    </div>
                    <div className="right">
                         <h1>Duck with Onion</h1><br></br><br></br>
                         <><img src="\src\client\assets\images\duck.png" alt="" /></>


                         <h1>Fruit salad</h1><br></br><br></br>
                         <><img src="\src\client\assets\images\fruits.jpg" alt="" /></>

                    </div>
                </body>
                <footer>
                <ul className="img">
                          <h1><a id="button" href="#"> CONTACT US</a> </h1>
                          <li><a href="http://www.instagram.com"><img src="\src\client\assets\images\instagram.jpg" alt="" /></a></li>
                          <li><a href="http://www.twitter.com"><img src="\src\client\assets\images\twiter.png" alt="" /></a></li>
                          <li><a href="http://www.facebook.com"><img src="\src\client\assets\images\facebook.png" alt="" /></a></li>
                          <li><a href="https://www.hackyourfuture.dk/"><img src="\src\client\assets\images\logoAnna.png" alt="" /></a></li>
                        </ul>
                </footer>
           </div>
            
                   
                  
         </>
           
            
        );
    }


 