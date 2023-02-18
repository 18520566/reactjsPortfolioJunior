import React from 'react'
import HTD_CV_TEST from '../../../../assets/HTD_CV_TEST.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={HTD_CV_TEST} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA