import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Header = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <header className="header">
      <nav className="center">
        <h1 className="logo">UseReducer</h1>
        <div className="cart-container">
          <FaCartPlus className="cart-icon" />
          <span className="cart-product-count">{totalAmount}</span>
        </div>
      </nav>
    </header>
  )
}
export default Header;