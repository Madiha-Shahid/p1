import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "./Dropdown";
import "./Details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Detailscart() {
  const [text, setText] = useState('description');

  const handleOnClick = (e) => {
   
    setText(<Describe/>);
    
    
  };

  const Describe = () => {
    return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>;
  };

  return (
    <>
      <div className="container-header">
        <img src="images/image.png" alt="Header" />
        <div className="search-form-button">
          <div className="search">
            <input placeholder="Search" />
          </div>
          <div className="form-button">
            <div className="container-form">
              <Form.Select>
                <option>All category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="search-button">
              <button type="button" className="btn-primary">Apply</button>
            </div>
            </div>
            </div>

</div>

           
          
        
    < div className="pmoc">

              <div className="p1">
           <img src="Dimages/Vector1.png"/>

           <p >profile</p>
           </div>

           <div className="p1">
           <img src="Dimages/Vector.png"/>
           <p>Cart</p>

           </div>
           <div className="p1">
           <img src="Dimages/Vector2.png"/>
           <p>Message</p>
           </div>

           <div className="p1">
           <img src="Dimages/Vector3.png"/>
           <p>Orders</p>
            </div>
            </div>

      <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">All Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hot Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gift Boxes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu Items</a>
              </li>
              <li className="nav-item dropdown">
                <Dropdown />
              </li>
            </ul>
          </div>
        </nav>

       {/* <div className="dropdown-FLAGS">
          <button
            type="button"
            
            data-bs-toggle="dropdown"
          >
           ENG,USD
          </button>
          <ul>
            <li><a className="dropdown-item" href="#">ENG, USD</a></li>
            <li><a className="dropdown-item" href="#">ENG, USD</a></li>
            <li><a className="dropdown-item" href="#">ENG, USD</a></li>
          </ul>
        </div>*/}
      </div>

      <div className="b-crumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Clothings</a></li>
            <li className="breadcrumb-item"><a href="#">Men's Wear</a></li>
            <li className="breadcrumb-item"><a href="#">Summer Clothings</a></li>
          </ol>
        </nav>
      </div>

      <div className="imgdetails">
        <img src="Dimages/image 34.png" alt="Main" />
</div>


        <div className="dimgrid">
          <img src="Dimages/Image 39.png" alt="Thumbnail 1" />
          <img src="Dimages/Image 35.png" alt="Thumbnail 2" />
          <img src="Dimages/Image (1).png" alt="Thumbnail 3" />
          <img src="Dimages/Image 36.png" alt="Thumbnail 4" />
          <img src="Dimages/Image 37.png" alt="Thumbnail 5" />
          <img src="Dimages/Image 39.png" alt="Thumbnail 6" />
        </div>





        <div className="sideinfo">
          <img src="Dimages/Aviable.png" alt="Available" />
          <h1>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>
          <img src="Dimages/Rating.png" alt="Rating" />


          <div className="price">
            <h3>$98.00</h3>
            <h3>$90.00</h3>
            <h3>$78.00</h3>
            <p>50-100pcs</p>
            <p>100-700pcs</p>
            <p>700+ pcs</p>
          </div>

          </div>









          <div className="inquiry">
            <img src="Dimages/img.jpg"/>
            <p className="itxt">Supplier</p>
            <p className="itxt2">Guanjoi Trading LLC</p>
          </div>








<div className="inquiry-2">

  <img src="Dimages/icon.png"/>
  <p className="txt">Germany, Berlin</p>
  <img src="Dimages/verified_user.png"/>
  <p className="txt">Verified Seller</p>
  <img src="Dimages/language.png"/>
  <p className="txt">Worldwide shipping</p>

  <button type="btn btn-primary" className="bb">send inquiry</button>
  <button type="btn btn-primary" className="wb">Seller's profile</button>
</div>








<div className="sfl">
  <img src="Dimages/favorite_border.png"/>
  <p className="tsfl">save for later</p>
</div>









          <div className="pdetail">
            <p>Price:</p>
            <p>Negotiable</p>
            <p>Type:</p>
            <p>Classic shoes</p>
            <p>Material:</p>
            <p>Plastic material</p>
            <p>Design:</p>
            <p>Modern nice</p>
            <p>Customization:</p>
            <p>Customized logo and design custom packages</p>
            <p>Protection:</p>
            <p>Refund Policy</p>
            <p>Warranty:</p>
            <p>2 years full warranty</p>
          </div>






          <nav className="tags">
            <a href="#" onClick={handleOnClick}>Description</a>
            <a href="#" onClick={handleOnClick} >Reviews</a>
            <a href="#"onClick={handleOnClick}>Shipping</a>
            <a href="#"onClick={handleOnClick}>About Seller</a>

          </nav>

          <div>{text}</div> 
        






<div className="dflex">
  <p>Model </p>
  <p>#8786867</p>
  <p>Style</p>
  <p>Classic style</p>
  <p>Certificate</p>
  <p>ISO-898921212</p>
  <p>Size</p>
  <p>34mm x 450mm x 19mm</p>
  <p>Memory</p>
  <p>36GB RAM</p>
</div>














<div className="features">

 <img src= "Dimages/check.png" /><p className="ptxt">Some great feature name here</p>
 <img src= "Dimages/check.png" /><p className="ptxt">Lorem ipsum dolor sit amet, consectetur </p>
 <img src= "Dimages/check.png" /><p className="ptxt">Duis aute irure dolor in reprehenderit</p>
 <img src= "Dimages/check.png" /><p className="ptxt">Some great feature name here</p>

</div>










        <div className="like">

          <div className="l1">
          <img src="Dimages/Group 558 (1).png" alt="Like 1" />
          <div className="l1t">
          <p>Men Blazers Sets Elegant Formal</p>
          <p>$7.00 - $99.50</p>
          </div>
          </div>

          <div className="l1">
          <img src="Dimages/Group 558 (2).png" alt="Like 2" />
          <div className="l1t">
          <p>Men Blazers Sets Elegant Formal</p>
          <p>$7.00 - $99.50</p>
          </div>
          </div>

          <div className="l1">
          <img src="Dimages/Group 558 (3).png" alt="Like 3" />
          <div className="l1t">
          <p>Men Blazers Sets Elegant Formal</p>
          <p>$7.00 - $99.50</p>
          </div>
          </div>

          <div className="l1">
          <img src="Dimages/Group 558 (4).png" alt="Like 4" />
          <div className="l1t">
          <p>Men Blazers Sets Elegant Formal</p>
          <p>$7.00 - $99.50</p>
          </div>
          </div>

          <div className="l1">
          <img src="Dimages/Group 558.png" alt="Like 5" />
          <div className="l1t">
          <p>Men Blazers Sets Elegant Formal</p>
          <p>$7.00 - $99.50</p>
          </div>
          </div>
        </div>





        <h2>Featured Products</h2>
        <div className="rproducts">

          <div className="rp1">
          <img src="Dimages/img.png" alt="Product 1" />
          <p>Xiaomi Redmi 8 </p>
          <p> Original </p>
          <p>$32.00-$40.00</p>
          </div>

          <div className="rp1">
          <img src="Dimages/img (1).png" alt="Product 2" />
          <p>Xiaomi Redmi 8 </p>
          <p> Original </p>
          <p>$32.00-$40.00</p>
          </div>

          <div className="rp1">
          <img src="Dimages/img (2).png" alt="Product 3" />
          <p>Xiaomi Redmi 8 </p>
          <p> Original </p>
          <p>$32.00-$40.00</p>
          </div>

          <div className="rp1">
          <img src="Dimages/img (3).png" alt="Product 4" />
          <p>Xiaomi Redmi 8 </p>
          <p> Original </p>
          <p>$32.00-$40.00</p>
          </div>

          <div className="rp1">
          <img src="Dimages/img (4).png" alt="Product 5" />
          <p>Xiaomi Redmi 8 </p>
          <p> Original </p>
          <p>$32.00-$40.00</p>

          </div>

          <div className="rp1">
          <img src="Dimages/img (5).png" alt="Product 6" />
          <p>Xiaomi Redmi 8 </p>
          <p> Original </p>
          <p>$32.00-$40.00</p>
        </div>
        </div>
      






      <div className='container-4'>
        <h1>SUPER DISCOUNT ON MORE THAN 100 USD</h1>
        <button type="button" className='blue-button'>Shop Now</button>
      </div>

        





    <div className="down">

<div className="brand-col">
<img src="images/image.png"/>
<p>Best information about the company gies here but now lorem ipsum is</p>
<img src="images/Group 987.png"/>
</div>

<div className="about-col">
<h2>About</h2>
<li><a href="/AboutUs">AboutUs</a></li>
<li><a href="/FindStore">FindStore</a></li>
<li><a href="/Categories">Categories</a></li>
<li><a href="/Blogs">Blogs</a></li>
</div>

<div className="partnership-col">
<h2>partnership</h2>
<li><a href="/AboutUs">AboutUs</a></li>
<li><a href="/FindStore">FindStore</a></li>
<li><a href="/Categories">Categories</a></li>
<li><a href="/Blogs">Blogs</a></li>
</div>

<div className="information-col">
<h2>partnership</h2>
<li><a href="/Help Center">Help Center</a></li>
<li><a href="/Money Refund">Money Refund</a></li>
<li><a href="/Shipping">Shipping</a></li>
<li><a href="/Contact Us">Contact Us</a></li>
</div>

<div className="for-users-col">
<h2>For Users</h2>
<li><a href="/Login">Login</a></li>
<li><a href="/Register">Register</a></li>
<li><a href="/Settings">Settings</a></li>
<li><a href="/My Orders">My Orders</a></li>
</div>

<div className="Get-App-col">
<img src="images/col.png"/>
</div>
</div>
   </>
  );
}
