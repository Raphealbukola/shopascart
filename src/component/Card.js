import React from 'react'
import img8 from '../assets/images/shoprite.png'
import img9 from '../assets/images/addide.png'
import img10 from '../assets/images/delis.png'
import img11 from '../assets/images/supermart.png'
import img12 from '../assets/images/htm.png'
import img13 from '../assets/images/time.gif'
import img14 from '../assets/images/order.png'
import img15 from '../assets/images/new1.PNG'
import img16 from '../assets/images/new2.PNG'
function Card() {
  return (
    <>
        <p className='text-center fs-2 mt-5 mb-4'>Favorite stores in  <span><a id='lagos' href="">Lagos</a></span></p>
    <section id='card' className=' row  mx-auto lg-px-5 col-lg-11 col-sm-12  my-3 ps-1 '>
    <div  className=' col-lg-3 '>
  <img className='col-12 cardimg' src={img8} alt="" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick </p>
  </div>

</div>
    <div className=' col-lg-2 '>
  <img className='col-12 cardimg' src={img9} alt="" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick </p>
  </div>
</div>

    <div className=' col-lg-3 '>
  <img className='col-12 cardimg' src={img10} alt="" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick </p>
  </div>
</div>

    <div className='col-lg-3 '>
  <img className='col-12 cardimg' src={img11} alt="" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick </p>
  </div>
</div>
    </section>


    <section id='GROCERIES' className=' d-flex justify-content-center mt-5 p-4 '>
        <div  className=' col-lg-5 col-sm-12  text-center py-3 text-light'>
        <p id='size1' className='h5 mt-3'>GROCERIES DELIVERED CONVENIENTLY</p>
        <p id='size2' className='h2 mt-4'>Fresh groceries, everyday essentials and more delivered to your home by friendly, reliable, and convenient shoppers.</p>
        </div>
    </section>
    <section>


        <div id='cardhtm' className='row col-lg-10 mx-auto  justify-content-center '>
    <div id='card2' className='col-lg-3  mx-3'>
    <div className="card-body p-3">
    <h3 className="card-title my-4">Choose what you want</h3>
    <p className="card-text">Select items from your favorite grocery stores or local markets. </p>
    </div>
    <div id='htm' className='col-12 border border-2 '>
    <img className='col-12 cardimg2' src={img12} alt="" />
    </div>
    </div> 

    <div id='card2' className='col-lg-3 mx-3'>
    <div className="card-body p-3">
    <h3 className="card-title my-4">Get real-time updates</h3>
    <p className="card-text">We’ll send you real-time updates from every step of the way.</p>
    </div>
    <div id='htm' className='col-12 border border-2 '>
    <img className='col-12 cardimg2' src={img13} alt="" />
    </div>
    </div> 

    <div id='card2' className='col-lg-3 mx-3'>
    <div className="card-body p-3">
    <h3 className="card-title my-4">Same-day grocery delivery</h3>
    <p className="card-text">Fresh groceries delivered same-day directly to you. </p>
    </div>
    <div id='htm' className='col-12 border border-2 '>
    <img className='col-12 cardimg2' src={img14} alt="" />
    </div>
    </div> 
        </div>
    </section>


    <section  className='mx-auto d-flex justify-content-center my-4'>
    <div className=' text-center my-5'>
        <p className='fs-2'>Shop on the go</p>
        <p className='h5'>Get the best Shopascart experience all in one app.</p>
        <div>
        <img className='' src={img15} alt="" />   
        <img className='' src={img16} alt="" />   

        </div>
    </div>
    </section>

    <section className='mx-auto d-flex justify-content-center '>
        <div className='text-center my-5 col-lg-6 col-sm-12 justify-content-center'>
            <p className='h6 SHOP'>SHOPASCART+</p>
            <p className='h2 bold text-danger'>The best way to save money on grocery shopping</p>
            <p>Choose a plan that fits your shopping needs and get started.</p>

            <div className='col-lg-9 text-light mx-auto d-flex justify-content-center'>
                <div id='red' className='col-lg-7 py-5'>
                <p className='h5'>Shopascart Plus</p>
                <p>Unlimited delivery on orders over ₦5000</p>
                <p className='h4'>₦3000/month or <br /> ₦25000/year</p>
            
                <div className='col-9 py-2 mt-3 mx-auto d-flex justify-content-center get'>
                    <a href="">get shopascart plus</a>
                </div>
                </div>

            </div>

            <p className=' fees mt-4'>Deliveries under ₦5000 with or without a Shopascart+ membership will incur a ₦1800 fee and <br /> applicable taxes and service fees per order.</p>
        </div>
    </section>
    </>
  )
}

export default Card