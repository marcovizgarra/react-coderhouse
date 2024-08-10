import { Link } from 'react-router-dom'
import akg_logo from '/public/img/footer/footer-logo-akg.png'
import hk_logo from '/public/img/footer/footer-logo-hk.png'
import infinity_logo from '/public/img/footer/footer-logo-infinity.png'
import jbl_logo from '/public/img/footer/footer-logo-jbl.png'
import levinson_logo from '/public/img/footer/footer-logo-levinson.png'
import lexicon_logo from '/public/img/footer/footer-logo-lexicon.png'
import revel_logo from '/public/img/footer/footer-logo-revel.png'
import footer_logo from '/public/img/footer/footer-logo.png'
import facebook_logo from '/public/img/footer/facebook-icon.png'
import instagram_logo from '/public/img/footer/instagram-icon.png'
import youtube_logo from '/public/img/footer/youtube-icon.png'

const Footer = () => {
    return(
        <>
            <footer className='flex_col_center'>

                <div className="section_container">
                    <div className="e_commerce footer_section flex_col_center">
                        <h5>Tienda</h5>
                        <Link to="/catalogo" className='section_link'>Catálogo</Link>
                    </div>

                    <div className="contact footer_section flex_col_center">
                        <h5>Contáctanos</h5>
                        <p>Horario de Atención</p>

                        <br /> <br />
                        <p>info@jbl.com.ar</p>
                        <p>De Lunes a Viernes</p>
                        <p>09:00 a.m a 6:00 p.m</p>

                        <br /> <br />
                    </div>

                    <div className="social_media footer_section">
                        <h5>Seguinos</h5>
                        <a href=""><img className='social_media_img' src={facebook_logo} alt="" /></a>
                        <a href=""><img className='social_media_img' src={instagram_logo} alt="" /></a>
                        <a href=""><img className='social_media_img' src={youtube_logo} alt="" /></a>
                    </div>
                </div>

                <hr width={"70%"} />
                <div className="partners_container flex_row_center">
                    <img className='harman_logo' src={footer_logo} alt="" />
                    <img src={akg_logo} alt="" />
                    <img src={hk_logo} alt="" />
                    <img src={infinity_logo} alt="" />
                    <img src={jbl_logo} alt="" />
                    <img src={levinson_logo} alt="" />
                    <img src={lexicon_logo} alt="" />
                    <img src={revel_logo} alt="" />
                </div>
                <hr width={"60%"} />
                <p className='copy_right'>© 2024 Harman International Industries, Incorporated. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export default Footer