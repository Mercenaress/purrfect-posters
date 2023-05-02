import dabloonImg from '/images/dabloon.svg';
import SmallButton from './SmallButton';
import { useSelector } from 'react-redux';

function InventoryCard({img, name, price, inventory}) {
    const state = useSelector((state) => state.catPosters);

    return ( 
        <section>
            <img src={img} alt="" />
            <section>
                <h5>{name}</h5>
                <section>
                    <p>{price}</p>
                    <img src={dabloonImg} alt="" />
                </section>
            </section>
            <section>
                <p>Stock: {inventory} </p>
                <SmallButton/>
            </section>
        </section>
     );
}

export default InventoryCard;