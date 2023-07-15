import React from 'react'

const Yournav = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div style={{ width: "100%" }} className=" mt-2 navbar-bg">

            <nav className="navbar second-nav  ">
              <div className="container-fluid">
                <div className=''>

                  <a className="navbar-brand d-grid mt-4 px-1 " href="#">
                    <img className=' prin-img' src="data:image/svg+xml,%3Csvg width='155' height='40' viewBox='0 0 155 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M.206 40h6.73V29.175h.105c.344.511.805.933 1.345 1.23a5.264 5.264 0 001.865.93c.81.218 1.646.322 2.485.31a9.296 9.296 0 005.59-1.756 9.606 9.606 0 002.179-2.362c.725-.928 1.14-1.958 1.554-3.197.414-1.34.518-2.68.518-4.33s-.206-3.3-.725-4.64a9.21 9.21 0 00-1.966-3.401 7.671 7.671 0 00-2.909-2.267 9.188 9.188 0 00-3.416-.722 9.504 9.504 0 00-4.245.927 8.022 8.022 0 00-2.998 2.578h-.1l-.31-2.985H0c0 1.03.104 2.062.104 3.3.104 1.229.104 2.578.104 3.917V40H.206zm6.73-21.133v-.618c.105-.205.105-.412.207-.516.115-.66.361-1.289.725-1.851.38-.493.879-.883 1.45-1.134.62-.31 1.139-.517 1.864-.517a3.997 3.997 0 012.485.826 4.215 4.215 0 011.547 2.16c.343.996.522 2.04.529 3.094 0 1.12-.178 2.233-.53 3.298a4.744 4.744 0 01-1.655 2.061 3.997 3.997 0 01-2.485.826c-.725 0-1.235-.206-1.865-.413a7.125 7.125 0 01-1.345-1.134c-.31-.517-.621-1.031-.725-1.65-.104-.205-.104-.412-.207-.721v-3.71h.006zM26.818 31.24h6.835V19.382c0-.206.104-.516.104-.722a3.956 3.956 0 011.553-2.474c.824-.618 1.859-.927 3.106-.927h1.036c.206.103.518.103.829.205V9.072c-.31 0-.519-.104-.725-.104h-.725c-.519 0-1.14 0-1.656.206a4.99 4.99 0 00-1.656.825 4.828 4.828 0 00-1.45 1.444c-.519.516-.83 1.229-1.14 2.061h-.206l-.206-4.021h-5.803c-.014.654.02 1.309.104 1.958v19.798zm23.81 0V9.485h-6.83v21.752l6.83.002zm5.385 0h6.834V17.733c.006-.254.077-.503.207-.722.104-.412.414-.825.725-1.23.279-.414.675-.736 1.139-.926.414-.31.931-.413 1.554-.413.829 0 1.553.206 2.07.618a3.77 3.77 0 011.035 1.65c.31.72.415 1.546.415 2.473v12.063h6.73V18.351c0-1.649-.206-2.985-.62-4.123-.31-1.23-.932-2.165-1.554-2.986-.725-.721-1.554-1.34-2.485-1.649a7.954 7.954 0 00-3.106-.618 9.097 9.097 0 00-2.485.31c-.725.308-1.45.516-1.967.927-.526.32-1.013.7-1.45 1.134-.31.413-.62.825-.829 1.134h-.206l-.31-2.985h-5.902c.104.927.104 2.062.207 3.196v18.546l-.002.002zM82.82 5.465v4.021h-2.887v4.949h2.9v8.867a13.818 13.818 0 00.518 3.917c.26.946.721 1.825 1.353 2.576a7.7 7.7 0 002.175 1.34 9.155 9.155 0 002.998.517c.866-.014 1.73-.083 2.587-.208.725-.103 1.346-.205 1.764-.412V25.98a1.318 1.318 0 00-.62.103h-1.45c-.621 0-1.14-.103-1.555-.413-.414-.205-.724-.618-.828-1.229-.206-.52-.31-1.244-.31-2.172v-7.836h4.867V9.485h-4.866V3.609L82.84 5.465h-.02zm25.368 4.021l7.972 21.753h6.73l8.076-21.753h-7.133l-2.797 10.103c-.206.927-.414 1.756-.621 2.68a18.886 18.886 0 00-.516 2.569h-.207a22.846 22.846 0 00-.518-2.578c-.193-.905-.435-1.8-.725-2.68l-2.898-10.095H108.2l-.012.001zm35.722-.516c-1.764 0-3.417.206-4.762.825a9.802 9.802 0 00-3.727 2.27c-1.035 1.03-1.864 2.165-2.381 3.608a14.413 14.413 0 00-.829 4.845 12.81 12.81 0 00.829 4.64 11.028 11.028 0 002.381 3.512 10.238 10.238 0 003.624 2.269c1.346.516 2.9.721 4.452.721 1.139 0 2.381-.103 3.416-.412a12.445 12.445 0 003.21-1.34 10.308 10.308 0 002.485-2.269c.829-.927 1.346-2.062 1.764-3.3.435-1.372.647-2.804.628-4.242 0-1.65-.206-3.197-.829-4.536-.518-1.34-1.235-2.578-2.175-3.512a9.824 9.824 0 00-3.527-2.27c-1.346-.618-2.9-.825-4.556-.825l-.003.016zm-.207 4.845c.725 0 1.45.104 1.967.516.517.413 1.035.826 1.346 1.444.364.675.609 1.407.725 2.165a8.75 8.75 0 01.31 2.37c0 1.23-.206 2.475-.621 3.402a4.56 4.56 0 01-1.45 2.27c-.62.617-1.449.825-2.278.825a3.996 3.996 0 01-2.485-.826 5.435 5.435 0 01-1.45-2.37c-.415-.928-.519-2.062-.519-3.3.013-.794.082-1.586.207-2.37.206-.826.414-1.444.829-2.062a4.856 4.856 0 011.345-1.548 4.094 4.094 0 012.071-.516h.003z' fill='%23000'/%3E%3Cpath d='M98.468 9.588v5.36h6.936v-5.36h-6.936z' fill='%2300AFEF'/%3E%3Cpath d='M98.468 14.948v5.465h6.936v-5.465h-6.936z' fill='%23EC268F'/%3E%3Cpath d='M98.468 20.413v5.361h6.936v-5.361h-6.936z' fill='%23FFF212'/%3E%3Cpath d='M98.468 25.774v5.463h6.936v-5.463h-6.936zM101.988 0c-2.07 0-3.727 1.649-3.727 3.609a3.673 3.673 0 001.085 2.631 3.701 3.701 0 002.642 1.081c1.967 0 3.625-1.649 3.625-3.71a3.647 3.647 0 00-1.074-2.54A3.676 3.676 0 00101.988 0zM47.313 0c-2.07 0-3.727 1.649-3.727 3.609a3.674 3.674 0 001.085 2.631 3.705 3.705 0 002.642 1.081c1.967 0 3.625-1.649 3.625-3.71a3.644 3.644 0 00-1.074-2.54A3.676 3.676 0 0047.314 0z' fill='%23000'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='155' height='40' fill='%23fff'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" alt="" />
                    <button className="navbar-toggler mt-3 bg-light py-2  col-7 d-md-none  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                      <span className=' menu py-5'>Menu</span>
                    </button>
                  </a>
                </div>

                <div style={{ cursor: "pointer", listStyle: "none" }} className=' text-secondary-emphasis px-md-5 d-md-flex gap-md-4 '>

                  <li className="nav-item d-none d-md-block ">
                    <a className="nav-link text-style" href="#">All product</a>
                  </li>
                  <li className="nav-item d-none d-md-block ">
                    <a className="nav-link text-style" href="#">Become a Reseller</a>
                  </li>
                  <li className="nav-item d-none d-md-block ">
                    <a className="nav-link text-style" href="#">Cost Calculator</a>
                  </li>
                  <li className="nav-item d-none d-md-block ">
                    <a className="nav-link text-style" href="#">Cost Calculator</a>
                  </li>
                  <div className='d-flex gap-md-3 gap-4 px-4 '>

                    <li className="nav-item ">
                      <a className="nav-link text-danger text-style" href="#">Sign in</a>
                    </li>
                    <li className="nav-item d-none d-md-block ">
                      <a className="nav-link text-style " href="#">Create Account</a>
                    </li>
                    <li className="nav-item fw-bold ">
                      <a className="bi bi-cart text-dark "></a>
                    </li>
                  </div>
                </div>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
            <div className='d-flex'>
              <div className='mt-md-5 mt-5 col-md-6 col-12 px-2 px-md-3'>
                <h1 className='fw-bold mt-md-3 mt-4 pb-4 col-12'>Quality Prints</h1>
                <h3 className='px-2 h3-tag col-12'>Shipped to your doorstep</h3>
                <p className='p-tag fw-bold px-2 col-12 mt-5 mt-md-5'> What would you like to print today?</p>
                <div className="input-group mb-3">
                  <input type="text" class="form-control  py-md-2 " placeholder='Search for Business cards, T-shirts,Mug, etc' aria-label="Dollar amount (with dot and two decimal places)" />
                  <span className="input-group-text"><i style={{ cursor: "pointer" }} class=" fs-4 my-md-4  my-2 bi bi-search"></i></span>
                </div>

              </div>
              <img className='mt-5 offset-md-1 d-md-block d-none  col-5 ' src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1623764552/printivo/Card3_n9kqin.png" alt="" />

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Yournav