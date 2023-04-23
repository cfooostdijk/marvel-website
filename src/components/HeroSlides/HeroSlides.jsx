import React, { useEffect, useState } from 'react';
import styles from './styles/HeroSlides.module.sass';

function HeroSlides({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className={styles.carousel_wrapper}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
							className={`carousel_card ${
								index === current ? "carousel_card_active" : "carousel_card"
							}`}
            >
              <img className={styles.card_image} src={image.image} alt='' />
              <div className={styles.card_overlay}>
                <h2 className={styles.card_title}>{image.title}</h2>
              </div>
            </div>
          );
        })}
        <div className={styles.carousel_arrow_left} onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className={styles.carousel_arrow_right} onClick={slideRight}>
          &rsaquo;
        </div>
        <div className={styles.carousel_pagination}>
          {images.map((_, index) => {
            return (
              <div
                key={index}
								className={`pagination_dot ${
									index === current ? "pagination_dot_active" : "pagination_dot"
								}`}
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
