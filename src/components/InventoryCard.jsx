import dabloonImg from './images/dabloon.svg';
import SmallButton from './SmallButton';

function InventoryCard() {
    return ( 
        <section>
            <img src="" alt="" />
            <section>
                <h5></h5>
                <section>
                    <p></p>
                    <img src={dabloonImg} alt="" />
                </section>
            </section>
            <section>
                <p>Stock: </p>
                <SmallButton/>
            </section>
        </section>
     );
}

export default InventoryCard;