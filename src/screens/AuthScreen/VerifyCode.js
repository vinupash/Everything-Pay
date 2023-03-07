import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import PinInput from 'react-pin-input';
import './VerifyCode.scss';

const VerifyCode = () => {
    return (
        <div className='auth_section'>
            <div className='auth_section_box'>
                {/* <h3 className='auth_text'>Create an <span className='auth_text_main'>EverythingPay</span><br /> Account</h3> */}
                <h3 className='auth_text'>Verify it’s you</h3>
                <p className='auth_sub_text'>We send a code to ( *****@mail.com ). Enter it here to verify your identity</p>

                <PinInput
                    length={6}
                    initialValue=""
                    secret
                    secretDelay={100}
                    onChange={(value, index) => { }}
                    type="numeric"
                    inputMode="number"
                    style={{ padding: '10px' }}
                    inputStyle={{
                        boxShadow: '5px 5px 10px #d1d9e6, -5px -5px 10px #f9f9f9'
                    }}
                    inputFocusStyle={{ boxShadow: '5px 5px 10px #d1d9e6, -5px -5px 10px #f9f9f9' }}
                    onComplete={(value, index) => { }}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                <div className='form'>
                    <Link className='resend_text'>Resend Code</Link>
                    <Button title="Confirm" />
                </div>
            </div>
        </div>
    )
}

export default VerifyCode