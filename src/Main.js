import React from 'react';
import './Components/Main.css';
import Dropdown from './Components/Dropdown';
import Form from 'react-bootstrap/Form';
export default function Main() {
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
              <section>

  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" >
   Help
  </button>
  <ul className="dropdown-menu">
    
    <li><a className="dropdown-item" href="#">Link 2</a></li>
    <li><a className="dropdown-item" href="#">Link 3</a></li>
  </ul>
</section>
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

      <div className='banners'>

                <div className='banner'>
                    <img src='images/banner.png' />
                </div> 
                
                <div className='right-banner'>
                    <img src='images/block.png' />
                </div> 

                <div className='right-lower-banner'>
                    <img src='images/block (1).png' />
                </div> 

                <div className='fai'>
               
                <img src='images/Avatar.png' className='ai'/>
                

                
                  <h5 className='ti'>Hi, user </h5>
                  <h5 className='ti2'>let’s get stated</h5>
                  

               <div className='bbbb'>
                    <button type='button' className='bbi'>
                      send inquiry
                    </button>
                    <button type='button' className='wbi'>
                    send inquiry
                    </button>
                    </div>
                    
                    </div>


</div> 



<div className='sidebar'>
  <nav>
    {/* Category Section */}
    <ul>
      <h2>Category</h2>
      <li><a href="/Automobiles">Automobiles</a></li>
      <li><a href="/Cloths and wear">Cloths and wear</a></li>
      <li><a href="/Home interiors">Home interiors</a></li>
      <li><a href="/Computer and Tech">Computer and Tech</a></li>
      <li><a href="/Tools and equpiments">Tools and equpiments</a></li>
      <li><a href="/Sports and outdoor">Sports and outdoor</a></li>
      <li><a href="/Animals and pets">Animals and pets</a></li>
      <li><a href="/Machinery Tools">Machinery Tools</a></li>
      <li><a href="/More Category">More Category</a></li>
    </ul>


    </nav>

</div>

<div className='grid'>
  <h3>Deals and offers</h3>
  <p className='he'>Hygiene equipments</p>
  <img src='images/time.png'/>
</div>

<div className='fgridu'>

  <div className='fgi-1'>
  <img src='mimages/8.png'/>
  <div className='fgt'>
  <p>Smart watches</p>
  <p className='fgtr'>-25%</p>
  </div>
  </div>



  <div className='fgi-1'>
  <img src='mimages/7.png' className='fi'/>
  <div className='fgt'>
  <p>Laptops</p>
  <p className='fgtr'>-15%</p>
  </div>
  </div>

  <div className='fgi-1'>
  <img src='mimages/6.png'/>
  <div className='fgt'>
  <p>GoPro cameras</p>
  <p className='fgtr'>-40%</p>
  </div>
  </div>


  <div className='fgi-1'>
  <img src='mimages/5.png' className='fi'/>
  <div className='fgt'>
  <p>Headphones</p>
  <p className='fgtr'>-25%</p>
  </div>
  </div>


  <div className='fgi-1'>
  <img src='mimages/3.png'/>
  <div className='fgt'>
  <p>Canon camreras</p>
  <p className='fgtr'>-25%</p>
  </div>
  </div>
  </div>



<div className='gridview-1'>

<div className='grid2'>  

  <div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
  <div className='ti'>
  <img src='images/1.png'/>
  </div>
</div>

<div className='grid2'>


<div className='tg'>
  <h6>Kitchen dishes</h6>
  <p >From USD 19</p>
  </div>
  <div className='ti'>
  <img src='images/5.png'/>
  </div>
  
</div>

<div className='grid2'>


<div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='images/3.png'/>
  </div>
</div>


<div className='grid2'>


<div className='tg'>
  <h6>Kitchen mixer</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='images/6.png'/>
  </div>
</div>


<div className='grid2'>


<div className='tg'>
  <h6>Kitchen mixer</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='images/8.png'/>
  </div>
</div>

<div className='grid2'>



<div className='tg'>
  <h6>Blender</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='images/9.png'/>
  </div>
</div>


<div className='grid2'>
<div className='tg'>
  <h6>Plant</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>

  <img src='images/4.png'/>
  </div>
</div>

<div className='grid2'>
<div className='tg'>
  <h6>Napkin</h6>
  <p >From USD 19</p>
  </div>

<div className='ti'>
  <img src='images/7.png'/>
  </div>
  </div>

  </div>

<div className='left-side-1'>
  <img src='mimages/image 92.png'/>
  </div>



<div className='gridview-2'>



<div className='grid2'>

<div className='tg'>
  <h6>Watch</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='mimages/nimages/8.png'/>
  </div>
</div>



<div className='grid2'>
<div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='mimages/nimages/6.png'/>
  </div>
</div>

<div className='grid2'>
<div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='mimages/nimages/9.png' />
  </div>
</div>

<div className='grid2'>
<div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
<div className='ti'>
  <img src='images/10.png'/>
  </div>
</div>





  <div className='grid2'>

  <div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
  <div className='ti'>
  <img src='mimages/5.png'/>
  </div>
</div>
<div className='grid2'>

<div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
  <div className='ti'>
  <img src='mimages/7.png'/>
  </div>
</div>

<div className='grid2'>

<div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
  <div className='ti'>
  <img src='mimages/2.png'/>
  </div>
</div>

<div className='grid2'>

<div className='tg'>
  <h6>Soft chairs</h6>
  <p >From USD 19</p>
  </div>
  <div className='ti'>
  <img src='mimages/1.png'/>
  </div>
</div>
</div>

<div className='left-side-2'>
  <img src='mimages/image 98.png'/>
</div>

<div className='m-banner' color='blue'>

  <img src='mimages/image 102 (1).png'/>

</div>

<h3 className='ri'> Recommended Items</h3>

<div className='grid-cloths'>


<div className='c-grid'>
  <img src='mimages/nimages/1.png' className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
  
</div>


<div className='c-grid'>
  <img src='mimages/nimages/2 1.png'className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>

<div className='c-grid'>
  <img src='mimages/nimages/7.png'   className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>

<div className='c-grid'>
  <img src='mimages/nimages/image 24.png'  className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>



 
<div className='c-grid'>
  <img src='mimages/nimages/5.png'  className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>
 

<div className='c-grid'>
  <img src='mimages/nimages/4.png'  className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>

<div className='c-grid'>
  <img src='mimages/nimages/image 86.png'  className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>


<div className='c-grid'>
  <img src='mimages/nimages/5.png'  className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>
<div className='c-grid'>
  <img src='mimages/nimages/3.png'  className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>
<div className='c-grid'>
  <img src='mimages/nimages/10.png'  className='is'/>
  <div  className='gc'>
  <p>$10.30</p>
  <p>T-shirts with multiple colors, for men</p>
  </div>
</div>


</div>
<h3 className='oes'>Our Extra Services</h3>
<div  className='f-banner'>

<div className='f-grid'>
 
  <img src='mimages/image 108.png'/>
  <p>Source from  Industry Hub</p>
 
  <div className='Lbg'>
  <img src='mimages/Ellipse 12.png'/>
  </div>
  <div className='Lf-grid1'>
  <img src='mimages/search.png'/>
   </div>
</div>


<div className='f-grid'>

  <img src='mimages/image 104.png'/>
  <p>Customize Your Products</p>
  <div className='bg'>
  <img src='mimages/Ellipse 12.png'/>
  </div>
  <div className='f-grid1'>
  <img src='mimages/inventory_2.png'/>
   </div>

</div>

<div className='f-grid'>

  <img src='mimages/image 106.png'/>
  <p>Fast, reliable shipping by ocean or air</p>
  <div className='bg'>
  <img src='mimages/Ellipse 12.png'/>
  </div>
  <div className='f-grid1'>
  <img src='mimages/send.png'/>
   </div>

</div>

<div className='f-grid'>


<img src='mimages/image 107.png'/>
<p>Product monitoring and inspection</p>
  <div className='bg'>
  <img src='mimages/Ellipse 12.png'/>
  </div>
  <div className='f-grid1'>
  <img src='mimages/security.png'/>
  
</div>
</div>

</div>
<div className='flags'>


<div className='fi'>
<img src='images/icon.png'/>
<div className='fn'>
  <p>Arabic Emirates</p>
  <p className='sa'>shopname.ae</p>
  
</div>
</div>

<div className='fi'>
<img src='mimages/icon1.png'/>
<div className='fn'>
  <p>Australia</p>
  <p className='sa'>shopname.ae</p>
 
</div>
</div>

<div className='fi'>
<img src='mimages/icon2.png'/>
<div className='fn'>
  <p>United States</p>
  <p className='sa'>shopname.ae</p>
 
</div>
</div>

<div className='fi'>
<img src='mimages/icon3.png'/>
<div className='fn'>
  <p>Russia</p>
  <p className='sa'>shopname.ae</p>
  
</div>
</div>

<div className='fi'>
<img src='mimages/icon4.png'/>
<div className='fn'>
  <p>Italy</p>
  <p className='sa'>shopname.ae</p>
 
</div>
</div>


<div className='fi'>
<img src='mimages/icon5.png'/>
<div className='fn'>
  <p>Denmark</p>
  <p className='sa'>shopname.ae</p>
 
</div>
</div>

<div className='fi'>
<img src='mimages/icon6.png'/>
<div className='fn'>
  <p>France</p>
  <p className='sa'>shopname.ae</p>
  
</div>
</div>

<div className='fi'>
<img src='mimages/icon7.png'/>
<div className='fn'>
  <p>Arabic Emirates</p>
  <p className='sa'>shopname.ae</p>
 
</div>
</div>

<div className='fi'>
<img src='mimages/DK@2x.png'/>
<div className='fn'>
  <p>China</p>
  <p className='sa'>shopname.ae</p>
 
</div>
</div>

<div className='fi'>
<img src='mimages/GB@2x.png'/>
<div className='fn'>
  <p>Great Britain</p>
  <p className='sa'>shopname.ae</p>
 
</div>
</div>

</div>

<div className="texting">

<h1>SUBSCRIBE ON OUR NEWSLETTER</h1>
<p>Get daily news on upcoming offers from many suppliers all over the world</p>
<div className='foot'>
<form>
<div className="sns">
<div className="input-group">
  <span className="input-group-text">@</span>
  <input 
    type="text" 
    className="form-control" 
    id="inlineFormInputGroup" 
    placeholder="Username" 
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
<h2>Information</h2>
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



</div>

</>
);
}