import React from 'react'
import img18 from '../assets/images/10.png'
import img19 from '../assets/images/black1.PNG'
import img20 from '../assets/images/black2.PNG'
import img21 from '../assets/images/black3.PNG'
import img22 from '../assets/images/black4.PNG'
import img23 from '../assets/images/black5.PNG'

function Header() {
  return (
    <>
    <div id='header1' className='py-4 mt-5'>
    <div className='row col-lg-10 d-flex justify-content-center mx-auto  py-2'>
        <div className='col-lg-2'>
            <img src={img18} alt="" />
        </div>
    <ul id='wow' className='col-lg-2 text-light '>
        <li className='mt-2 top'>Top Cities</li>
        <li className='mt-1'>Victoria Island</li>
        <li className='mt-1'>Lekki</li>
        <li className='mt-1'>Ikeja</li>
        <li className='mt-1'>Yaba</li>
    </ul>
    <ul id='wow' className='col-lg-2 text-light'>
        <li className='mt-1 top'>Work with us</li>
        <li className='mt-1'>Victoria Island</li>
        <li className='mt-1'>Be a Partner Store</li>
        <li className='mt-1'>In-Store Shopper</li>
        <li className='mt-1'>Shopascart Ambassador Program</li>
    </ul>
    <ul id='wow' className='col-lg-2 text-light'>
        <li className='mt-1 top'>Get to know us</li>
        <li className='mt-1'>About</li>
        <li className='mt-1'>Careers</li>
        <li className='mt-1'>Investors</li>
        <li className='mt-1'>Press</li>
    </ul>
    <ul id='wow' className='col-lg-2 text-light'>
        <li className='mt-1 top'>Press</li>
        <li className='mt-1'>Terms of Use</li>
        <li className='mt-1'>Privacy Policy</li>
        
    </ul>
    <ul id='wow' className='col-lg-2 text-light'>
        <li className='mt-1 top'>Support</li>
        <li className='mt-1'>FAQs</li>
        <li className='mt-1'>Contact Us</li>
        
    </ul>
    </div>
    </div>

 <section id='heder' className='d-flex justify-content-center align-items-center py-5'>
   <div className='row d-flex align-items-center'>
   <div className='col-lg-6'>
   <p>© 2022 Shopascart, inc. All rights reserved.

Offer only available to new members. Use code FIRSTORDER at checkout to get your first delivery free.</p>
<div>
<img src={img19} alt="" />
<img src={img20} alt="" />
</div>
  <p>coming soon</p>
  </div>

  <div className='col-lg-6 d-flex justify-content-end'>
  <div>
  <img src={img21} alt="" />
  <img src={img22} alt="" />
  <img src={img23} alt="" />
  </div>
  </div>
  </div>
 </section>
    </>
  )
}

export default Header