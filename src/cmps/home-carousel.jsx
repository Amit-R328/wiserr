import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';
import 'swiper/css/autoplay';
import React from 'react';

export function HomeCarousel(){

  // createSlide = () => {
  //   console.log('JOBS', this.state.jobs)
  //   return this.state.jobs.map(job => {
  //     return (
  //       <SwiperSlide>
  //         <img className='img-slide' src={job.img} alt="" key={job.title}/>
  //       </SwiperSlide>
  //     )
  //   })
  // }
 return (
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
      >
      <SwiperSlide>
        <h1>Hello</h1>
        <img className='img-slide' src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png' alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <h1>Hey</h1>
        <img className='img-slide' src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png' alt=''/>
      </SwiperSlide>
      <SwiperSlide>
      <h1>why?</h1>
        <img className='img-slide' src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png' alt=''/>
      </SwiperSlide>
    </Swiper>
  )
}


