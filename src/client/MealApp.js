import React from 'react';
import "./MealApp.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



export function MealApp() {    
 
        return (
            <>
            <div className="content">
                <header id="header"> <br></br><br></br>
                            <p>mealApp</p> 
                         <h1>welcome to this food page, meal sharing is you best option</h1> <br></br><br></br>
                          
                        <ul>
                        <li><Link to="/">main</Link></li>
                        <li><Link to="/meals">meals</Link></li>
                        <li><a href="#button">contact</a></li>    
                        </ul>
                </header>
                <body>
                    <div className="left">
                         <h1>Rice Pudding</h1><br></br><br></br>
                         <p>this is pudding</p>

                         <h1>Soup Meat</h1><br></br><br></br>
                         <p>this is Meat</p>
                         
                     
                    </div>
                    <div className="right">
                         <h1>Duck with Onion</h1><br></br><br></br>
                         <p>this is onion</p>


                         <h1>Fruit salad</h1><br></br><br></br>
                         <p>this is salad</p>

                    </div>
                </body>
                <footer>
                <ul className="img">
                          <h1><div id="button" href="#"> Copyright meal Sharing app Diego Ruiz </div> </h1>
                          
                        </ul>
                </footer>
           </div>
            
                   
                  
         </>
           
            
        );
    }