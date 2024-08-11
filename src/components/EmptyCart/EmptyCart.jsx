import { useNavigate } from 'react-router-dom'
import { getFileName } from '../../js/functions'
import empty_cart from '/public/img/emptyCart/empty-cart.png'

const EmptyCart = () => {
    const navigateTo = useNavigate();

    const handleClick = (path) => {
        navigateTo(path)
    };
    
    return(
        <>
            <section id="empty_cart" className='flex_col_center'>
                <h1>TU CARRITO DE COMPRAS ESTÁ VACÍO!</h1>
                <img src={empty_cart} alt={getFileName(empty_cart)} width={"300px"}/>
                <button type="button" className="btn btn-primary rounded-pill my-3 btn_JBL" onClick={() => {handleClick('/catalogo')}}>Ir al catálogo</button>
            </section>
        </>
    )
}

export default EmptyCart