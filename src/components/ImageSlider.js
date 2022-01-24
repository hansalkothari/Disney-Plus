import React from 'react';
// we will use react-slick in this js file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';


export default function ImageSlider() {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        SlidesTosScroll:1,
        autoplay:true
    }
    return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badging.jpg' />
      </Wrap>
      
    </Carousel>
  );
}

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
      &:before{
        font-size: 10px;
        color:rgb(150,178,171);
      }
    }

    li.slick-active button::before{
      color: white;
    }
    
    .slick-list{
      overflow: visible;
    }

    button{
      z-index: 1;

    }

`

const Wrap = styled.div`
    cursor: pointer;
    img{
      border: 4px solid transparent;
      width:100%;
      height: 100%;
      border-radius:4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px 
      , rgb(0 0 0 / 73%) 8px 16px 10px -10px;
      
      transition-duration : 300ms;

      &:hover{
        border: 4px solid rgba(249 , 249 , 249 , 0.8);
      }
    }
`