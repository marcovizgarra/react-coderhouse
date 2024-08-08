// Functions
import { getFileName } from "../../js/functions"
// Components
import ProductCard from "../ProductCard/ProductCard"
import ItemDetail from "../ItemDetail"
// Images
import banner_catalogue from "/public/catalogue/main_banner.jpg"
import ItemDetail2 from "../ItemDetail/ItemDetail2"
import CategoryTitle from "../CategoryTitle/CategoryTitle"

const Catalogue2 = () => {
    return(
        <>
            <section className="catalogue_container flex_col_center">
                <article className="type_container flex_col_center">
                    
                    <div className="banner_container">
                        <img className="banner" src={banner_catalogue} alt={getFileName(banner_catalogue)} />
                    </div>

                    <div className="title_container">
                        <CategoryTitle title={"Parlantes"}/>
                    </div>
                    
                    <div className="row row-cols-4 product_container flex_row_center">
                        <ProductCard type={"speakers"} />
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <div className="title_container">
                        <CategoryTitle title={"Auriculares"}/>
                    </div>

                    <div className="row row-cols-4 product_container flex_row_center">
                        <ProductCard type={"headphone"} />
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <div className="title_container">
                        <CategoryTitle title={"Gamer"}/>
                    </div>
                    
                    <div className="row row-cols-4 product_container flex_row_center">
                        <ProductCard type={"gamer"} />
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <div className="title_container">
                        <CategoryTitle title={"Audio para el hogar"}/>
                    </div>
                    
                    <div className="row row-cols-4 product_container flex_row_center">
                        <ProductCard type={"home_theater"} />
                    </div>
                </article>

            </section>
            
            
        </>
    )
}

export default Catalogue2