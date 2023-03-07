import React from 'react'
// import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input, Password } from '../../components/Input';
import './ForgotPassword.scss';

const ForgotPassword = () => {
    return (
        <div className='auth_section'>
            <div className='auth_section_box'>
                {/* <h3 className='auth_text'>Create an <span className='auth_text_main'>EverythingPay</span><br /> Account</h3> */}
                <h3 className='auth_text text_center'>Passsword Recovery</h3>
                <p className='auth_sub_text text_center'>Enter your registered email below to receive password instructions</p>
                <form className='form'>
                    <Input placeholder="Email Address" />
                    <Button title="Send me Email" />
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword