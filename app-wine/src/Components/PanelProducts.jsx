import styles from '../Components/Styles/Home.module.css'
import { Link } from 'react-router-dom';


function PanelProducts(props) {

    const { avaliations, classification, country,
            discount, flag, id, image, name, price,
            priceMember, priceNonMember, rating, region,
           size, sommelierComment, type } = props.elementContract

    
    return (
        <div className={ styles.cardProduct }>
            <div >
            {/* <Link 
                to={{
                pathname: 'ConsultContracts', 
                contractId:contractId
            }}> */}
                
                {/* <img  className='formatImage' src={ flag } alt="Editar" /> */}
                <img  className={styles.formatImage} src={ image } alt="Editar" />
                <div>{ name }</div>
                <div>{price}</div>
                <div>{discount}</div>
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
            <div>
                <Link 
                    to={{
                        pathname: 'ConsultContracts', 
                        // contractId:contractId
                    }}>
                    <button>ADICIONAR</button>
                </Link>
            </div>
    </div>
    )
}


export default PanelProducts;