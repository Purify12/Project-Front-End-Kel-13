import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselInput() {
    return (
        <div>
            <div class="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay >
                    <div>
                        <img src="https://media.istockphoto.com/photos/top-view-of-piaynemo-raja-ampat-indonesia-picture-id1262899088?b=1&k=20&m=1262899088&s=170667a&w=0&h=zgPDf38odgEyCCoz0vFGMhyLJPnn0jf2ZlVtbCaB9x0=" alt="unsplash image" />
                        <a className="legend">Raja Ampat</a>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1620549146396-9024d914cd99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9yb2J1ZHVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="unsplash image" />
                        <a className="legend">Borobudur Temple</a>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/photos/pura-ulun-danu-bratan-temple-in-bali-picture-id675172642?b=1&k=20&m=675172642&s=170667a&w=0&h=IgKlfRYs9bs6bq3fx0WOCqdgWY3WW2-_2PKBMCcREj0=" alt="unsplash image" />
                        <a className="legend">Pura Ulun Danu Bratan Temple</a>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/photos/toba-lake-with-the-green-mountains-picture-id1225199712?b=1&k=20&m=1225199712&s=170667a&w=0&h=wnpwA06h1abelBXmSC09aEc_dkFvUyGgsRuayQpYg3M=" alt="unsplash image" />
                        <a className="legend">Lake Toba</a>
                    </div>
                
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselInput

