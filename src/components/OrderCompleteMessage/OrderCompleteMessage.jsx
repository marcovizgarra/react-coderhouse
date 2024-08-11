// React hooks
import { useNavigate } from 'react-router-dom'
// Images
import thanks_for_shopping from '/public/img/orderComplete/thanks-for-shopping.jpg'
import JBL_logo from '/public/img/navbar/JBL_logo.png'
// Functions
import { getFileName } from '../../js/functions'

const OrderCompleteMessage = ({ idOrder }) => {
    const navigateTo = useNavigate();

    const handleClick = (path) => {
        navigateTo(path)
    };

    return (
        <>
            <div className="container_complete flex_col_center">
                <div id="OrderComplete" className='flex_row_center'>
                    <img src={JBL_logo} alt={getFileName(JBL_logo)} width={"120"} />
                    <hr />
                    <img src={thanks_for_shopping} alt={getFileName(thanks_for_shopping)} width={"200"} />

                </div>
                <h2>Código de compra: {idOrder}</h2>
                <p>El envío será despachado hacia el domicilio suministrado durante la orden</p>
                <p>Recibirá un correo con los detalles de la orden y un enlace para el seguimiento del envío</p>
                <br />
                <button type='button' className='btn rounded-pill btn-primary btn_JBL' onClick={() => { handleClick('/') }}>Volver al inicio</button>
            </div>
        </>
    )
}

export default OrderCompleteMessage