import style from './SmallButton.module.scss'

function SmallButton({text}) {
    return ( 
        <button className={style.smallButton} >{text}</button>
     );
}

export default SmallButton;