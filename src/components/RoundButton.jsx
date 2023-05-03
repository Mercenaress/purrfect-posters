import removeIcon from '/images/remove-icon.svg';
import style from './RoundButton.module.scss'
import { useDispatch } from 'react-redux';
import { removeCatPoster } from '../app/catPosterSlice';

function RoundButton({removePoster}) {
    const dispatch = useDispatch();

    return ( 
        <button className={style.roundButton} onClick={removePoster}><img src={removeIcon} alt="" /></button>
     );
}

export default RoundButton;