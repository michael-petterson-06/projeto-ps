import React, { useEffect, useState } from 'react'; 
import { apiGET } from '../services/apis';
import PanelProducts from '../Components/PanelProducts';
import styles from '../Styles/Home.module.css'

function Home() {


    const [arrayProducts, setArrayProducts] = useState([]);

    useEffect(() => {
        fetchAPIProductos();
      }, []);
    
            
    const fetchAPIProductos  = async () => {
      const resultProducts = await apiGET();
      setArrayProducts(resultProducts)
    }
      

      const qtdProducts = arrayProducts.length

    return (
        
        

        <main className={ styles.containerAsideSection }>
             
          
            <aside className={ styles.containerAsideLeft}>
              <p>Redefina sua busca</p> 
              <div>
                <div>
                  <span>Por preço</span><br/>
                </div>
                <div>
                  <input type="radio" name="price" id="quarenta"  value="Até-R$40"/>
                  <label htmlFor="quarenta">Até R$40</label>
                </div>
                <div>
                  <input type="radio" name="price" id="sessenta"  value="R$40-R$60"/>
                  <label htmlFor="sessenta">R$40 A R$60</label>
                </div>
                <div>
                  <input type="radio" name="price" id="duzentos"  value="R$100-R$200"/>
                  <label htmlFor="duzentos">R$100 A R$200</label>
                </div>
                <div>
                  <input type="radio" name="price" id="quinhetos"  value="R$200-R$500"/>
                  <label htmlFor="quinhetos">R$200 A R$500</label>
                </div>
                <div>
                  <input type="radio"  name="price" id="acima-quinhentos" value="acima"/>
                  <label htmlFor="acima-quinhentos">Acima de R$500</label>
                </div>
              </div>
           </aside>
           
           <section className={ styles.secaoProduts }>
              
            <p><span className={styles.qtdProducts}>{qtdProducts}</span> <span>produtos encontrados</span></p>    
              
            <div className={styles.containerProducts}>
                { arrayProducts.map((products, index) => (
                <PanelProducts
                  key={ `${products}${index}` }
                  products={ products }
                />
            )) }
          </div>
           </section>
           
        </main>
        
        

    )
}

export default Home;