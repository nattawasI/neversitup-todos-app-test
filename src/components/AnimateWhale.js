import React from 'react'
import Lottie from 'react-lottie'
import animateWhale from '../assets/images/empty-whale.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animateWhale,
}

const AnimateWhale = () => {
  return (
    <Lottie options={ defaultOptions } height={ 300 } width={ 300 } />
  )
}

export default AnimateWhale
