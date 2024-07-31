import { getFileName } from '../js/functions.js';
import slideImg1 from "/public/carousel/first_slide.png";
import slideImg2 from "/public/carousel/bar_800.jpg";
import slideImg3 from "/public/carousel/pb_710.jpg";
import slideImg4 from "/public/carousel/quantum_610.jpg";
import slideImg5 from "/public/carousel/tour_pro_2.jpg";
import MostViewedProduct from './MostViewedProduct.jsx';

const Home = () => {
    return(
        <>
            <section className="homePage">
                <div id="carouselHomePage" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselHomePage" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselHomePage" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselHomePage" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselHomePage" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselHomePage" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="slide">
                                <h4>VIVÍ TODA LA EMOCIÓN CON JBL</h4>
                                <p>
                                    Encontrá acá el mejor JBL para vivir cada momento de la mejor forma
                                </p>
                            </div>
                            <img src={slideImg1} className="d-block w-100" alt={getFileName(slideImg1)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">
                                <h4>JBL BAR 800</h4>
                                <p>
                                    Llevá el sonido de tus series y películas a otro nivel con parlantes desmontables  y sonido Dolby Atmos
                                </p>
                            </div>
                            <img src={slideImg2} className="d-block w-100" alt={getFileName(slideImg1)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">

                            </div>
                            <img src={slideImg3} className="d-block w-100" alt={getFileName(slideImg3)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">

                            </div>
                            <img src={slideImg4} className="d-block w-100" alt={getFileName(slideImg4)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">

                            </div>
                            <img src={slideImg5} className="d-block w-100" alt={getFileName(slideImg5)}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev carousel_slide_button" type="button" data-bs-target="#carouselHomePage" data-bs-slide="prev" title='Anterior'>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next carousel_slide_button" type="button" data-bs-target="#carouselHomePage" data-bs-slide="next"  title='Siguiente'>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <article className='most_viewed_products'>
                    <MostViewedProduct />
                </article>
            </section>
        </>
    )
}

export default Home