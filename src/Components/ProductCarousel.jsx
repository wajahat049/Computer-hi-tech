import '../App.css';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import MainCard from "./Card"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function ProductCarousel (props){
    const imgArr = props.imgArr
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(
        <Carousel
centerMode={true}
  swipeable={false}
  draggable={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={props.deviceType !== "mobile" ? true : false}
  // autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
  {imgArr.map((e,i) => {
                return (
                  <div key={i}>
                    <MainCard
                      src={e}
                      title={e.substring(0,20)}
                      price="$313.78"
                    />
                    </div>
                  
                );
              })}
  


</Carousel>



    )
}

export default ProductCarousel