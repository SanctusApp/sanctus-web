import React from 'react'
import { Container, Carousel, CarouselItem } from 'react-bootstrap';

export default function Testimonials() {
    return (
        <Container className="cont-fluid">
            <Carousel id="sampleSlide" indicators={false}>
          <ol className="carousel-indicators">
            <li data-target='#sampleSlide' data-slide-to="0" className="active"></li>
            <li data-target= '#sampleSlide' data-slide-to="1"></li>
          </ol>
          <CarouselItem>
            <div className="itemContent">
               Hello World
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="itemContent">
               Hello World
            </div>
          </CarouselItem>
      </Carousel>
        </Container>

    
    )
}
