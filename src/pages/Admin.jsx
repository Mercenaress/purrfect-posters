import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import InventoryCard from '../components/InventoryCard';


function Admin() {
    const state = useSelector((state) => state.catPosters);
    console.log(state);

    return ( 
        <>
        {
            state && state.catPosters.map((item) => <InventoryCard img={item.img} name={item.name} price={item.price} inventory={item.inventory} />)
        }
        </>
     );
}

export default Admin;