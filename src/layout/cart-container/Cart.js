import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = ({item}) => {
    const {cart, clear, removeItem, total} = useContext(CartContext)

    return (
        <>
            { ( cart.length > 0 ) 

            ? (
                <div>
                {cart.map( item => 
                (
                    <ul className="cart__items-line" key={item.id}>
                        <li>{item.item.title}</li>
                        <li>Precio: ${item.item.price}</li>
                        <li>Cantidad de artículos: {item.count}</li>
                        <li>Subtotal: ${item.subtotal}</li>
                        <li><button onClick={() => removeItem(item.item.id)}>Eliminar el artículo</button></li>
                    </ul>
                    )
                )}

                <div>
                    <button onClick={clear}>Borrar todo</button>
                   <Link to="/"><button onClick={clear}>Terminar de comprar</button></Link>
                </div>
            </div>
            
            ):(
                <div>
                    <h1>El carrito está vacío</h1>
                    <Link to="/"><button>Continuar comprando</button></Link>
                </div> 
            ) }  
        </>
    )      
}

export default Cart
