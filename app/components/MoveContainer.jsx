import { ImgComparisonSlider } from '@img-comparison-slider/react'
import React from 'react'

const MoveContainer = () => {
  return (
        <ImgComparisonSlider>
          <img slot="first" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
          <img slot="second" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
        </ImgComparisonSlider>)

}

export default MoveContainer
