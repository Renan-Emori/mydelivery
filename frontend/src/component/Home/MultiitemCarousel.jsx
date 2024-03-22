import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import {myFoods} from './MyFoods.js'
import CarouselItem from './CarouselItem'


const MultiItemCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div>
        <Slider {...settings}>
            {myFoods.map((item, index) => (
            <CarouselItem key={index} image={item.image} title={item.title} />))}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel