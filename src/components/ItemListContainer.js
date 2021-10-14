import React from 'react';

export const ItemListContainer = ({items, greeting}) => {
    return (
        <>
            <h1>{greeting}</h1>
            <h2>Artículos</h2>
            <ul>
                {items.map((items)=>(
                    <li>Articulo {items}</li>
                ))}
            </ul>
        </>
    )
}
