import React, { useEffect, useState } from 'react'; 
import { apiGET } from '../services/apis';
import PanelProducts from '../Components/PanelProducts';

function Home() {


    const [arrayProducts, setArrayProducts] = useState([]);

    useEffect(() => {
        fetchAPIProductos();
      }, []);
    
            
    const fetchAPIProductos  = async () => {
      const resultProducts = await apiGET();
      setArrayProducts(resultProducts)
    }
      
      console.log(arrayProducts)






    return (
        <main>
            <h1>HOME</h1>
            { arrayProducts.map((elementContract, index) => (
            <PanelProducts
              key={ `${elementContract}${index}` }
              elementContract={ elementContract }
            />
          )) }
        </main>
        

    )
}

export default Home;