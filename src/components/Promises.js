import { useState, useEffect } from 'react';
import { promises } from './helpers/promises';
import ItemList from './ItemList';

const Promises = ({products}) => {
    console.log({products});

    const [isLoading, setIsLoading] = useState(true);
    const [currentProducts, setCurrentProducts] = useState([]);


    /*const productResponse = new Promise ((resolve, reject) =>{
       setTimeout(() => {
           resolve (products);
        }, 3000);

    });
    
    productResponse.then((results)=>{
        console.log(results);
        setCurrentProducts(results);
    })

    /* task
        .then(
            (result)=>{
                console.log(`Result is correct ${result}`);
                setMessage(`Result is correct ${result}`);
                setIsSucces(true);
            }
        ) 

        .catch((error)=>{
            console.log(`Error in progress ${error}`); 
        })*/
            
        /*.finally(()=>{   
            setIsLoading(false);
        });*/

        useEffect(() => {
          if(products) promises(products, setIsLoading, setCurrentProducts);
        }, [products])

    return (
        <div>
            <h2>Promesas</h2>
            { isLoading && <h4>Cargando...</h4> }
            <ItemList currentProducts = {currentProducts}/>
        </div>    
    );

};

export default Promises
