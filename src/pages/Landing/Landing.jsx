import React from 'react';
import HeroSlides from '../../components/HeroSlides/HeroSlides';
import '../../index.css'

export const Landing =() =>{

  const images = [
    { image: 'https://sportshub.cbsistatic.com/i/2021/11/11/f0d33317-5c68-4ad7-9941-f55fdf656e67/new-marvel-disney-plus-banner-revealed-day.jpg?auto=webp&width=1630&height=628&crop=2.596:1,smart' },
    { image: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/4679.jpg' },
    { image: 'http://3.bp.blogspot.com/-20w_0ZRVmSE/Wn9aoy72M6I/AAAAAAAADF4/Mi1rfU3ufLkcU_SUCVZYfRmX-OcIjLwbACK4BGAYYCw/s1600/Marvel10AniversarioBannerLatino.png' }
  ]

  return (
    <>
      <div className='hero'>
        <HeroSlides images={images} />
      </div>
    </>
  )
}

export default Landing;
