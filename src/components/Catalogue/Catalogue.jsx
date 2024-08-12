// Functions
import { getFileName } from "../../js/functions"
// Components
import ProductCard from "../ProductCard/ProductCard"
// Images
import banner_catalogue from "/public/img/catalogue/JBL.jpg"
import CategoryTitle from "../CategoryTitle/CategoryTitle"

const Catalogue = () => {
    return (
        <>
            <section className="catalogue_container flex_col_center">
                <article className="type_container flex_col_center">

                    {/* <div className="container banner_container">
                        <img className="banner container" src={banner_catalogue} alt={getFileName(banner_catalogue)} />
                    </div> */}

                    <div className="title_container">
                        <CategoryTitle title={"Parlantes"} />
                    </div>

                    <div className="container product_container flex_row_center">
                        <ProductCard type={"speaker"} />
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <div className="title_container">
                        <CategoryTitle title={"Auriculares"} />
                    </div>

                    <div className="container product_container flex_row_center">
                        <ProductCard type={"headphone"} />
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <div className="title_container">
                        <CategoryTitle title={"Gamer"} />
                    </div>

                    <div className="container product_container flex_row_center">
                        <ProductCard type={"gamer"} />
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <div className="title_container">
                        <CategoryTitle title={"Audio para el hogar"} />
                    </div>

                    <div className="container product_container flex_row_center">
                        <ProductCard type={"home_theater"} />
                    </div>
                </article>
            </section>
        </>
    )
}

export default Catalogue