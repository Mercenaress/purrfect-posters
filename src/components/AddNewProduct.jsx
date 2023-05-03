import style from './AddNewProduct.module.scss'
import addImg from '/images/add-icon.svg'

function AddNewProduct() {
    return ( 
        <button className={style.newProductCard}>
            <img src={addImg} alt="" />
            <p>Add new product</p>
        </button>
     );
}

export default AddNewProduct;