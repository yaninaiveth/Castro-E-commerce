import React from 'react';
import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }){

    const [count, setCount] = useState(initial);

    const add = () =>{
        if (count > 0) onAdd();
    }

    const increment = (count) => {
        if (count < stock) setCount(count + 1);
    }

    const decrement = (count) => {
        if ((count > 0) || (count === 1)) setCount(count - 1);
    }

    return (
        <div style = {{margin: "0 33% 0 33%", border: "solid 1px black", padding: "10px, 10px, 10px, 10px", background: "#E5EEFB"}}>
            <h3>Cantidad de artículos: {count}</h3>

            <div style = {{margin: "10px 0 0 0", padding: "10px 10px 10px 10px"}}>
                <button style = {{margin: "5px 5px 5px 5px"}} onClick = {() => increment(count)}>Agregar</button>
                <button style = {{margin: "5px 5px 5px 5px"}} onClick = {() => decrement(count)}>Quitar</button>
            </div>
            
            <button style = {{margin: "8px 0 0 10"}} onClick = {add}>Añadir todo al carrito</button>
        </div>
    );
}

export default ItemCount;