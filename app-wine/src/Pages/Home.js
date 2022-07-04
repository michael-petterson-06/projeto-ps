import React, { useEffect, useState } from 'react'; 
import { apiGET } from '../services/apis';
import PanelProducts from '../Components/PanelProducts';
import styles from '../Styles/Home.module.css'


function Home() {


  const [arrayProducts, setArrayProducts] = useState([]);
    const [valueRadio, setValueRadio] = useState('');
    const [arrayOriginal, setArrayOriginal] = useState([]);

    useEffect(() => {
        fetchAPIProductos();
      }, []);
    
           
    const fetchAPIProductos  = async () => {
      const resultProducts = await apiGET();
      setArrayOriginal(resultProducts)
      setArrayProducts(resultProducts)
    }
      
    const qtdProducts = arrayProducts.length
    
    // console.log(arrayProducts)
    
    const filterMenor40Acima500 = (arryValor) => {
      let arrayFiltered;
      if (arryValor.length === 1 ){
        if (parseInt(arryValor[0]) > 0 && parseInt(arryValor[1]) <= 40) {
          arrayFiltered = arrayOriginal.filter((element) => element.price > 0 && element.price <= 40);
        } else {
           arrayFiltered = arrayOriginal.filter((element) => element.price > 500);
        }
        setArrayProducts(arrayFiltered)
      }
    }
    

    const filtrarOtherOptions = (arryValor) => {
      let  arrayFiltered;
      if (arryValor.length === 2 ){
        if (parseInt(arryValor[0]) >= 40 && parseInt(arryValor[1]) <= 60) {
          arrayFiltered = arrayOriginal.filter((element) => element.price >= 40 && element.price <= 60);
        }
         else if(parseInt(arryValor[0]) >= 60  && parseInt(arryValor[1]) <= 100) {
          arrayFiltered = arrayOriginal.filter((element) => element.price >= 60 && element.price <= 100);
        }
        else if(parseInt(arryValor[0]) >= 100  && parseInt(arryValor[1]) <= 200) {
          arrayFiltered = arrayOriginal.filter((element) => element.price >= 100 && element.price <= 200);
        }
        else if(parseInt(arryValor[0]) >= 200  && parseInt(arryValor[1]) <= 500) {
          arrayFiltered = arrayOriginal.filter((element) => element.price >= 200 && element.price <= 500);
        }
        setArrayProducts(arrayFiltered)
      }
    }

    
    const handlerRadio = (event)  => {
      let  arrayFiltered;
      const value = event.target.value
      if(value === 'todos') {
        console.log('estou ak')
        console.log(arrayOriginal)
        setArrayProducts(arrayOriginal)
      }
    
      
      setValueRadio(event.target.value)
      

      const arryValor = value.split('-')
      filterMenor40Acima500(arryValor)
      filtrarOtherOptions(arryValor)
    }
     

    return (
       <main className={ styles.containerAsideSection }>
            <aside className={ styles.containerAsideLeft}>
              <p>Redefina sua busca</p> 
              <div>
                <div>
                  <span>Por preço</span><br/>
                </div>
                <div>
                  <input
                      onChange={ handlerRadio }
                      type="radio"
                      name="price"
                      id="todos"
                      value="todos"
                      
                      />
                  <label htmlFor="todos">Todos produtos</label>
                </div>
                <div>
                  <input
                      onChange={ handlerRadio }
                      type="radio"
                      name="price"
                      id="quarenta"
                      value="40"
                      />
                  <label htmlFor="quarenta">Até R$40</label>
                </div>
                <div>
                  <input
                     onChange={ handlerRadio }
                     type="radio"
                     name="price"
                     id="sessenta"
                     value="40-60"/>
                  <label htmlFor="sessenta">R$40 A R$60</label>
                </div>
                <div>
                  <input
                     onChange={ handlerRadio }
                     type="radio"
                     name="price"
                     id="cem"
                     value="60-100"/>
                  <label htmlFor="cem">R$60 A R$100</label>
                </div>
                <div>
                  <input
                      onChange={ handlerRadio }
                      type="radio"
                      name="price"
                      id="duzentos"
                      value="100-200"/>
                  <label htmlFor="duzentos">R$100 A R$200</label>
                </div>
                <div>
                  <input
                      onChange={ handlerRadio }
                      type="radio"
                      name="price"
                      id="quinhetos"
                      value="200-500"/>
                  <label htmlFor="quinhetos">R$200 A R$500</label>
                </div>
                <div>
                  <input
                      onChange={ handlerRadio }
                      type="radio"
                      name="price"
                      id="acima-quinhentos"
                      value="500"/>
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