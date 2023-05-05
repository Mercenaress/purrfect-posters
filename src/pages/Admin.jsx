import { useSelector, useDispatch } from "react-redux";
import InventoryCard from "../components/InventoryCard";
import AddNewProduct from "../components/AddNewProduct";
import { removeCatPoster } from "../app/catPosterSlice";
import Header from "../components/Header";
import style from './Admin.module.scss'

function Admin() {
  const state = useSelector((state) => state.catPosters);
  const dispatch = useDispatch();

  return (
    <>
    <Header/>
    <h2>Edit inventory</h2>
    <section className={style.bodyWrapper}>
      <section className={style.cardWrapper}>
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
              id={item.id}
            />
          ))}
      </section>
    </section>
    </>
  );
}

export default Admin;
