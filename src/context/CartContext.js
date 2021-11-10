import { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const CartContext = createContext(false);

export const CartProvider = ({defaultValue=[], children}) => {

    const [cart, setCart] = useState(defaultValue);
    const [total, setTotal] = useState(0)
    const [quantityItems, setQuantityItems] = useState(0)

    //Añade item al cart

    const addItem = (item, count) => {

        // búsqueda del producto
        const isInCart = cart.find( item => item.id === item.id )
        console.log(isInCart);

        if(!isInCart) {
        
            const newItem = {
                item: {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                },

                count:count,
                subtotal: ( count * item.price )
            }

            setCart([...cart, newItem])

        } else {

            const itemIs = cart.map( actual => {
                if(actual.item.id === item.id) {
                    return{
                        ...actual,
                        quantity:  ( parseInt(actual.count) + parseInt(count) ),
                        subtotal: ( actual.subtotal + (parseInt(count) * item.price) )
                    }
                }
                return actual
            })

            setCart(itemIs)
        }
    
    }

    // borra un item del carrito
    const removeItem = (item) => {

        console.log("Borrando item")
        const newCart = cart.filter( item => item.id !== item.id)
        setCart(newCart)
    }

    const clear = () => {

        console.log("Borrar todo")
        setCart([])
    }

    const totalCalc = () => {
        let newTotal = 0
        if(cart.length > 0) {
            cart.map( item => (
                newTotal += item.subtotal
            ))
        }
        setTotal(newTotal)
    }

    const cartNumber = () => {
        let totalItems = 0
        if(cart.length > 0) { 
            cart.forEach( (item) => {
                totalItems += item.count
            })
            setQuantityItems(totalItems)
        }        
    }

    useEffect(() => {
        cartNumber()
        totalCalc()
    }, [cart])
    
    return(
        <CartContext.Provider value={{addItem, removeItem, clear, cart, quantityItems, cartNumber}}>
            {children}
        </CartContext.Provider>
    )
} 