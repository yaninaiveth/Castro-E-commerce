import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CartWidget() {

    const {quantityItems} = useContext(CartContext)
    const [hidden, setHidden] = useState(true)

   // useEffect(() => {

        // if ({quantityItems} > 0){
          //  setHidden(false)
       // }
   //}, [true])

    return (
        <>
            <Link to="/cart">
                <span><FontAwesomeIcon icon={faShoppingCart}/></span>

            </Link>

            {{quantityItems} > 0 && <span>{quantityItems}</span>}
            <span className={quantityItems > 0 ? "cartNumber" : "hidden"}>{quantityItems}</span>
            
        </>
    )
}








