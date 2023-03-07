import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input, Password } from '../../components/Input';
import './Registration.scss';

const Registration = () => {
    return (
        <div className='auth_section'>
            <div className='auth_section_box'>
                <h3 className='auth_text pb_40'>Create an <span className='auth_text_main'>EverythingPay</span><br /> Account</h3>

                <form className='form'>
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email/Phone Account" />
                    <Password placeholder="Password" />
                    <Button title="Sign Up" />
                </form>

                <h4 className='hr_line'><span className='hr_text'>Or</span></h4>

                <div className="social_icon_section">
                    <ul className="">
                        <li className="social_icon_box">
                            <Link></Link>
                        </li>
                        <li className="social_icon_box">
                            <Link></Link>
                        </li>
                        <li className="social_icon_box">
                            <Link></Link>
                        </li>

                    </ul>
                </div>

                <Link to="/login" className='signup_text'>Don’t have an account? <span className='signup_green_text'>Sign In</span></Link>
            </div>
        </div>
    )
}

export default Registration