// Functions
import { getFileName } from "../../js/functions"

// Components
import ProductCard from "../ProductCard/ProductCard"
import ItemDetail from "../ItemDetail"

// Images
import banner_parlantes from "/public/catalogue/banner_parlantes.jpg"
import JBL_exclam from "/public/catalogue/JBL_exclam.png"
import ItemDetail2 from "../ItemDetail/ItemDetail2"

const Catalogue2 = () => {
    return(
        <>
            <section className="catalogue_container flex_col_center">
                <article className="type_container">
                    <img className="banner" src={banner_parlantes} alt={getFileName(banner_parlantes)} />
                    <h2 className="m-0 p-0 category_title">
                        <img className="px-1 pb-1" src={JBL_exclam} alt={getFileName(JBL_exclam)} width={"50"} />
                        Parlantes
                    </h2>

                    <ItemDetail2 id={10}/>

                </article>
            </section>
            
            
        </>
    )
}

export default Catalogue2