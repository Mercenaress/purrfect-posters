import style from './LargeButton.module.scss'

function LargeButton({buttonText, addPoster}) {
    return ( 
        <button className={style.LargeButton} onClick={addPoster}>{buttonText}</button>
     );
}

export default LargeButton;