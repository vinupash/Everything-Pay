import React, { useState } from 'react';
import logo from '../../assets/logo.png';

import './Home.scss';
import Banner from '../../components/Banner';
import Promotion from '../../components/Promotion';
import ThreeBaanreSection from '../../components/ThreeBaanreSection';
import SideMenu from '../../components/SideMenu';

function Home() {
    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
    };

    const handleMouseOut = () => {
        setActive(false);
    };

    return (
        <div>
            <div className='header_section'>
                <div className='container'>
                    <div className='header_block'>
                        <img src={logo} alt="Logo" className='logo' />
                        {/* <img src={logo} alt="Logo" className='logo' /> */}
                        <div className='user_profile_block'>

                        </div>
                    </div>
                </div>
            </div>

            <Banner />
            <ThreeBaanreSection />
            <SideMenu />

            <div
                // className='serch_icons_section'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={active ? "result_hover" : "serch_icons_section"}
            >
                <div className='icon_input_box'>
                    <div className='icon_box icon_box_width'></div>
                </div>

            </div>

            <div className='wrapper_redeem_section'>
                <div class="container-fluid hero-header">
                    <div class="container pb-5">
                        <h3 className='section_title'>Rewards</h3>
                        <div class="wrapper_redeem">
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='wrapper_redeem_section'>
                <div class="container-fluid hero-header">
                    <div class="container pb-5">
                        <h3 className='section_title'>Badges</h3>
                        <div class="wrapper_redeem">
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                            <div className='redeem_block'>
                                <div className='redeem_block_inner'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Promotion />

            <div className='wrapper_redeem_section'>
                <div class="container-fluid hero-header">
                    <div class="container pb-5">
                        <h3 className='section_title'>Recent</h3>
                        <div class="wrapper_redeem">
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>
                            <div class="hexagon3">
                                <div class="hex1"></div>
                                <div class="hex2"></div>
                            </div>

                            {/* <div class="hexagon">
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <footer className='footer_section'>
                <div class="container-fluid hero-header">
                    <div class="container py-5">
                        <h3 className='footer_title mb-3'>DISCLAIMER</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
            </footer>

        </div >
    )
}

export default Home