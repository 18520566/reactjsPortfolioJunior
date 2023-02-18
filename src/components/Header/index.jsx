import React from 'react'
import CTA from './components/CTA/index.jsx'
import ME_IMAGES from '../../assets/HTD.png'
import Socials from './components/Socials/index.jsx'
import './index.css'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Hoang Tien Dat</h1>
            <h5 className="text_light">
                React Developer
            </h5>
            <CTA/>
            <Socials/>

            <div className="me">
                <img src={ME_IMAGES} alt="me" />
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header