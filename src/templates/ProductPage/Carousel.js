import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div style={{width: 500}}>
                    {this.props.images[0]}
                </div>
                <div>
                    {this.props.images[1]}
                </div>
                <div>
                    {this.props.images[2]}
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel