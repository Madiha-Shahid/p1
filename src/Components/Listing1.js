import React from "react";
import './Listing1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from 'react-bootstrap/Form';
import Dropdown from "./Dropdown";

export default function Listing1() {
  return(
    <>
     {/*<div className='container-header'>
        <img src='images/image.png' alt="Header" />
        <div className='search-form-button'>
          <div className='search'>
            <input placeholder="search" />
          </div>
          <div className='form-button'>
            <div className="container-form">
              <Form.Select>
                <option>All category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="search-button">
              <button type="button" className="btn-primary">apply</button>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation">
        <div className="only-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <Dropdown />
              </li>
              </ul>
              </div>
                <div className="dropdown-FLAGS">

        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">ENG ,USD</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">ENG,USD</a></li>
          <li><a className="dropdown-item" href="#">ENG,USD</a></li>
          <li><a className="dropdown-item" href="#">ENG,USD</a></li>
        </ul>
      </div>
      <div/>

      <div className="dropdown-LANGUAGES">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">ENG ,USD</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">ENG,USD</a></li>
          <li><a className="dropdown-item" href="#">ENG,USD</a></li>
          <li><a className="dropdown-item" href="#">ENG,USD</a></li>
        </ul>
      </div>
      <div/>
        </nav>
        <div/>
      </div>
      </div>
      <div className="b-crumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>

      {/* Dropdowns */}




<div className="container-header">
  <div className="h-img">
        <img src="images/image.png" alt="Header" />
        </div>
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
    

      <div className='container-tech-list'>
        <div className="t-list">
          <div className='imagestech'>
            <img src="images/tech/1.jpg" alt="Canon Camera" />
          </div>
          <div className="info">
            <h2>Canon Cmera EOS 2000, Black 10x zoom</h2>
            <div className="basic">
            <img src="images/btn-basic.png" />
            </div>
            <h3>Price: $998.00</h3>
            <div className='star'>
              <img src="images/image 109.png" alt="Additional product image" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua
View details</p>
            <div className='view-details'>
              <a href="/product/details" className="view-details-link">View Details</a>
            </div>
          </div>
        </div>

        <div className="t-list">
          <div className='imagestech'>
            <img src="images/tech/2.jpg" alt="Canon Camera" />
          </div>
          <div className="info">
            <h2>Canon Cmera EOS 2000, Black 10x zoom</h2>
            <div className="basic">
            <img src="images/btn-basic.png" />
            </div>
            <h3>Price: $998.00</h3>
            <div className="star">
              <img src="images/image 109.png" alt="Additional product image"  />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua
View details</p>
            <div className='view-details'>
              <a href="/product/details" className="view-details-link">View Details</a>
            </div>
          </div>
        </div>

        <div className="t-list">
          <div className='imagestech'>
            <img src="images/tech/3.jpg" alt="Canon Camera" />
          </div>
          <div className="info">
            <h2>Canon Cmera EOS 2000, Black 10x zoom</h2>
            <div className="basic">
            <img src="images/btn-basic.png" />
            </div>
            <h3>Price: $998.00</h3>
            <div className='star'>
              <img src="images/image 109.png" alt="Additional product image" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua
View details</p>
            <div className='view-details'>
              <a href="/product/details" className="view-details-link">View Details</a>
            </div>
          </div>
        </div>

        
        <div className="t-list">
          <div className='imagestech'>
            <img src="images/tech/4.jpg" alt="Canon Camera" />
          </div>
          <div className="info">
            <h2>Canon Cmera EOS 2000, Black 10x zoom</h2>
            <div className="basic">
            <img src="images/btn-basic.png" />
            </div>
            <h3>Price: $998.00</h3>
            <div className='star'>
              <img src="images/image 109.png" alt="Additional product image" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua
View details</p>
            <div className='view-details'>
              <a href="/product/details" className="view-details-link">View Details</a>
            </div>
          </div>
        </div>

        
        <div className="t-list">
          <div className='imagestech'>
            <img src="images/tech/5.jpg" alt="Canon Camera" />
          </div>
          <div className="info">
            <h2>Canon Cmera EOS 2000, Black 10x zoom</h2>
            
            <div className="basic">
            <img src="images/btn-basic.png" />
            </div>
            
            <h3>Price: $998.00</h3>
            <div className='star'>
              <img src="images/image 109.png" alt="Additional product image" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua
View details</p>
            <div className='view-details'>
              <a href="/product/details" className="view-details-link">View Details</a>
            </div>
          </div>
        </div>
      </div>
      



    <div className="pagination">

    <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous" tabindex="-1">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="texting">

      <h1>SUBSCRIBE ON OUR NEWSLETTER</h1>
      <p>Get daily news on upcoming offers from many suppliers all over the world</p>
      <div className='foot'>
  <form>
    <div className="sns">
      <div className="input-group">
        <span className="input-group-text">
          <img src="images/email.png"/>
        </span>
        <input 
          type="text" 
          className="form-control" 
          id="inlineFormInputGroup" 
          placeholder="E-mail" 
        />
      </div>
    </div>
    <div className='submit'>
      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </div>
  </form>
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
<div/>
      <div className='sidebar'>
  <nav>
    {/* Category Section */}
    <ul>
      <h2>Category</h2>
      <li><a href="/Mobile Accessory">Mobile Accessory</a></li>
      <li><a href="/Electronics">Electronics</a></li>
      <li><a href="/Smart Phones">Smart Phones</a></li>
      <li><a href="/Modern Tech">Modern Tech</a></li>
      <li><a href="/Modern Tech">See All</a></li>
    </ul>

    {/* Brands Section */}
    <ul>
      <h2>Brands</h2>
      <div>
        <label><input type='checkbox' /> Samsung</label>
        <label><input type='checkbox' /> Huawei</label>
        <label><input type='checkbox' /> Apple</label>
        <label><input type='checkbox' /> Poco</label>
      </div>
      <li><a href="/Modern Tech">See All</a></li>
    </ul>

    {/* Features Section */}
    <ul>
      <h2>Features</h2>
      <div>
        <label><input type='checkbox' /> Metallic</label>
        <label><input type='checkbox' /> Plastic Cover</label>
        <label><input type='checkbox' /> 8 GB RAM</label>
        <label><input type='checkbox' /> Super Power</label>
        <label><input type='checkbox' /> Large Memory</label>
      </div>
      <li><a href="/Modern Tech">See All</a></li>
    </ul>

    <ul>
      <h2>Condition</h2>
      <div>
        
        <label><input type='radio' /> ALL</label>
        <label><input type='radio' /> Refurnished</label>
        <label><input type='radio' /> Brand new</label>
        <label><input type='radio' /> Old items</label>
      </div>
     
    </ul>
    <ul>
      <h2>Ratings</h2>
      <div className='rating'>
        
        <img src='images/Rating=Rating, Stars=stars-4.png'/>
        <img src='images/Rating=Rating, Stars=stars-3.png'/>

      </div>
     
    </ul>
    {/* Price Range Section */}
    <div>
      <Form.Label>Range</Form.Label>
      <Form.Range />
    </div>

    {/* Move to Cart Button */}
    <button type="button" className='tech-button'>Move to Cart</button>

    {/* Rating Section */}
    <div className='rating'>
      <img src='images/Rating=Rating, Stars=stars-3.png' alt="Rating" />
    </div>

  </nav>
</div>

  </div>
  </>
  );
}
  
