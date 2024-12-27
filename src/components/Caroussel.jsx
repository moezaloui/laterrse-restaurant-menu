import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import image01 from "../assets/product/01.jpg";
//import image02 from "../assets/product/02.jpg";
import image03 from "../assets/product/03.jpg";
import image04 from "../assets/product/04.jpg";
import image05 from "../assets/product/05.jpg";

const CarouselComponent = () => {
  const products = [
    image05,
    image03,
    image05,
    // "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    // "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    // "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  ];

  return (
    <div className="mt-10 mb:mt-[15vh] sm:mt-10 lg:mt-28">
      <div className="carousel-container">
        <Carousel
          autoPlay={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={true}
          className="mt-10"
        >
          {products.map((image, index) => (
            <div className="h-[60vh] sm:h-[70vh] lg:h-[80vh]" key={index}>
              <img className="h-full w-full object-cover" src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
