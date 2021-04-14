import { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Cart.css';


const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);
    
   
    return (
        <NavLink to='/cart' className='me-3'>
            <span className={getTotalItems() !==0 ? "fa-stack fa-5x has-badge" : ""} data-count={getTotalItems()}>
                <i className="fas fa-shopping-cart text-white cart-icon"></i>
            </span>
        </NavLink>
    )
};

export default CartWidget;