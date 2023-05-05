import InputField from '../components/InputField';
import InfoInputField from '../components/InfoInputField';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LargeButton from '../components/LargeButton';
import { editCatPoster } from '../app/catPosterSlice';
import Header from '../components/Header';
import style from './EditProduct.module.scss'

function EditProduct() {
    const [catPoster, setCatPoster] = useState({});
    const params = useParams();
    const state = useSelector((state) => state.catPosters);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [urlInput, setUrlInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [infoInput, setInfoInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [inventoryInput, setInventoryInput] = useState("");

    useEffect(() => {
        const filteredPosters = state.catPosters.filter((poster) => poster.id == params.id)
        if (filteredPosters.length > 0) {
            setCatPoster(filteredPosters[0]);
            console.log(filteredPosters[0]);
        } else {
            console.log('no match');
        }
    }, [params]);

    useEffect(() => {
        setUrlInput(catPoster.img);
        setNameInput(catPoster.name);
        setInfoInput(catPoster.info);
        setPriceInput(catPoster.price);
        setInventoryInput(catPoster.inventory);
        console.log(catPoster.name);
    }, [catPoster]);

    function handleEdits() {
        let editedCatPoster = {
            id: catPoster.id,
            img: urlInput,
            name: nameInput,
            info: infoInput,
            price: priceInput,
            inventory: inventoryInput
        };
        dispatch(editCatPoster(editedCatPoster));
    }

    return ( 
        <>
        <Header/>
        <h2>Edit product</h2>
        <section className={style.bodyWrapper}>
            <form action="">
                <InputField label={'Img url:'} value={catPoster.img} newValue={(e) => setUrlInput(e.target.value)}/>
                <InputField label={'Product name:'} value={catPoster.name} newValue={(e) => setNameInput(e.target.value)} />
                <InfoInputField label={'Information:'} value={catPoster.info} newValue={(e) => setInfoInput(e.target.value)} />
                <InputField label={'Price:'} value={catPoster.price} newValue={(e) => setPriceInput(e.target.value)} />
                <InputField label={'Inventory:'} value={catPoster.inventory} newValue={(e) => setInventoryInput(e.target.value)} />
            </form>
            <LargeButton buttonText={'Confirm Edits'}
            handleClick={() => {
                handleEdits();
                navigate('/');
            }}/>
        </section>
        
        </>
     );
}

export default EditProduct;