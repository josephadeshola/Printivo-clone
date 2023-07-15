import React from 'react'

const Carosel = () => {
  return (
    <>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className='carousel-text carousel-inner'>
    <div className="carousel-item text-center  active">
    <h4 className='carousel-text fw-bold my-4 py-1 text-dark'>Stickers promo <a href="" className='text-dark carousel-text fw-none'>Shop now </a></h4>
    </div>
    <div className="carousel-item text-center">
    <h4 className='carousel-text fw-bold my-4 py-1 text-dark'>Business card promo <a href="" className='text-dark carousel-text fw-none'>Shop now</a></h4>
    </div>
    <div className="carousel-item text-center">
    <h4 className='carousel-text fw-bold my-4 py-1 text-dark'>Stickers promo <a href="" className='text-dark carousel-text fw-none'>Shop now </a></h4>
    </div>
  </div>
</div>
    </>
  )
}

export default Carosel