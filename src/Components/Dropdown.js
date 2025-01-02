import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Dropdown() {
    
  return (
    <section>
<div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" >
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#"><img src='images/Property 1=AU.png'></img>'</a></li>
    <li><a className="dropdown-item" href="#">Link 2</a></li>
    <li><a className="dropdown-item" href="#">Link 3</a></li>
  </ul>
</div>
</section>
  );
}
