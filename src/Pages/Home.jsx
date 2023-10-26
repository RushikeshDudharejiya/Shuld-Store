import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/Banner.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main-banner'>
      <div className='main-img-benner'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_Sneakers_96MrWbb.jpg?format=webp&w=1300&dpr=1.5" alt="" className='img-banner img-banner-out' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/sweatshirts-homepage.jpg?format=webp&w=1300&dpr=1.5" alt="" className='img-banner img-banner-out' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_copy_ERGCiQg.jpg?format=webp&w=1300&dpr=1.5" alt="" className='img-banner img-banner-out' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_1_itCwMaW.jpg?format=webp&w=1300&dpr=1.5" alt="" className='img-banner img-banner-out' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='main-naruto-cloth'>
        <div className='naruto-head'>
          <h3 className='naruto-h3'>SHOP BY FANDOM</h3>
        </div>
        <div className='naruto-cloth'>
          <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Fandom_Naruto_copy_TOii4nF.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Fandom-Wakanda-Tiles_copy_X0D31lU.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Batman-Tiles_copy_copy_2_8W14Etx.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Fandom_Looney_Tunes_copy_uBSzJwx.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Harry-potter_Fandom-Tile_mGI9Ajt.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Peanuts_Fandom-Tile_UGcBJjL.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='main-naruto-cloth'>
        <div className='naruto-head'>
          <h3 className='naruto-h3'>COLLECTIONS</h3>
        </div>
        <div className='naruto-cloth'>
          <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile_cBXKtBi.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Colllection-Tiles_AY6biPm.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Supima-Flatlay_Collection-Tile_UDKf5Yx.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_1_jIe45LW.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-Tiles-2_N05PEwe.jpg?format=webp&w=480&dpr=1.5" alt="" className='img-naruto img-naruto-pic' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='cate-main'>
        <div className='cate-text'>
          <h3 className='cate-h3'>CATEGORIES</h3>
        </div>
        <div className='cate-image'>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/T-shirt_LfTnsdu.jpg?format=webp&w=400&dpr=1.5" alt="" className='cate-cloth img-cate-pic' />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shirts_8GCFQrV.jpg?format=webp&w=400&dpr=1.5" alt="" className='cate-cloth img-cate-pic' />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/oversized-t-shirt_Ntaa191.jpg?format=webp&w=400&dpr=1.5" alt="" className='cate-cloth img-cate-pic' />
        </div>
        <div className='cate-img-2'>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/oversized-t-shirt_1_6QxHAej.jpg?format=webp&w=300&dpr=1.5" alt="" className='cate-img-cloth-2' />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneakers_nStevb8.jpg?format=webp&w=300&dpr=1.5" alt="" className='cate-img-cloth-2' />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/horizontal-tile-men-30-08-22-copy_bByxZrU.jpg?format=webp&w=640&dpr=1.5" alt="" className='cate-img-cloth-3' />
        </div>
        <div className='cate-img-2'>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/shorts_uO8OfPL.jpg?format=webp&w=300&dpr=1.5" alt="" className='cate-img-cloth-2' />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/polos_1_iWQCJQ5.jpg?format=webp&w=300&dpr=1.5" alt="" className='cate-img-cloth-2' />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/supima_B9r4oCA.jpg?format=webp&w=300&dpr=1.5" alt="" className='cate-img-cloth-2' />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/perfumes_BdLgmlx.jpg?format=webp&w=300&dpr=1.5" alt="" className='cate-img-cloth-2' />
        </div>
      </div>
      <div className='main-naruto-cloth'>
        <div className='naruto-head'>
          <h3 className='naruto-h3'>TOP SELLING</h3>
        </div>
        <div className='top-seling-img'>
          <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper">
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top-selling-tile6.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>Mickey Mouse: Cruising</h4>
                <span className='sell-span'>T-Shirts</span><br />
                <span className='sell-span'>₹ 699</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top-selling-tile5.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>Punisher: Lethal Mode</h4>
                <span className='sell-span'>Oversized T-Shirts</span><br />
                <span className='sell-span'>₹ 999</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top-selling-tile3_WRneFyj.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>TSS Originals: Navy Checks</h4>
                <span className='sell-span'>Shirts</span><br />
                <span className='sell-span'>₹ 1599</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top-selling-tile_wTIbSyC.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>Solids: Denim Blue</h4>
                <span className='sell-span'>Cargo Pants</span><br />
                <span className='sell-span'>₹ 1399</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Top_Selling_copy_P9BkR6Q.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>Supima: Blue Berry</h4>
                <span className='sell-span'>Supima T-shirt</span><br />
                <span className='sell-span'>₹ 949</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top-selling-tile4.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>Spider-Man: Radioactive</h4>
                <span className='sell-span'>Full Sleeve T-shirts</span><br />
                <span className='sell-span'>₹ 1199</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top-selling-tile7.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>Solids: Pink</h4>
                <span className='sell-span'>Polos</span><br />
                <span className='sell-span'>₹ 999</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top-selling-tile2.jpg?format=webp&w=300&dpr=1.5" alt="" className='img-selling image-sell-cloth' />
              <div className='sell-text'>
                <h4 className='sell-h4'>Solids: Light Grey</h4>
                <span className='sell-span'>Men Cargo Joggers</span><br />
                <span className='sell-span'>₹ 1999</span>
                <span className='sell-span-line'>₹ 2499</span>
                <span className='sell-red'>20% OFF</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='headline-banner'>
        <Link className='headline'>
          <p className='headline-p'>HomeGrown Indian Brand</p>
        </Link>
      </div>
      <div className='addver-head'>
        Over
        <span className='addvertise'> 6 Million </span>
       Happy Customers
      </div>
      <div className='footer-main'>
          <div className='container'>
            <div className='row'>
              <div className='footer-head'>
                <h5 className='foot-headline'>NEED HELP</h5>
                <Link className='foot-link'>
                  <p className='foot-p'>Contact Us</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Track Order</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Returns & Refunds</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>FAQs</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>My Account</p>
                </Link>
              </div>
              <div className='footer-head'>
                <h5 className='foot-headline'>COMPANY</h5>
                <Link className='foot-link'>
                  <p className='foot-p'>About Us</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Careers</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Community Initiatives</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Souled Army</p>
                </Link>
              </div>
              <div className='footer-head'>
                <h5 className='foot-headline'>MORE INFO</h5>
                <Link className='foot-link'>
                  <p className='foot-p'>T&C</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Privacy Policy</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Sitemap</p>
                </Link>
              </div>
              <div className='footer-head'>
                <h5 className='foot-headline'>STORE NEAR ME</h5>
                <Link className='foot-link'>
                  <p className='foot-p'>Bandra</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Thane</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Colaba</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Palladium</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Pune</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Bangalore</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Malad</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Ghatkopar</p>
                </Link>
                <Link className='foot-link'>
                  <p className='foot-p'>Goregaon</p>
                </Link> 
              </div>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Home