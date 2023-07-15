import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <div className=' d-md-block d-none'>

    <ul className="navbar-brand d-flex gap-md-5" href="#">
      <li ><a href="#" className='text-secondary'>Cost Calculator</a></li>
      <li><a href="#" className='text-secondary'>Discover Stores</a></li>
      <li><a href="#" className='text-secondary'>Track Orders</a></li>
    </ul>
    </div>
    <button className="navbar-toggler d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div>
      <ul>
        <span className='d-flex px-md-5 mt-md-3'> 
        <li><a href="#" className='text-secondary d-none mt-1 d-md-block'>Need help? Call:</a></li>
        <div className='d-md-flex d-flex  mt-3 mt-md-0 gap-5  justify-content-between gap-md-5'>
        <li><a href="#" className=''>+2348091084333</a></li>
        <img style={{height:"30px"}} src="https://img.freepik.com/free-icon/whatsapp_318-219850.jpg?size=626&ext=jpg&ga=GA1.1.1728101388.1685009792&semt=ais" alt="" />
        <button className='btn border text-secondary  rounded-btn'>
          <img style={{height:"10px"}} src="https://img.freepik.com/free-vector/illustration-nigeria-flag_53876-27148.jpg?w=740&t=st=1688954759~exp=1688955359~hmac=cd8d8fe903220ceb1f967a0f8d3efae6121777840597638ef185d91d093f9040" alt="" />
         <span> Nigeria</span>
         </button>
        </div>
        </span>
      </ul>

    </div>
    <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#">Home</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> All product </span><i class="bi bi-chevron-right"></i></a>
          </li>
         
         
          <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Bags </span><i class="bi bi-chevron-right"></i></a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Banners & Large Format </span><i class="bi bi-chevron-right"></i></a>
         </li>
          <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Brochures </span><i class="bi bi-chevron-right"></i></a>
         </li>
          <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Business Cards </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Calenders </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Campaign Materials </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Caps & Hats </span> <i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> ClothesTag </span> <i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Clothing & Apparel </span> <i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Corporate Gifts </span> <i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Envelopes  </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">  
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Flyers & Handbills  </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Frames & Well Arts  </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Greeting Cards  </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> ID Cards  </span><i class="bi bi-chevron-right"></i></a>
         </li>
         <li className="nav-item">
            <a className="nav-link active mt-2 d-flex justify-content-between" style={{fontSize:"monoscope"}} aria-current="page" href="#"><span> Lables </span> <i class="bi bi-chevron-right"></i></a>
         </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav> 
    </>
  )
}

export default Navbar

 