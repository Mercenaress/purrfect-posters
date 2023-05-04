import dabloonImg from '/images/dabloon.svg';
import SmallButton from './SmallButton';
import { useSelector } from 'react-redux';
import style from "./InventoryCard.module.scss";
import RoundButton from './RoundButton';
import { useNavigate } from 'react-router-dom';

function InventoryCard({img, name, price, inventory, removePoster, id}) {
    const navigate = useNavigate();

    return ( 
        <section className={style.inventoryCard}>
            <RoundButton removePoster={removePoster} />
            <img className={style.inventoryCardImg} src={img} alt="" />
            <section className={style.cardInfoWrapper}>
                <h4>{name}</h4>
                <section className={style.priceWrapper}>
                    <p>{price}</p>
                    <img className={style.dabloonImg} src={dabloonImg} alt="" />
                </section>
            </section>
            <section className={style.cardInfoWrapper}>
                <p>Stock: {inventory}</p>
                <SmallButton text={'Edit'} handleClick={() => navigate('/editproduct/' + id)} />
            </section>
        </section>
     );
}

export default InventoryCard;