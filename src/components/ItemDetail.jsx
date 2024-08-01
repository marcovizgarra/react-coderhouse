const ItemDetail = ({item}) => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={item.img} alt={item.title} />
                    </div>
                </div>

                <div className="col">
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <div className="alert alert-light">Hasta 6 cuotas sin interes</div>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail