import removeIcon from '/images/remove-icon.svg';
import style from './RoundButton.module.scss'

function RoundButton({removePoster}) {
    return ( 
        <button className={style.roundButton} onClick={removePoster}><img src={removeIcon} alt="" /></button>
     );
}

export default RoundButton;