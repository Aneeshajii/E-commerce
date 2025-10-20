import React from 'react';
// import './MainCarosil.css';
import './carosil.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../Assets/carosil.png';
import CarouselImage8 from '../Assets/carosil8.png';
import CarouselImage5 from '../Assets/carosil5.png';
import CarouselImage6 from '../Assets/carosil6.png';
import CarouselImage2 from '../Assets/carosil2.png';
import CarouselImage9 from '../Assets/carosil9.png';



const MainCarosil = () => {
  return (
    <Carousel>
      <Carousel.Item interval={700}>
        <img
          className="img1"
          src={CarouselImage}
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="img2"
          src={CarouselImage2}
          alt="Second slide"
        />
       
      </Carousel.Item>

         <Carousel.Item interval={1000}>
        <img
          className="img8"
          src={CarouselImage8}
          alt="Second slide"
        />
      
      </Carousel.Item>

         <Carousel.Item interval={1000}>
        <img
          className="img6"
          src={CarouselImage5}
          alt="Second slide"
        />
      
      </Carousel.Item>


       <Carousel.Item interval={1000}>
        <img
          className="img3"
          src={CarouselImage9}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarosil;
