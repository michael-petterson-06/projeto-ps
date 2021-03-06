import React, { useContext } from 'react';
import CarContext from '../context/CarContext';
import { Link } from "react-router-dom";
import styles from '../Styles/Products.module.css'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { BsStar,BsStarHalf, BsStarFill } from 'react-icons/bs'

function Products(props) {
    
    const { setLoggedCar, loggedCar, aux, setAux } = useContext(CarContext);

    const  { classification, country,
        discount, flag, id, image, name, price,
        priceMember, priceNonMember, rating, region,
       size, sommelierComment, type, volume } = props.location.products || {}
   
    const { products } = props.location

    const str = priceMember.toString();
    const splitted = str.split('.');
    const intPriceMember = parseInt(splitted[0]);
    const decimalPriceMember = parseInt(splitted[1] || 0);
    
    const arrayAuxCar = loggedCar


    const addCar = () => {
        arrayAuxCar.push(products)
        setLoggedCar(arrayAuxCar)
        localStorage.setItem('car', JSON.stringify(arrayAuxCar))
        setAux(aux + 1)
    }
    
    
    const removeCar = () => {
        arrayAuxCar.pop();
        setLoggedCar(arrayAuxCar)
        localStorage.setItem('car', JSON.stringify(arrayAuxCar))
        setAux(aux + 1)
    }

    
    
    return (
        <section className={ styles.containerProducts}>
            <Link  to="/">
                 <p className={ styles.voltar}><RiArrowLeftSLine/> Voltar </p>
            </Link>
            <div className={ styles.containerAsides}>
                <div className={ styles.asideImg}>
                    <img src={ image } alt="Foto do produto"></img>
                </div>
                <div className={ styles.asideInfo}>
                    <div className={styles.vinhoLocal}>
                        <span className={styles.vinho}>Vinhos</span>
                        <span><RiArrowRightSLine/></span>
                        <span className={styles.vinho}>{ country }</span>
                        <RiArrowRightSLine/>
                        <span className={styles.region}>{ region }</span>
                    </div>
                    <h3>{name}</h3>
                    <ul className={styles.ulProd}>
                        <li>
                           <div className={ styles.flag}>
                               <img src={ flag } alt='Bandeira Pais'></img>
                           </div>   
                        </li>
                        <li>{ country } </li>
                        <li>{ type }</li>
                        <li>{ classification }</li>
                        <li>{ volume }</li>
                        <li>
                            <div className={styles.start}> 
                                <BsStarFill/>
                                <BsStarHalf/>
                                <BsStar/>
                                <BsStar/>
                                <BsStar/>
                            </div>
                        </li>
                        <li>{ rating }</li>
                    </ul>
                    <div className={ styles.priceProd}>
                        <span className={ styles.realProd }>R$</span>
                        <span className={ styles.intPriceMemberProd }>{ intPriceMember}</span>
                        <span className={ styles.realProd }>{`,${ decimalPriceMember }`} </span>
                    </div>
                    <span className={ styles.noSocio}>{ `N??O S??CIO R$ ${priceNonMember}/UN.` }</span>
                    <div className={styles.containerComment}>
                        <h4>Coment??rio do Sommelier</h4>
                        <p className={styles.comment}>{ sommelierComment }</p>
                    </div>
                    <div className={styles.btnAdicionarProd}>
                        <div className={ styles.positNeg}>
                            <span onClick={ removeCar }>-</span>
                            <p>3</p>
                            <span onClick={ addCar }>+</span>
                        </div>
                        <div className={styles.addProd}>Adicionar</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;