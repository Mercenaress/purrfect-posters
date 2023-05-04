import style from './LargeButton.module.scss'

function LargeButton({buttonText, handleClick}) {
    return ( 
        <button className={style.LargeButton} onClick={handleClick}>{buttonText}</button>
     );
}

export default LargeButton;