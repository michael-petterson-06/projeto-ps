import styles from '../Components/Styles/Home.module.css'
import { Link } from 'react-router-dom';
import wine from '../img/wine.jpeg';

function PanelProducts(props) {

    const { avaliations, classification, country,
            discount, flag, id, image, name, price,
            priceMember, priceNonMember, rating, region,
           size, sommelierComment, type } = props.products

      
            
            const str = priceMember.toString();
            const splitted = str.split('.');
            const intPriceMember = parseInt(splitted[0]);
            const decimalPriceMember = parseInt(splitted[1] || 0);
            
    return (
        <div className={ styles.cardProduct }>
          <div className={styles.cardInfoProduct} >
            
            <div className={ styles.containerImgsVinhoLogo }> 
              <img  src={ image } alt="Editar" />
              <div className={ styles.containerImgLogWine }>
                  <img  className={styles.imgLogWine} src={ wine } alt="foto logo wine" />
              </div>
            </div>
            
            <div>{ name }</div>
            <div className={ styles.containerPrice }>
              <span className={ styles.price }>{ price }</span>
              <span className={ styles.discount }>{` ${ discount }% OFF`}</span>
            </div>
            <div className={ styles.containerSocioWine }>
              <span className={ styles.SocioWine }>SÓCIO WINE</span>
              <span className={ styles.real }>R$</span>
              <span className={ styles.intPriceMember }>{ intPriceMember}</span>
              <span className={ styles.decimalPriceMember }>{`,${ decimalPriceMember }`} </span>
            </div>
            <div className={styles.containerNoSocio}>
              <span>NÃO SÓCIO</span>
              <span>{` R$${ priceNonMember }`}</span>
              <span></span>
            </div>
            
            {/* <div className={styles.blackWine}>
              BLACK WINE
            </div> */}
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