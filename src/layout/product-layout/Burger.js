import React from 'react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const Burger = () => {

    const Bur = products.filter(product => product.type === "burger")
    console.log(Bur);

    return (
        <div>
            <h1>Promociones de Hamburguesas</h1>
    
            {Bur.map((B) => (

                <div className="card" style = {{width: "280px", margin: "20px", display:"inline-block"}}>
                    <img src={B.pictureUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">{B.title}</h3>
                        <h5 className="card-title">ID: {B.id}</h5>
                        <p className="card-text">Descripción: {B.description}</p>
                        <p className="card-text">Precio {B.price}</p>
                        <Link to={`/item/${B.id}`} className="btn btn-primary">Ver más</Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Burger
