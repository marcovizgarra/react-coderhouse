import { getFileName } from '../../js/functions'
import warranty_icon from '/public/img/homePublish/award-solid.svg'
import world_icon from '/public/img/homePublish/earth-americas-solid.svg'
import support_icon from '/public/img/homePublish/headphones-solid.svg'
import delivery from '/public/img/homePublish/truck-fast-solid.svg'

const HomePublish = () => {
    return(
        <>
            <section className="publish container flex_col_center">
                <h4>¿Por qué comprar directo con JBL?</h4>
                
                <div className="container flex_row_center">
                    <div className="pub_item flex_col_center">
                        <img src={delivery} alt={getFileName(delivery)} width={"40px"}/>
                        <br />
                        <p>Envío gratis a todo el país</p>
                    </div>

                    <div className="pub_item flex_col_center">
                        <img src={warranty_icon} alt={getFileName(warranty_icon)} width={"40px"}/>
                        <br />
                        <p>Garantía de 2 años</p>
                    </div>
                    
                    <div className="pub_item flex_col_center">
                        <img src={support_icon} alt={getFileName(support_icon)} width={"40px"}/>
                        <br />
                        <p>Envío gratis a todo el país</p>
                    </div>

                    <div className="pub_item flex_col_center">
                        <img src={world_icon} alt={getFileName(world_icon)} width={"40px"}/>
                        <br />
                        <p>Marca #1 mundial</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePublish