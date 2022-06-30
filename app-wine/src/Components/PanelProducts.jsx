import styles from '../Components/Styles/Home.module.css'
import { Link } from 'react-router-dom';


function PanelProducts(props) {

    const { avaliations, classification, country,
            discount, flag, id, image, name, price,
            priceMember, priceNonMember, rating, region,
           size, sommelierComment, type } = props.products

    
    return (
        <div className={ styles.cardProduct }>
          <div className={styles.cardInfoProduct} >
            {/* <img  className='formatImage' src={ flag } alt="Editar" /> */}
            <img  className={styles.formatImage} src={ image } alt="Editar" />
            <div>{ name }</div>
            <div className={ styles.containerPrice }>
              <p className={ styles.price }>{ price }</p>
              <span className={ styles.discount }>{` ${ discount }% OFF`}</span>
            </div>
            
            <div></div>
            <div>{ priceMember}</div>
            <div>{priceNonMember}</div>
            {/* <div>{avaliations}</div>
            <div>{classification}</div>
            <div>{country}</div>
            <div>{rating}</div>
            <div>{region}</div>
            <div>{size}</div>
            <div>{sommelierComment}</div>
            <div>{type}</div> */}
          </div>
          <div className={ styles.btnAdd }>
            <Link 
              to={{
                // pathname: 'ConsultContracts', 
                        // contractId:contractId
              }}>
                <button>ADICIONAR</button>
            </Link>
          </div>
        </div>
    )
}


export default PanelProducts;