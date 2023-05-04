import { useNavigate } from 'react-router-dom';
import style from './AddNewProduct.module.scss'
import addImg from '/images/add-icon.svg'

function AddNewProduct() {
    const navigate = useNavigate();

    return ( 
        <button className={style.newProductCard} onClick={() => navigate('/addproduct')}>
            <img src={addImg} alt="" />
            <p>Add new product</p>
        </button>
     );
}

export default AddNewProduct;