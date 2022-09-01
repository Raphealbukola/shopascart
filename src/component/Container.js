import React from 'react'
import img4 from '../assets/images/6.png'
import img7 from '../assets/images/Hero.png'
function Container() {
  return (
    <>
    <section id='section1' className=' row col-12 mx-auto  d-flex juctify-content-center'>
<div className='  col-lg-5 mx-auto  py-5'>
<div className='ms-5'>
<strong id='strong' className='text-light'>Get your groceries
delivered same-day</strong>
<p id='oder' className='text-light'>Order what you want from grocery stores and local market near you and get it delivered right to your door.</p>
<div className='d-flex mt-4'>
    <input type="text" className='form-control w-50 rounded-pill p-2' placeholder='Enter your address'/>
    <img id='arrow' src={img4} alt="" />
</div>
</div>
</div>
<div id='img' className=' col-lg-6 d-flex align-items-end'>
<div id='need'  className=' col-9'>

</div>
</div>
    </section>
    </>
  )
}

export default Container