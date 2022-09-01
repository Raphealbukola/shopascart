import React from 'react'
import img1 from '../assets/images/2.png'
import img3 from '../assets/images/1.png'
import img2 from '../assets/images/3.png'
function NavBar() {
  return (
    <>
    <section className='sticky-top'>
    <div id='hed' className='   text-center mx-auto d-flex justify-content-between align-items-center alert alert-light  text-light show ' >
        <p className=' text-light mx-auto  h6'>First order, ₦0 delivery fee. Use promo code   <span id='wee' className='rounded-pill border border-1 px-2 py-1 m-4'>  <img src={img3} className='' alt="" /> FIRSTORDER</span></p>
        <img src={img1} className='btn-close text-light' alt="" data-bs-dismiss="alert" aria-label="Close"/>
        </div>
    <nav  className="navbar navbar-expand-lg bg-light  ">
  <div className="container-fluid mx-auto col-lg-10  py-2">
    <a className="navbar-brand" href="#">
    <img src={img2} className='text-dark' alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a id='hee' className="nav-link" aria-current="page" href="#">Stores
</a>
        </li>
        <li className="nav-item">
          <a id='hee' className="nav-link" href="#">Locations</a>
        </li>
       
        <li className="nav-item">
          <a id='hee2' className="nav-link">Become a Shopper</a>
        </li>
      </ul>
      <form className="d-flex  col-lg-4" role="search">
       <div id='up1' className='col-2'>
       <a href="">sign in</a>
       </div>
        <div id='up2' className=''>
        <a href="" className='py-3 px-5 h6'>sign up</a>
        </div>
      </form>
    </div>
  </div>
</nav>
    </section>
    </>
  )
}

export default NavBar