import SingleProduct from "./SingleProduct";
import { useGlobalContext } from './context';
import Total from "./Total";

const Products = () => {
  const { cart } = useGlobalContext();
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
    <section className="products">
      <h3 className="empty-cart">Is Currently Empty</h3>
    </section>
    )
  }

  return (
    <>
      <section className="products">
        {
          cartArray.map((product) => {
            const [id, item] = product;
            return (
              <SingleProduct key={id} {...item} />
            )
          })
        }
      </section>
      <Total />
    </>
  )
}
export default Products;