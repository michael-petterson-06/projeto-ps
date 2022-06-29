import React, { useEffect, useState } from 'react'; 
import { apiGET } from '../services/apis';
import PanelProducts from '../Components/PanelProducts';
import styles from '../Components/Styles/Home.module.css'

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
            <section className={styles.containerProducts}>
                { arrayProducts.map((elementContract, index) => (
                <PanelProducts
                key={ `${elementContract}${index}` }
                elementContract={ elementContract }
                />
            )) }
          </section>
        </main>
        

    )
}

export default Home;