const Item = ({item}) => {
    return(
        <>
            <div key={item.id} className="col md-4">
                <div className="card">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <p className="card-text">{item.price}</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Item