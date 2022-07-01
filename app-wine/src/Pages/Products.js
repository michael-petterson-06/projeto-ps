import styles from '../Styles/Products.module.css'

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { BsStar,BsStarHalf, BsStarFill } from 'react-icons/bs'

function Products(props) {
    const  { avaliations, classification, country,
        discount, flag, id, image, name, price,
        priceMember, priceNonMember, rating, region,
       size, sommelierComment, type, volume } = props.location.products || {}
   
       const { products } = props.location
       console.log(products)

       const str = priceMember.toString();
       const splitted = str.split('.');
       const intPriceMember = parseInt(splitted[0]);
       const decimalPriceMember = parseInt(splitted[1] || 0);
    return (
        <section className={ styles.containerProducts}>
            <p><RiArrowLeftSLine/> Voltar </p>
            <div className={ styles.containerAsides}>
                <div className={ styles.asideImg}>
                    <img src={ image} alt="Foto do produto"></img>
                </div>
                <div className={ styles.asideInfo}>
                    <div className={styles.vinhoLocal}>
                        <span className={styles.vinho}>Vinhos</span>
                        <span><RiArrowRightSLine/></span>
                        <span className={styles.vinho}>{ country }</span>
                        <RiArrowRightSLine/>
                        <span className={styles.region}>{ region }</span>
                    </div>
                    <p>{name}</p>
                    <ul>
                        <li>
                            <img src={flag} alt='Bandeira Pais'></img>
                        </li>
                        <li>{ country } </li>
                        <li>{ type }</li>
                        <li>{ classification }</li>
                        <li>{ volume }</li>
                        <li>
                            <BsStar/>
                            <BsStarHalf/>
                            <BsStarFill/>
                        </li>
                        <li>{ avaliations }</li>
                    </ul>
                    <div>
                        <span className={ styles.real }>R$</span>
                        <span className={ styles.intPriceMember }>{ intPriceMember}</span>
                        <span className={ styles.decimalPriceMember }>{`,${ decimalPriceMember }`} </span>
                    </div>
                    <span>{ `NÃO SÓCIO R$ ${priceNonMember}/UN.` }</span>
                    <div>
                        <span>Comentário do Sommelier</span>
                        <p>{ sommelierComment }</p>
                    </div>
                    <div>
                        <div>
                            <span>-</span>
                            <p>3</p>
                            <span>+</span>
                        </div>
                        <div>Adicionar</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;