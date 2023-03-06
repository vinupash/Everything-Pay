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
                <form className='form'>
                    <Input placeholder="Email/Phone Account" />
                    <Password placeholder="Password" />
                    <Link className='forgot_text'>Forgot Password?</Link>
                    <Button title="Sign In" />
                </form>

                <h4 className='hr_line'><span className='hr_text'>Or</span></h4>

                <div class="social_icon_section">
                    <ul class="">
                        <li class="social_icon_box">
                            <Link></Link>
                        </li>
                        <li class="social_icon_box">
                            <Link></Link>
                        </li>
                        <li class="social_icon_box">
                            <Link></Link>
                        </li>

                    </ul>
                </div>

                <Link className='signup_text'>Don’t have an account? Sign Up</Link>
            </div>
        </div>
    )
}

export default Login