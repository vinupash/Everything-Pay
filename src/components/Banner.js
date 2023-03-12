import React from 'react'
import './Banner.scss';
import BannerImage from '../assets/hero-1.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner_section'>
            <div class="container-fluid hero-header py-5 mb-5">
                <div class="container py-5">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6">
                            <h1 class="display-4 mb-3 animate__animated animate__slideInDown animate__delay-0.2s">Make Better Life With Trusted CryptoCoin</h1>
                            <p class="align-items-center animate__animated animate__slideInDown animate__delay-0.3s mb-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                magna dolore erat amet</p>
                            <Link class="btn btn-primary py-3 px-5 align-items-center animate__animated animate__slideInDown animate__delay-0.8s">Explore More</Link>
                        </div>
                        <div class="col-lg-6 animate__animated animate__fadeIn animate__delay-1s text-center">
                            <img src={BannerImage} alt="Logo" className='hero_image animate__animated animate__fadeIn animate__slower animate__delay-2s animate__infinite' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner