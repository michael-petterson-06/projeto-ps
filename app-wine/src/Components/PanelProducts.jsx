function PanelProducts(props) {

    const { avaliations, classification, country,
            discount, flag, id, image, name, price,
            priceMember, priceNonMember, rating, region,
           size, sommelierComment, type } = props.elementContract

    console.log(props.elementContract.image)
    
    return (
       
        <section className='registroTabela'>
         {/* <Link 
            to={{
            pathname: 'ConsultContracts', 
            contractId:contractId
          }}> */}
            
            {/* <img  className='formatImage' src={ flag } alt="Editar" /> */}
            <img  className='formatImage' src={ image } alt="Editar" />
            <div>{ name }</div>
            <div>{ priceMember}</div>
            <div>{priceNonMember}</div>
            <div>{avaliations}</div>
            <div>{classification}</div>
            <div>{priceNonMember}</div>
            <div>{country}</div>
            <div>{discount}</div>
            <div>{price}</div>
            <div>{rating}</div>
            <div>{region}</div>
            <div>{size}</div>
            <div>{sommelierComment}</div>
            <div>{type}</div>
            


            {/* </Link> */}
        </section>
    )
}


export default PanelProducts;