'use client'
import Slider from 'react-slick'
import styles from './Slider.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface INew {
  id: number
  title: string
  text: string
}

interface Props {
  news: INew[]
}
const TestSlider = ({ news }: Props) => {
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

      {news.map((item) => {
        return (
          <div className={styles.slideContainer} key={item.id}>
            <h1 className={styles.title}>{item.title}</h1>
            <Link
              href={`/news/${item.id}`}
              className={styles.newsLink}
              onClick={() => {
                window.scrollTo({
                  top: 450,
                  behavior: 'smooth',
                })
              }}
            >
              Читать далее...
            </Link>
          </div>
        )
      })}
    </Slider>
  )
}

export default TestSlider
