// React hooks
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
// Images
import speaker_banner from '/public/img/banners/Speakers-Banner.jpg'
import head_phone_banner from '/public/img/banners/headphone-banner.jpg'
import home_theater from '/public/img/banners/home-theater.jpg'
// Components
import CategoryTitle from "../CategoryTitle/CategoryTitle"
import ProductCard from "../ProductCard/ProductCard"

const CategoryRender = () => {
    const { type } = useParams()
    const [banner, setBanner] = useState(null);
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (type == ":speaker") {
            setBanner(speaker_banner)
            setTitle("PARLANTES")
        } else if (type == ":headphone") {
            setBanner(head_phone_banner)
            setTitle("AURICULARES")
        } else if (type == ":home_theater") {
            setBanner(home_theater)
            setTitle("AUDIO PARA EL HOGAR")
        }
    }, [type])   

    return (
        <>
            <section className="catalogue_container flex_col_center">
                <article className="type_container flex_col_center">

                    <div className="banner_container">
                        <img className="banner" src={banner} alt={title} />
                    </div>

                    <div className="title_container">
                        <CategoryTitle title={title} />
                    </div>

                    <div className="container product_container flex_row_center">
                        <ProductCard type={type.substring(1)} />
                    </div>
                </article>
            </section>
        </>
    )
}

export default CategoryRender