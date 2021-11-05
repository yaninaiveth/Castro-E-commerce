import { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext(false);

export const CartProvider = ({defaultValue=[], children}) => {

    const [cart, setCart] = useState(defaultValue);

    //Añade item al cart

    const addItem = (item) => {

        // búsqueda del producto
        const isInCart = cart.find( item => item.id === item.id )
        console.log(isInCart);

        if(!isInCart) {
        
            const newItem = {
                item: {
                    id: item.id,
                    title: item.title,
                },
            }

            setCart([...cart, newItem])
        }
    }

    // borra un item del carrito
    const removeItem = () => {

        console.log("Borrando item")
        const newCart = cart.filter( item => item.id !== item.id)

    }

    const clear = () => {

        console.log("Borrar todo")
        setCart([])
    }

    return(
        <CartContext.Provider value={{addItem, removeItem, clear, cart}}>
            {children}
        </CartContext.Provider>
    )
} 