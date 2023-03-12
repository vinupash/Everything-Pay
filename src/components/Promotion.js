import React from 'react'
import { Link } from 'react-router-dom'
import DigitalBusiness from '../assets/digital-business.png';
import './Promotion.scss';

const Promotion = () => {
    return (
        <div className='promotion_section_block'>
            <div class="container-fluid">
                <div class="container promotion_image_container">
                    <img src={DigitalBusiness} alt="Logo" className='promotion_image' />
                </div>
            </div>
            <div className='promotion_section'>
                <div class="container-fluid py-5">
                    <div class="container py-4">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-8">
                                <h1 class="display-4 mb-3 animate__animated animate__slideInDown animate__delay-0.2s">Make Better Life With Trusted CryptoCoin</h1>
                                <p class="align-items-center animate__animated animate__slideInDown animate__delay-0.3s">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                    magna dolore erat amet</p>
                            </div>
                            <div class="col-lg-4 animate__animated animate__fadeIn animate__delay-1s text-center">
                                <Link class="btn btn-primary py-3 px-5 align-items-center animate__animated animate__slideInDown animate__delay-0.8s">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion