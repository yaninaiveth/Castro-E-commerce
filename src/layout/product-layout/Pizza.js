import React from 'react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const Pizza = () => {

    const Pizz = products.filter(product => product.type === "pizza")
    console.log(Pizz);

    return (
        <div>
            <h1>Promociones de Pizzas</h1>
    
            {Pizz.map((P) => (
                <div className="card" style = {{width: "280px", margin: "20px", display:"inline-block"}}>
                    <img src={P.pictureUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">{P.title}</h3>
                        <h5 className="card-title">ID: {P.id}</h5>
                        <p className="card-text">Descripción: {P.description}</p>
                        <p className="card-text">Precio {P.price}</p>
                        <Link to={`/item/${P.id}`} className="btn btn-primary">Ver más</Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Pizza