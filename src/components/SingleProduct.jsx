import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useGlobalContext } from './context';

const SingleProduct = ({ id, title, price, img, amount }) => {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <div className="single-product">
      <div className="product-content">
        <img className="product-image" src={img} alt={title} />
        <div className="product-info">
          <h3 className="product-name">{title}</h3>
          <span className="product-price">${price}</span>
          <button type="button" className="remove-product" onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
      </div>
      <div className="product-count">
        <button type='button' className='amount-btn' onClick={() => increase(id)}>
          <MdKeyboardArrowUp />
        </button>
          {amount}
        <button type='button' className='amount-btn' onClick={() => decrease(id)}>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </div>
  )
}
export default SingleProduct;