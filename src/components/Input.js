import './Input.scss'

export const Input = ({
    placeholder
}) => {
    return (
        <>
            <input className='form_input' type="text" placeholder={placeholder}></input>
        </>
    )
}

export const Password = ({
    placeholder
}) => {
    return (
        <div className='password_input'>
            <div className='input_box'>
                <input className='form_input_password' type="password" placeholder={placeholder}></input>
            </div>
            <div className='eye_icon'>
                {/* <FontAwesomeIcon icon="fa-light fa-eye" /> */}
                {/* <i class="fa-light fa-eye"></i> */}
            </div>
        </div>
    )
}