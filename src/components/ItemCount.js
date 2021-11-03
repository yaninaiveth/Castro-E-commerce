import React from 'react';

function ItemCount({ count, setCount, stock}){


    const increment = (count) =>{
        if  (count < stock) setCount (count + 1);
    }

    const decrement = (count) => {
            if ((count > 0) || (count === 1)) setCount(count - 1);
      }

    return (
        <div style = {{margin: "0 33% 0 33%", padding: "10px, 10px, 10px, 10px"}}>
            <h3>Cantidad de artículos: {count}</h3>

            <div style = {{margin: "10px 0 0 0", padding: "10px 10px 10px 10px"}}>
                <button style = {{margin: "5px 5px 5px 5px"}} onClick =  {() => increment(count)}>Agregar</button>
                <button style = {{margin: "5px 5px 5px 5px"}} onClick = {() => decrement(count)}>Quitar</button>
            </div>
            
            
        </div>
    );

    }
export default ItemCount;