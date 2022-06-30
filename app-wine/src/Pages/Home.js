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
        <main className={ styles.containerAsideSection }>
            <aside className={ styles.refinaBusca}>
                LADO PARA REDEFINIR BUSCA   
            </aside>
            <section className={styles.containerProducts}>
                { arrayProducts.map((products, index) => (
                <PanelProducts
                key={ `${products}${index}` }
                products={ products }
                />
            )) }
          </section>
        </main>
        

    )
}

export default Home;