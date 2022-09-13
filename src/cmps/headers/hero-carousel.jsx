import '../../assets/scss/main.scss'
import React, { useState, useEffect } from 'react'
import { Search } from '../search.jsx'
import { HeroPopularCategories } from './hero-popular-categories'

export function HeroCarousel(props) {
  let backIdx = 1
  const [backClass1, setBack1] = useState('active')
  const [backClass2, setBack2] = useState('')
  const [backClass3, setBack3] = useState('')
  const [backClass4, setBack4] = useState('')
  const [backClass5, setBack5] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (backIdx === 5) backIdx = 1
      else backIdx++
      _switchBackClass(backIdx, setBack1, setBack2, setBack3, setBack4, setBack5)
    }, 7000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="hero-container container">
      <div className="background-images">
        <div className={`background ${backClass1}`}>
          <img className='hero-pic' src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1654545573/hero/RitikaN_ykznwx.jpg" alt="Ritika" />
        </div>
        <div className={`background ${backClass2}`}>
          <img className='hero-pic' src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1654545573/hero/AndreaZ_jatehm.jpg" alt="Andrea" />
        </div>
        <div className={`background ${backClass3}`}>
          <img className='hero-pic' src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1654545573/hero/GabrielleN_svkqno.jpg" alt="Gabrielle" />
        </div>
        <div className={`background ${backClass4}`}>
          <img className='hero-pic' src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1654545573/hero/moonZ_qqzcge.jpg" alt="moon" />
        </div>
        <div className={`background ${backClass5}`}>
          <img className='hero-pic' src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1654545573/hero/ZachN_m3pq3u.jpg" alt="Zach" />
        </div>
      </div>
      <div className="hero-content-container">
        {/* <div className="hero-content"> */}
          <h1><span>Find the perfect <i>freelance </i>
           services for your business</span></h1>
          <div className="search-hero-homepage">
            <Search loc={'heroCarousel'} />
            <div className="hero-popular-category flex clean list">
            <span>Popular:</span>
              <HeroPopularCategories />
            </div>
          </div>
        </div>
      </div>
    // </div >
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
      break
    case 2:
      setBack1('')
      setBack2('active')
      setBack3('')
      setBack4('')
      setBack5('')
      break
    case 3:
      setBack1('')
      setBack2('')
      setBack3('active')
      setBack4('')
      setBack5('')
      break
    case 4:
      setBack1('')
      setBack2('')
      setBack3('')
      setBack4('active')
      setBack5('')
      break
    case 5:
      setBack1('')
      setBack2('')
      setBack3('')
      setBack4('')
      setBack5('active')
      break
    default:
      setBack1('')
  }
}
