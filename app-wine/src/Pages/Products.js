import styles from '../Styles/Products.module.css'

function Products() {
    return (
        <div className={ styles.containerProducts}>
            <p>
               Voltar  
            </p>
            <div className={ styles.containerAsides}>
                <div className={ styles.asideImg}>imagem</div>
                <div className={ styles.asideInfo}>Informaçõe do produto</div>
            </div>
        </div>
    )
}

export default Products;