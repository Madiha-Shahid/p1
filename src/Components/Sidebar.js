// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';  // Importing the CSS file for sidebar styling
import Form from 'react-bootstrap/Form';


export default function Sidebar() {
  return (
    <div>
    
    <div className="sidebar">
      <nav>
        <ul>
            <h2>  category</h2>
          <li><a href="/Mobile Accessory"></a></li>
          <li><a href="/Electronics">Electronics</a></li>
          <li><a href="/Smart Phones">Smart Phones</a></li>
          <li><a href="/Modern Tech">Modern Tech</a></li>
          <li><a href="/Modern Tech">See All</a></li>
        </ul>

        
<ul>
            <h2>Brands</h2>
            <label>
          <li><input type='checkbox'/>samsung</li>
        <li> <input type='checkbox'/>huawei</li>
        <li><input type='checkbox'/>apple</li>
        <li> <input type='checkbox'/>poco</li>
        <li><a href="/Modern Tech">See All</a></li>
       
            </label>
            </ul>


            <ul>
            <h2>Features</h2>
            <label>
          <li><input type='checkbox'/>Mettalic</li>
        <li> <input type='checkbox'/>Plastic cover</li>
        <li><input type='checkbox'/>8 GB RAM</li>
        <li> <input type='checkbox'/>super power</li>
        <li> <input type='checkbox'/>large memory</li>
        <li><a href="/Modern Tech">See All</a></li>
       
            </label>
            </ul>


           


         
    
      <Form.Label>Range</Form.Label>
      <Form.Range />
      <button type="button" className='tech-button'>Move to Cart</button>

<img src='images/Rating=Rating, Stars=stars-3.png'></img>

      </nav>
    </div>
 
    </div>

  )

};




