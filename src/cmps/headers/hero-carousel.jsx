import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '../../assets/scss/main.scss'
import { useSelector } from 'react-redux';
import 'swiper/css/autoplay'

import { EffectFade } from 'swiper'
import { Search } from '../search.jsx';
import React, { useState, useEffect } from 'react'
import { SearchIcon } from '../../services/svg.service';

// export class HeroCarousel extends React.Component {
//   state = {
//     user: this.props.user,
//     gigs: [
//       {
//         name: 'Andrea',
//         title: 'Fashion Designer',
//         img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png'
//       },
//       {
//         name: 'Moon',
//         title: 'Marketing Expert',
//         img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png'
//       },
//       {
//         name: 'Ritika',
//         title: 'Shoemaker And Designer',
//         img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png'
//       },
//       {
//         name: 'Zach',
//         title: 'Bar Owner',
//         img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png'
//       },
//       {
//         name: 'Gabrielle',
//         title: 'Video Editor',
//         img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png'
//       }
//     ]
//   }

//   createSlide = () => {
//     return this.state.gigs.map(gig => {
//       return (
//         <SwiperSlide key={gig.title}>
//           <img className='img-slide ratio-16-9' src={gig.img} alt="" key={gig.title} />
//           <div className='carousel-seller-info'>
//             <span className='carousel-seller-name'>{gig.name}<span>, </span><span className='carousel-seller-skill'><b>{gig.title}</b></span></span>
//           </div>
//         </SwiperSlide>
//       )
//     })
//   }

//   render() {
//     return (
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         slidesPerView={1}
//         autoplay={{ delay: 5000 }}
//         autoplaytimeout={2}
//       >
//         <div className="hero-andrea">
//           {this.createSlide()}
//         </div>
//       </Swiper >
//     )
//   }
// }

export function HeroCarousel(props) {
  var backIdx = 1;
  const [backClass1, setBack1] = useState('active');
  const [backClass2, setBack2] = useState('');
  const [backClass3, setBack3] = useState('');
  const [backClass4, setBack4] = useState('');
  const [backClass5, setBack5] = useState('')


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (backIdx === 5) backIdx = 1
      else backIdx++
      _switchBackClass(backIdx, setBack1, setBack2, setBack3, setBack4, setBack5)

    }, 7000)
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <div className="hero-container">
      <div className='background-images'>
        <div className={`background ${backClass1}`}>
          <img className='hero-pic' src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png" />
        </div>
        <div className={`background ${backClass2}`}>
          <img className='hero-pic' src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png" />
        </div>
        <div className={`background ${backClass3}`}>
          <img className='hero-pic' src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png" />
        </div>
        <div className={`background ${backClass4}`}>
          <img className='hero-pic' src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png" />
        </div>
        <div className={`background ${backClass5}`}>
          <img className='hero-pic' src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png" />
        </div>
      </div>
      <div className="hero-content-container container">
        <div className='hero-content'>
          <h1>Find the perfect <i>freelance</i> <br></br>services for your business</h1>
          <div className='search-hero-homepage'>
            <Search />
          </div>
          <div className="hero-content-container container">
              <div className='hero-content'>
                  <h1>Find the perfect <i>freelance</i> <br></br>services for your business</h1>
                  <form className="search-bar">
                  <Search placeholder='Try "designing business logo"' />
                    </form>
              </div>
              <div className="static-background"></div>
          {/* <HeroPopularCategory /> */}
        </div>
        <div className="seller-name">
          <span className={`seller ${backClass1}`}>Andrea, <span className='seller-skill'>Fashion Designer</span></span>
          <span className={`seller ${backClass2}`}>Moon, <span className='seller-skill'>Marketing Expert</span></span>
          <span className={`seller ${backClass3}`}>Ritika, <span className='seller-skill'>Shoemaker And Designer</span></span>
          <span className={`seller ${backClass4}`}>Zach, <span className='seller-skill'>Bar Owner</span></span>
          <span className={`seller ${backClass5}`}>Gabrielle, <span className='seller-skill'>Video Editor</span></span>
        </div>
      </div>
    </div>
  )
}

function _switchBackClass(backIdx, setBack1, setBack2, setBack3, setBack4, setBack5) {
  switch (backIdx) {
    case 1:
      setBack1('active')
      setBack2('')
      setBack3('')
      setBack4('')
      setBack5('')
      break;
    case 2:
      setBack1('')
      setBack2('active')
      setBack3('')
      setBack4('')
      setBack5('')
      break;
    case 3:
      setBack1('')
      setBack2('')
      setBack3('active')
      setBack4('')
      setBack5('')
      break;
    case 4:
      setBack1('')
      setBack2('')
      setBack3('')
      setBack4('active')
      setBack5('')
      break;
    case 5:
      setBack1('')
      setBack2('')
      setBack3('')
      setBack4('')
      setBack5('active')
      break;

  }
}
