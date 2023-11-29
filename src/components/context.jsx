import { createContext, useContext, useReducer, useEffect } from "react";
import { INCREASE, DECREASE, CLEAR_CART, REMOVE, LOADING, DISPLAY_ITEMS } from "./actions";
import reducer from "./reducer";
import { getTotals } from "./utils";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const defaultState = {
  loading: false,
  cart: new Map(),
};

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({type: CLEAR_CART});
  };

  const removeItem = (id) => {
    dispatch({type: REMOVE, payload: {id}});
  };

  const increase = (id) => {
    dispatch({type: INCREASE, payload: {id}});
  };

  const decrease = (id) => {
    dispatch({type: DECREASE, payload: {id}});
  };

  const fetchData = async () => {
    dispatch({type: LOADING});
    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({type: DISPLAY_ITEMS, payload: {cart}});
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <AppContext.Provider value={{...state, clearCart, removeItem, increase, decrease, totalAmount, totalCost}}>
      {children}
    </AppContext.Provider>
  )
};
export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);