import './Button.scss';

export const Button = ({
    title
}) => {
    return (
        <>
            <button className='button'>{title}</button>
        </>
    )
}