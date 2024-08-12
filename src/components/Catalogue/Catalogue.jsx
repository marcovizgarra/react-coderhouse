// Functions
import { getFileName } from "../../js/functions"
// Components
import ProductCard from "../ProductCard/ProductCard"
// Images
import banner_catalogue from "/public/img/catalogue/JBL.jpg"
import JBL_exclam from "/public/img/catalogue/JBL_exclam.png"

const Catalogue = () => {
    return (
        <>
            <section className="catalogue_container flex_col_center">

                <div className="banner_container">
                    <img src={banner_catalogue} className="container" alt={getFileName(banner_catalogue)} />
                </div>

                <article className="type_container flex_col_center">
                    <p className="d-inline-flex gap-1 title">
                        <button className="btn btn-primary btn_title" type="button" data-bs-toggle="collapse" data-bs-target="#headphones" aria-expanded="false" aria-controls="headphones">
                            <img src={JBL_exclam} alt={getFileName(JBL_exclam)} width={"50"} /> AURICULARES
                        </button>
                    </p>
                    <div className="collapse show cards_container" id="headphones">
                        <div className="card card-body">
                            <ProductCard type={"headphone"} />
                        </div>
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <p className="d-inline-flex gap-1 title">
                        <button className="btn btn-primary btn_title" type="button" data-bs-toggle="collapse" data-bs-target="#speakers" aria-expanded="false" aria-controls="speakers">
                            <img src={JBL_exclam} alt={getFileName(JBL_exclam)} width={"50"} /> PARLANTES
                        </button>
                    </p>
                    <div className="collapse" id="speakers">
                        <div className="card card-body">
                            <ProductCard type={"speaker"} />
                        </div>
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <p className="d-inline-flex gap-1 title">
                        <button className="btn btn-primary btn_title" type="button" data-bs-toggle="collapse" data-bs-target="#gamer" aria-expanded="false" aria-controls="gamer">
                            <img src={JBL_exclam} alt={getFileName(JBL_exclam)} width={"50"} /> GAMER
                        </button>
                    </p>
                    <div className="collapse" id="gamer">
                        <div className="card card-body">
                            <ProductCard type={"gamer"} />
                        </div>
                    </div>
                </article>

                <article className="type_container flex_col_center">
                    <p className="d-inline-flex gap-1 title">
                        <button className="btn btn-primary btn_title" type="button" data-bs-toggle="collapse" data-bs-target="#home_theater" aria-expanded="false" aria-controls="home_theater">
                            <img src={JBL_exclam} alt={getFileName(JBL_exclam)} width={"50"} />PARA EL HOGAR
                        </button>
                    </p>
                    <div className="collapse" id="home_theater">
                        <div className="card card-body">
                            <ProductCard type={"home_theater"} />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Catalogue