import style from './SmallButton.module.scss'

function SmallButton({text, handleClick}) {
    return ( 
        <button className={style.smallButton} onClick={handleClick} >{text}</button>
     );
}

export default SmallButton;