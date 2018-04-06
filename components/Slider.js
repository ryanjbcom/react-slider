/* Parent constructor */

import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';


export default class Slider extends Component {
	constructor(props) {
	super(props);
	
		this.state = {
			slideCount: 1 
		}

		/* change slides/click event */
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this..previousSlide.bind(this);


	}



	render() {
		return (
			<div className="slider">

			/* Slides */
			{ this.state.slideCount === 1 ? <SlideOne /> : null }
			{ this.state.slideCount === 2 ? <SlideTwo /> : null }
			{ this.state.slideCount === 3 ? <SlideThree /> : null }

			/* Arrow functionality to match /click event */
			<RightArrow nextSlide={this.nextSlide} />
			<LeftArrow previousSlife={this.previousSlide} />

			</div>
		);
	}


	/* functions for the /click event */
	nextSlide() {
		this.setState({ slideCount: this.state.slideCount + 1  })
	}

	previousSlide() {
		this.setState({ slideCount: this.state.slideCount + 1 })
	}	

}
