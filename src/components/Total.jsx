import { useGlobalContext } from "./context";

const Total = () => {
  const { clearCart, totalCost } = useGlobalContext();
  return (
    <footer className="total">
      <div className="center">
        <h3 className="total-title">Total</h3>
        <span className="total-price">${totalCost.toFixed(2)}</span>
      </div>
      <button type="button" className="clear-cart" onClick={clearCart}>Clear Cart</button>
    </footer>
  )
}
export default Total;