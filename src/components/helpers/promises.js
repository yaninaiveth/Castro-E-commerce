export const promises = (products, setIsLoading, setCurrentProducts) => {

    const productResponse = new Promise ((resolve, reject) =>{
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
             
    .finally(()=>{   
        setIsLoading(false);
    });
}