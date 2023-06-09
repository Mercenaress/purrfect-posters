import InputField from '../components/InputField'
import InfoInputField from '../components/InfoInputField'
import LargeButton from '../components/LargeButton'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addCatPoster } from '../app/catPosterSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import style from './AddProduct.module.scss'

function AddProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [urlInput, setUrlInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [infoInput, setInfoInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [inventoryInput, setInventoryInput] = useState("");

    function handleAddCatPoster() {
        let newCatPoster = {
            img: urlInput,
            name: nameInput,
            info: infoInput,
            price: priceInput,
            inventory: inventoryInput 
        };
        dispatch(addCatPoster(newCatPoster));
    }

    return ( 
        <>
        <Header/>
        <h2>Add new product</h2>
        <section className={style.bodyWrapper}>
            <form className={style.addProductForm}>
                <InputField label={'Img url:'} newValue={(e) => setUrlInput(e.target.value)} />
                <InputField label={'Product name:'} newValue={(e) => setNameInput(e.target.value)} />
                <InfoInputField label={'Information:'} newValue={(e) => setInfoInput(e.target.value)} />
                <InputField label={'Price:'} newValue={(e) => setPriceInput(e.target.value)} />
                <InputField label={'Inventory:'} newValue={(e) => setInventoryInput(e.target.value)} />
            </form>
                <LargeButton
                buttonText={'Add Product'} 
                handleClick={() => {
                    handleAddCatPoster(); 
                    navigate('/');
                }} />
            </section>
        </>
     );
}

export default AddProduct;