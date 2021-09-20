import React from 'react'
import Lottie from 'react-lottie'
import animateLoader from '../assets/images/loader-spin.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animateLoader,
}

const Loading = () => {

  return (
    <Lottie options={ defaultOptions } height={ 200 } width={ 200 } />
  );
};

export default Loading;
