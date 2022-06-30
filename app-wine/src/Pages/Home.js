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
             
          
            <aside className={ styles.containerAsideRigth}>
              <p>Redefina sua busca</p> 
              
              <div>
                <div>
                  <span>Por preço</span><br/>
                </div>
                <div>
                  <input type="radio" id="css" name="fav_language" value="Até R$40"/>
                  <label for="html">Até R$40</label><br/>
                </div>
                <div>
                  <input type="radio" id="css" name="fav_language" value="R$40 A R$60"/>
                  <label for="html">R$40 A R$60</label><br/>
                </div>
                <div>
                  <input type="radio" id="css" name="fav_language" value="R$100 A R$200"/>
                  <label for="html">R$100 A R$200</label><br/>
                </div>
                <div>
                  <input type="radio" id="css" name="fav_language" value="R$200 A R$500"/>
                  <label for="html">R$200 A R$500</label><br/>
                </div>
                <div>
                  <input type="radio" id="css" name="fav_language" value="Acima de R$500"/>
                  <label for="html">Acima de R$500</label><br/>
                </div>
              </div>
           </aside>
           
           <section className={ styles.secaoProduts }>
              
                 <p>X produtos encontrados</p>    
              
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