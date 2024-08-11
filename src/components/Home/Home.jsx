// Functions
import { getFileName } from '../../js/functions.js';
// Images
import slideImg1 from "/public/carousel/first_slide.png";
import slideImg2 from "/public/carousel/bar_800.jpg";
import slideImg3 from "/public/carousel/pb_710.png";
import slideImg4 from "/public/carousel/quantum_610.jpg";
import slideImg5 from "/public/carousel/tour_pro_2.jpg";
// Components
import ProductCard from '../ProductCard/ProductCard.jsx';
import SplideFull from '../Splide.jsx';

const Home = () => {
    return(
        <>
            <section className="homePage flex_col_center">
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
                                    No dejes de alentar en cada disciplina. Encontra acá el JBL ideal para vivir cada momento de la mejor forma.
                                    <br />
                                    ¡Aprovechá <b>6x sin interés + envío gratis</b>
                                </p>
                            </div>
                            <img src={slideImg1} className="d-block w-100" alt={getFileName(slideImg1)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">
                                <h4>Un auténtico sonido envolvente Dolby Atmos®</h4>
                                <p>
                                
                                Sumérgete e el sonido 3D con calidad teatral. Con unidades con salida superior, la JBL Bar 800 ofrece un auténtico sonido envolvente 3D Dolby Atmos®
                                </p>
                            </div>
                            <img src={slideImg2} className="d-block w-100" alt={getFileName(slideImg1)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">
                                <h4>ENCONTRÁ EL REGALO IDEAL</h4>
                                <p>Aprovechá <b>hasta 29% OFF</b> <br /> 6x sin interés y envíos gratis a todo el país</p>
                            </div>
                            <img src={slideImg3} className="d-block w-100" alt={getFileName(slideImg3)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">
                                <h4>SOUND IS SURVIVAL</h4>
                                <p>Fruto de años de investigación, hemos combinado auriculares diseñados con precisión junto a un software personalizado y de vanguardia para llevarte al corazón de la acción.</p>
                            </div>
                            <img src={slideImg4} className="d-block w-100" alt={getFileName(slideImg4)}/>
                        </div>
                        <div className="carousel-item">
                            <div className="slide">
                                <h4>JBL TOUR PRO 2</h4>
                                <p>La tecnología True Adaptive Noise Cancelling de los JBL Tour Pro 2 eliminá las distracciones para que puedas disfrutar de tu audio favorito con el legendario sonido JBL Pro, o del silencio si lo preferís, con un sonido impecable y excelente estés donde estés.</p>
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

                <article className="container products flex_col_center">
                        <h2>AURICULARES</h2>
                        <hr width={"80%"} />
                        <SplideFull type={"headphone"}/>  
                </article>

                <article className="container products flex_col_center">
                        <br />
                        <h2>PARLANTES</h2>
                        <hr width={"80%"} />
                        <SplideFull type={"speaker"}/>  
                </article>

                <article className="container products flex_col_center">
                        <br />
                        <h2>PRODUCTOS GAMING</h2>
                        <hr width={"80%"} />
                        <SplideFull type={"gamer"}/>  
                </article>
                
                <article className="container products flex_col_center">
                        <br />
                        <h2>AUDIO PARA EL HOGAR</h2>
                        <hr width={"80%"} />
                        <SplideFull type={"home_theater"}/>  
                </article>
            </section>
        </>
    )
}

export default Home