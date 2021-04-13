import { useContext, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Cart.css';


const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const [totalItems, setTotalItems] = useState(0)

// pasar esto al context provider
    useEffect(() => {
        let totalItems = 0;
        cart.forEach(o => totalItems += o.quantity);
        setTotalItems(totalItems);
        
    }, [cart])


    return (
        <NavLink to='/cart' className='me-3'>
            <span className={totalItems !==0 ? "fa-stack fa-5x has-badge" : ""} data-count={totalItems}>
                <i className="fas fa-shopping-cart text-white cart-icon"></i>
            </span>

        </NavLink>
    )
};

export default CartWidget;