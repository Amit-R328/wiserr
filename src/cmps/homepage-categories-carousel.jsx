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
        <div className="slider-package">
            <div className="simple-slider">
        <div className="carousel-container">
            <div className="carousel-item-padding-40-px">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/graphics-design" className="subcategory">
                                <h4>
                                    <small>Build your brand</small>Logo Design</h4>
                                <img alt="Logo Design" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png 2x" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/programming-tech" className="subcategory">
                                <h4>
                                    <small>Customize your site</small>WordPress</h4>
                                <img alt="WordPress" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png 2x" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/music-audio" className="subcategory">
                                <h4>
                                    <small>Share your message</small>Voice Over</h4>
                                <img alt="Voice Over" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png 2x" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/video-animation" className="subcategory">
                                <h4>
                                    <small>Engage your audience</small>Video Explainer</h4>
                                <img alt="Video Explainer" data-src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" data-srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x" className=" ls-is-cached lazyloaded" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png 2x" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/online-marketing" className="subcategory">
                                <h4>
                                    <small>Reach more customers</small>Social Media</h4>
                                <img alt="Social Media" data-src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" data-srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x" className="ls-is-cached lazyloaded" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png 2x" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/online-marketing" className="subcategory">
                                <h4>
                                    <small>Unlock growth online</small>SEO</h4>
                                <img alt="SEO" data-src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" data-srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x" className=" ls-is-cached lazyloaded" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png 2x" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/graphics-design" className="subcategory">
                                <h4>
                                    <small>Color your dreams</small>Illustration</h4>
                                <img alt="Illustration" data-src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" data-srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x" className=" ls-is-cached lazyloaded" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png 2x" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/writing-translation" className="subcategory">
                                <h4>
                                    <small>Go global</small>Translation</h4>
                                <img alt="Translation" data-src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" data-srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x" className=" ls-is-cached lazyloaded" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png 2x" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/data" className="subcategory">
                                <h4>
                                    <small>Learn your business</small>Data Entry</h4>
                                <img alt="Data Entry" data-src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" data-srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x" className=" ls-is-cached lazyloaded" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png 2x" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" />
                            </a>
                        </div>
                    </div>
                    <div className="slick-slide">
                        <div className="subcategory-wrapper touch">
                            <a href="/categories/graphics-design" className="subcategory">
                                <h4>
                                    <small>Showcase your story</small>Book Covers</h4>
                                <img alt="Book Covers" data-src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png" data-srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x" className="ls-is-cached lazyloaded" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png 2x" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png" />
                            </a>
                        </div>
                    </div>
            </div>
            <div className="nav">
                <button className="prev"><ArrowOnButtonLeftGrey /></button>
                <button className="next"><ArrowOnButtonRightGrey /></button>
            </div>
            </div>
            </div>
    )


}
