import React, { Component } from 'react';

const SlideTwo= (props) => {

	let background = {
		backgroundImage: 'url(image2.jpg)',
		backgroundSize: 'cover",
		backgroundPosition: 'center'
	}

	return <div style={background} className="slide"></div>

}

export default SlideTwo;
