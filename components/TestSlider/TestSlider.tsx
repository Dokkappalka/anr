'use client'
import Slider from 'react-slick'
import styles from './Slider.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const TestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
  }
  return (
    <Slider {...settings}>
      <div className={styles.slideContainer}>
        <h1 className={styles.title}>
          <p>Ассоциация &quot;Налоги России&quot;</p>
          <p className='text-xl text-red-500'>Защита бизнеса с 1992 года</p>
        </h1>
        <div className={styles.pageContent}>
          <p>Телефон: (343) 378-93-33, 378-95-00, 378-93-30</p>
          <p>Почта: Anr@anr.ru</p>
        </div>
      </div>
      <div>Здесь будут новости</div>
      <div>
        <p>И на заднем фоне картинки, если придумаю, какие...</p>
      </div>
    </Slider>
  )
}

export default TestSlider
