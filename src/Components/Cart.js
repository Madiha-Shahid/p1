import React from 'react';
import './Cart.css';

export default function Cart() {
  return (
    <>
      <div className="container-header">
        <img src="images/image.png"  className='img-h'/>
        
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


      <div className='container-2'>
        {/* Apply for coupon */}
        <form className="row g-3">
          <div className="coupon">
            <label>Apply for coupon?</label>
          </div>
          <div className='label-button'>
            <div className='coupon-label'>
              <input placeholder="Add a Coupon" />
            </div>
            <div className='coupon-button'>
              <button type="submit" className='coupon-b'>Apply</button>
            </div>
          </div>
        </form>
      </div>



      <div className='container-5'>
        {/* Apply for coupon */}
        
          <div className="subtotal">
            <label>Subtotal:   $1456</label>
          </div>

          <div className="discount">
            <label>Discount:    $-60</label>
          </div>


          <div className="tax">
            <label>Tax:    $+14</label>
          </div>

          <div className="coupon">
            <h3>Total:    $+1357</h3>
          </div>

          
            <div className='checkout'>
              <button type="submit" className='ck' >Checkout</button>
            </div>
          </div>
      

      <div className='container'>
        <h3>My Cart</h3>
          <div className='item-c'>

                <div className='ici'>
                <img src='images/img-group.png' alt='shirt' />
                </div>

                <div className='ict'>
                <h2 >T-shirt with multiple colors, for men & women</h2>
                <p >Size: Medium, Color: Blue, Material: Plastic</p>
                <p>Seller: Market</p>
                </div>

                <div className='icb'>
                <button type="button" className='rb'>Remove</button>
                <button type="button" className='sb'>Save for later</button>
                </div>
          </div>


          <div className='item-c'>

<div className='ici'>
<img src='images/img-group (1).png' alt='shirt' />
</div>

<div className='ict'>
<h3>T-shirt with multiple colors, for men & women</h3>
<p >Size: Medium, Color: Blue, Material: Plastic</p>
<p >Seller: Market</p>
</div>

<div className='icb'>
<button type="button" className='rb'>Remove</button>
<button type="button" className='sb'>Save for later</button>
</div>
</div>

<div className='item-c'>

<div className='ici'>
<img src='images/img-group (3).png' alt='shirt' />
</div>

<div className='ict'>
<h3 >T-shirt with multiple colors, for men & women</h3>
<p >Size: Medium, Color: Blue, Material: Plastic</p>
<p>Seller: Market</p>
</div>

<div className='icb'>
<button type="button" className='rb'>Remove</button>
<button type="button" className='sb'>Save for later</button>
</div>
</div>

  <button type='button' className='btc'>Back to Shop</button> 
  <button type='button' className='ra'>Remove All</button>      
</div> 
        
      <div className='sfl'>
<h3>Saved for Later</h3>
</div>
      <div className='container-3'>
       
        {/* Totalling */}
        <div className='item-t'>
          <img src='images/img (6).png' alt="Camera Black" />
          <p>Price: $15.29</p>
          <p>GoPro HERO6 4K Action Camera - Black</p>
          <button type="button" className='tech-button'>Move to Cart</button>
        </div>

        <div className='item-t'>
          <img src='images/img (7).png' alt="Camera Blue" />
          <p>Price: $10.69</p>
          <p>GoPro HERO6 4K Action Camera - Black</p>
          <button type="button" className='tech-button'>Move to Cart</button>
        </div>

        <div className='item-t'>
          <img src='images/img (8).png' alt="Camera Red" />
          <p>Price: $15.29</p>
          <p>GoPro HERO6 4K Action Camera - Black</p>
          <button type="button" className='tech-button'>Move to Cart</button>
        </div>

        <div className='item-t'>
          <img src='images/img (9).png' alt="Camera Brown" />
          <p>Price: $15.29</p>
          <p>GoPro HERO6 4K Action Camera - Black</p>
          <button type="button" className='tech-button'>Move to Cart</button>
        </div>
      </div>

      <div className='container-4'>
        <h2>SUPER DISCOUNT ON MORE THAN 100 USD</h2>
        <p className='c-4'>Have you ever finally just write dummy info</p>
        <button type="button" className='blue-button'>Shop Now</button>
      
        </div>
    
    
    </>
  );
}
