import removeIcon from '/images/remove-icon.svg';
import style from './RoundButton.module.scss'

function RoundButton() {
    return ( 
        <button className={style.roundButton} ><img src={removeIcon} alt="" /></button>
     );
}

export default RoundButton;