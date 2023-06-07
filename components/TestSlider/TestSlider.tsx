'use client'
import Slider from 'react-slick'
import styles from './Slider.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'

interface INew {
  id: number
  title: string
  text: string
}

interface Props {
  news: INew[]
  isEn: boolean
}
const TestSlider = ({ news, isEn }: Props) => {
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
          <p>
            {isEn
              ? 'Association "Taxes of Russia"'
              : 'Ассоциация "Налоги России"'}
          </p>
          <p className='text-xl text-red-500'>
            {isEn ? 'Created in 1992' : 'Защита бизнеса с 1992 года'}
          </p>
        </h1>
        <div className={styles.pageContent}>
          <p>
            {isEn ? 'Phone' : 'Телефон'}: (343) 378-93-33, 378-95-00, 378-93-30
          </p>
          <p>{isEn ? 'E-mail' : 'Почта'}: Anr@anr.ru</p>
        </div>
      </div>

      {news.map((item) => {
        return (
          <div className={styles.slideContainer} key={item.id}>
            <h1 className={styles.title}>
              {item.title.split(' ').length > 25
                ? item.title.split(' ').map((item, i) => {
                    if (i < 25) {
                      return (
                        <React.Fragment key={i}>{' ' + item}</React.Fragment>
                      )
                    }
                  })
                : item.title}
              {item.title.split(' ').length > 25 ? '...' : ''}
            </h1>
            <Link
              href={`/news/${item.id}`}
              className={styles.newsLink}
              onClick={() => {
                window.scrollTo({
                  top: 300,
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
