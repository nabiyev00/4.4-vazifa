import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className="container px-4">
          <a className='navbar-brand' href="/">Start Bootstrap</a>
          <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarToggle'><span className="navbar-toggler-icon"></span></button>
          <div className='collapse navbar-collapse' id='navbarToggle'>
            <ul className='navbar-nav  mb-2 mb-lg-0 ms-lg-4 me-auto'>
              <li className="nav-item">
                <a className='nav-link active' href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className='nav-link' href="/">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#!'>Shop</a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href="/">All Products</a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href="/">Populer Items</a>
                  </li>
                  <li>
                    <a className='dropdown-item' href="/">New Arrivals</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className='d-flex'>
              <button className='btn btn-outline-dark'>
                <i class="bi-cart-fill me-1"></i> Cart <span className='bg-dark px-1 text-white rounded-pill '>0</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <section className='bg-dark py-5'>
        <div className='container text-center text-white my-5'>
          <h1 className='display-4 fw-bolder'>Shop in style</h1>
          <p className='lead mb-0 text-white-50'>With this shop hompeage template</p>
        </div>
      </section>
      <section className='py-5'>
        <div className='container'>
          <div className='row g-4 g-lg-5 justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-4'>
            <div className="col">
              <div className='card h-100'>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Fancy Product</h5>
                  <p>$40.00 - $80.00</p>
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card h-100'>
                <div className='badge position-absolute bg-dark text-white'>sale</div>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Special Item</h5>
                  <div className='text-warning mb-2'>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                  </div>
                  <p><span className='text-decoration-line-through text-muted'>$20.00</span> $18.00</p>
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card h-100'>
              <div className='badge position-absolute bg-dark text-white'>sale</div>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Sale Item</h5>
                 
                  <p><span className='text-decoration-line-through text-muted'>$50.00</span> $25.00</p>
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card h-100'>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Popular Item</h5>
                  <div className='text-warning mb-2'>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                  </div>
                  <p>$40.00</p>
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card h-100'>
              <div className='badge position-absolute bg-dark text-white'>sale</div>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Sale Item</h5>
                 
                  <p><span className='text-decoration-line-through text-muted'>$50.00</span> $25.00</p>
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card h-100'>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Fancy Product</h5>
                  <p>$120.00 - $280.00</p>
                  
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card h-100'>
                <div className='badge position-absolute bg-dark text-white'>sale</div>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Special Item</h5>
                  <div className='text-warning mb-2'>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                  </div>
                  <p><span className='text-decoration-line-through text-muted'>$20.00</span> $18.00</p>
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className='card h-100'>
                <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="img" />
                <div className='card-body p-4 text-center'>
                  <h5 className='fw-bolder'>Popular Item</h5>
                  <div className='text-warning mb-2'>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                    <span className='bi-star-fill'></span>
                  </div>
                  <p>$40.00</p>
                </div>
                <div className='card-footer text-center bg-transparent border-0'>
                  <div className='mb-3'>
                    <a className='btn btn-outline-dark' href="/">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-dark py-4'>
        <div className='container text-center'>
          <p className='text-white'>Copyright © Your Website 2022</p>
        </div>
      </footer>
    </>
  );
}

export default App;
