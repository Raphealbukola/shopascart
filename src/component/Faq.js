import React from 'react'
import img18 from './assets/images/10.png'

function Faq() {
  return (
    <>
    <section className='mx-auto d-flex justify-content-center'>
       <div className='text-center col-12'>
       <p className='h1'>FAQ</p>
        <p className='h6'>Have questions? We're here to help.</p>
       
       </div>

       
    </section>

    <section className='col-lg-8 mx-auto mt-5'>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed fs-4" type="" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How does Shopascart work?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Shopascart helps you save time and money by connecting you with a personal shopper in your area. You can shop at your favorite stores and get your groceries delivered to your door step.

</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How do I become a Shopascart Shopper
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">To become a Shopascart Shopper, you need to register with us. You can do this by clicking on the button below.
    <span>Become a Shopper</span>
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Why is Shopascart not available in my area?

      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Shopascart is available to only select areas of Lagos. We are working to expand our reach to other parts of the country.</div>
    </div>
  </div>
</div>

    </section>

    <section className='col-lg-8 mx-auto '>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How do I pay for my order?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can pay with your debit or credit card.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What happens if something is out of stock?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>You can always set a substitution preference for when something is out of stock as well as chat with your shopper to see if they have any other available options.</p>
        <p>You can tell your shopper to:</p>
        <p>- Pick a substitution: Your shopper will contact you directly and you can pick a substitution for the item that is out of stock.</p>
        <p>- Find the best substitute: Your shopper will find the best substitute for you.</p>
        <p>- Don't substitute: Your shopper will not substitute anything and a refund will be issued for the item</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header " id="flush-headingThree">
      <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Is there a limit to the amount of orders I can place in a day?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">No, you can place as many orders as you want in a day.</div>
    </div>
  </div>
</div>
    </section>
    </>
  )
}

export default Faq