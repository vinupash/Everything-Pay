import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input, Password } from '../../components/Input';
import './Login.scss';
const Login = () => {
    return (
        <div className='auth_section'>
            <div className='auth_section_box'>
                {/* <h3 className='auth_text'>Create an <span className='auth_text_main'>EverythingPay</span><br /> Account</h3> */}
                <h3 className='auth_text'>Hi There! 👋</h3>
                <p className='auth_sub_text'>Welcome back, Sign in to your account</p>
                <div className='form'>
                    <Input placeholder="Email/Phone Account" />
                    <Password placeholder="Password" />
                    <Link to="/forgotpassword" className='forgot_text'>Forgot Password?</Link>
                    <Button to="/verifycode" title="Sign In" />
                </div>

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

                <Link to="/registration" className='signup_text'>Don’t have an account? <span className='signup_green_text'>Sign Up</span></Link>
            </div>
        </div>
    )
}

export default Login