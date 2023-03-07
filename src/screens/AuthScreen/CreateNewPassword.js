import React from 'react'
// import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import { Password } from '../../components/Input';
import './CreateNewPassword.scss';

const CreateNewPassword = () => {
    return (
        <div className='auth_section'>
            <div className='auth_section_box'>
                {/* <h3 className='auth_text'>Create an <span className='auth_text_main'>EverythingPay</span><br /> Account</h3> */}
                <h3 className='auth_text text_center'>Create New Password</h3>
                <p className='auth_sub_text text_center'>Please, enter a new password below different from the previous password</p>
                <form className='form'>
                    <Password placeholder="Password" />
                    <Password placeholder="Confirm Password" />
                    <Button title="Set New Password" />
                </form>
            </div>
        </div>
    )
}

export default CreateNewPassword