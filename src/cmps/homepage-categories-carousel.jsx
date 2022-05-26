// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {Navigation, Pagination} from 'swiper'

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import { Pagination, Navigation } from "swiper";
// SwiperCore.use([Navigation, Pagination])

// export const HomepageCategoriesCarousel = () => {
//     return (
//         <section className="homepage-categories-carousel">
//             <Swiper
//                 slidesPerView={4}
//                 spaceBetween={5}
//                 slidesPerGroup={8}
//                 loop={true}
//                 loopFillGroupWithBlank={true}
//                 pagination={{
//                     clickable: true
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
//                     <p>Build your brand</p>
//                     <h1>Graphics &amp; Design</h1>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
//                     <p>Build your brand</p>
//                     <h1>Graphics &amp; Design</h1>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
//                     <p>Build your brand</p>
//                     <h1>Graphics &amp; Design</h1>
//                 </SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//             </Swiper>
//         </section>
//     );
// }

import React, { Component } from "react";
import Slider from "react-slick";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowLeft, ArrowOnButtonLeftGrey, ArrowOnButtonRightGrey } from "../services/svg.service.js";

export const HomepageCategoriesCarousel = (props) => {
  return (
      <div className="carousel-container">
          <div className="track">
              <div className="card-container">
                  <div className="card"></div>
              </div>
              <div className="card-container">
                  <div className="card"></div>
              </div>
              <div className="card-container">
                  <div className="card"></div>
              </div>
              <div className="card-container">
                  <div className="card"></div>
              </div>
              <div className="card-container">
                  <div className="card"></div>
              </div>
              <div className="card-container">
                  <div className="card"></div>
              </div>
              <div className="card-container">
                  <div className="card"></div>
              </div>
              <div className="card-container">
                  <div className="card"></div>
              </div>
          </div>
          <div className="nav">
              <button className="prev"><ArrowOnButtonLeftGrey/></button>
              <button className="next"><ArrowOnButtonRightGrey/></button>
          </div>
      </div>
  )

    
}
