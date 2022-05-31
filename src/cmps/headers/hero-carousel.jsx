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
        name: 'Moon',
        title: 'Marketing Expert',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png'
      },
      {
        name: 'Ritika',
        title: 'Shoemaker And Designer',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png'
      },
      {
        name: 'Zach',
        title: 'Bar Owner',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png'
      },
      {
        name: 'Gabrielle',
        title: 'Video Editor',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png'
      }
    ]
  }
  
  createSlide = () => {
    return this.state.gigs.map(gig => {
      return (
        <SwiperSlide key={gig.title}>
          <img className='img-slide ratio-16-9' src={gig.img} alt="" key={gig.title} />
          <div className='carousel-seller-info'>
            <span className='carousel-seller-name'>{gig.name}<span>, </span><span className='carousel-seller-skill'><b>{gig.title}</b></span></span>
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
        autoplaytimeout={2}
      >
        <div className="hero-andrea">
          {this.createSlide()}
        </div>
      </Swiper >


    )
  }
}

{/* <div className="hero-backgrounds">
                <div className="hero max-width-container">
                    <h1 className="font-domaine">
                        <span className="">Find the perfect <i>freelance</i><br></br> services for your business</span>
                    </h1>
                    <div className="hero-search-bar-package hero-search_bar-package">
                        <form className="">
                            <span className="hero-search-bar-icon" aria-hidden="true" >
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z">
                                    </path>
                                </svg>
                            </span>
                            <input type="search"
                                autoComplete="off"
                                placeholder="Try &quot;building mobile app&quot;"
                                value=""
                                className=""
                            >
                            </input>
                            <button className="hero-co-white hero-submit-button hero-bg-co-green-700">Search</button>
                        </form>
                    </div>
                    <div className="tags-container">
                        <div className="popular">Popular:
                            <ul className="">
                                <li>
                                    <a href="/categories/graphics-design/" className="text-body-2">Website Design</a>
                                </li>
                                <li>
                                    <a href="/categories/programming-tech" className="text-body-2">WordPress</a>
                                </li>
                                <li>
                                    <a href="/categories/graphics-design" className="text-body-2">Logo Design</a>
                                </li>
                                <li>
                                    <a href="/search/business" className="text-body-2">NFT Art</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

