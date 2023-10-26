import React from 'react'
import '../css/topwear.css'
import { Link } from 'react-router-dom'
const Topwear = () => {
  
  return (
    <div className='topwear-main'>   
        <div className='img-snaker-main'>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/1616320231023115854.jpg?format=webp&w=1300&dpr=1.5" alt="" className='img-snaker'/>
        </div>
        <div className='custom-flex'>
          <div className='customradio-main'>
            <div className='custom-border'>
              <h6 className='custom-name'>GENDER</h6>
              <label className='custom-label'>
                <input type="radio" className='radio'/>
              </label>  
              <span className='custom-men'>Men</span>
              <div className='line'></div>
              <div className='product-name'>
                <h6 className='custom-name'>PRODUCTS</h6>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Men High Top Sneakers</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Men Lace Up Shoes</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Men Low Top Sneakers</span>
                  </label>
                </div>
              </div>
              <div className='product-name'>
                <h6 className='custom-name'>THEMES</h6>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Naruto</span>
                  </label>
                </div><div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Marvel</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Stranger Things</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>The Souled Store</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Money Heist</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className='checkbox-label'>
                    <span className='checkbox-text'>Harry Potter</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='product-main'>
            <div className='product-item'> 
              <Link className='img-link' to='/Singal'>
                <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1696599013_6165721.jpg?format=webp&w=240&dpr=1.5" alt="" className='img-product-singal'/>
              <div className='text-paroduct'>
                <h5 className='pro-text'>Naruto: Itachi</h5>
                <span className='pro-span'>Men High Top Sneakers</span>
                <div>
                  <span className='prise-span'>₹2499</span>
                  <span className='prise-line-span'>₹2999</span>
                  <span className='prise-off'>16% OFF</span>
                </div>
              </div>
              </Link>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Topwear