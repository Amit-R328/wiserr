import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../assets/scss/main.scss';
import { useSelector } from 'react-redux';
import 'swiper/css/autoplay';
import React from 'react';
import { EffectFade } from 'swiper'

export class HeroCarousel extends React.Component {
  state = {
    user: this.props.user,
    gigs: [
      {
        name: 'Andrea',
        title: 'Fashion Designer',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png'
      },
      {
        title: 'Marketing Expert',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png'
      },
      {
        title: 'Shoemaker And Designer',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png'
      },
      {
        title: 'Bar Owner',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png'
      },
      {
        title: 'Video Editor',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png'
      }
    ]
  }
  createSlide = () => {
    console.log('GIGS', this.state.gigs)
    return this.state.gigs.map(gig => {
      return (
        <SwiperSlide>
          <div className="hero-img-title">
          <p>{gig.name}</p>
          <p>{gig.title}</p>
          <img className='img-slide ratio-16-9' src={gig.img} alt="" key={gig.title} />
          </div>
        </SwiperSlide>
      )
    })
  }
  render() {

    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        autoplayTimeout={2}
      >
        <div className="hero-andrea">
          {this.createSlide()}
        </div>
      </Swiper>

    )
  }
}

