import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import InventoryCard from "../components/InventoryCard";
import AddNewProduct from "../components/AddNewProduct";
import { removeCatPoster } from "../app/catPosterSlice";

function Admin() {
  const state = useSelector((state) => state.catPosters);

  const dispatch = useDispatch();

  return (
    <>
      <section>
        <AddNewProduct />
        {state &&
          state.catPosters.map((item) => (
            <InventoryCard
              img={item.img}
              name={item.name}
              price={item.price}
              inventory={item.inventory}
              removePoster={() => dispatch(removeCatPoster(item))}
              key={item.id}
            />
          ))}
      </section>
    </>
  );
}

export default Admin;
