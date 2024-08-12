// React hooks
import { Link } from 'react-router-dom'
// Custon hooks
import screenSize from '../../hooks/screenSize';
// Img - Partners
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
// Img - Awards
import JBL_logo from '/public/img/navbar/JBL_logo.png'
import eisa_logo from '/public/img/footer/awards/eisa.png'
import if_design_logo from '/public/img/footer/awards/IF-Design.png'
import reddot_logo from '/public/img/footer/awards/reddot.png'
// Functions
import { getFileName } from '../../js/functions'


const Footer = () => {
    const { widthSize } = screenSize()

    return(
        <>
            <footer className='flex_col_center'>
                {
                    widthSize > 767 
                        ? <>
                            <div className="JBL_logo_n_awards wrap">
                                <img src={JBL_logo} alt={getFileName(JBL_logo)} width={"70px"} height={"70px"}/>
                                <hr />
                                <img src={eisa_logo} alt={getFileName(eisa_logo)} width={"70px"} height={"70px"}/>
                                <img src={if_design_logo} alt={getFileName(if_design_logo)} width={"120px"} height={"70px"}/>
                                <img src={reddot_logo} alt={getFileName(reddot_logo)} width={"126px"} height={"70px"}/>
                            </div>
                        </>
                        : <>
                            <div className="JBL_logo_n_awards wrap">
                                <img id="JBL_logo" src={JBL_logo} alt={getFileName(JBL_logo)} width={"70px"} height={"70px"}/>
                                <div className="awards flex_row_center">
                                    <img src={eisa_logo} alt={getFileName(eisa_logo)} width={"50px"} height={"50px"}/>
                                    <img src={reddot_logo} alt={getFileName(reddot_logo)} width={"100px"} height={"50px"}/>
                                    <img src={if_design_logo} alt={getFileName(if_design_logo)} width={"90px"} height={"50px"}/>
                                </div>
                            </div>
                        </>
                }

                <div className="sections_container">
                    <div className="sections ">
                        <div className="e_commerce footer_section flex_col_center">
                            <h5>Tienda</h5>
                            <Link to="/catalogo" className='section_link'>Catálogo</Link>
                        </div>

                        <div className="contact footer_section flex_col_center">
                            <h5>Contáctanos</h5>
                            <p>Horario de Atención</p>

                            <br />
                            <p>De Lunes a Viernes</p>
                            <p>09:00 a.m a 6:00 p.m</p>
                            <p>Escribinos a: info@jbl.com.ar</p>
                        </div>

                        <div className="social_media footer_section">
                            <h5>Seguinos</h5>
                            <div className="social_media_img">
                                <a href=""><img src={facebook_logo} alt={getFileName(facebook_logo)} /></a>
                                <a href=""><img src={instagram_logo} alt={getFileName(instagram_logo)} /></a>
                                <a href=""><img src={youtube_logo} alt={getFileName(youtube_logo)} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr width={"60%"} />
                <div className="partners_container flex_row_center wrap">
                    <img className='harman_logo' src={footer_logo} alt="" />
                    <img src={akg_logo} alt={getFileName(akg_logo)} />
                    <img src={hk_logo} alt={getFileName(hk_logo)} />
                    <img src={infinity_logo} alt={getFileName(infinity_logo)} />
                    <img src={jbl_logo} alt={getFileName(jbl_logo)} />
                    <img src={levinson_logo} alt={getFileName(levinson_logo)} />
                    <img src={lexicon_logo} alt={getFileName(lexicon_logo)} />
                    <img src={revel_logo} alt={getFileName(revel_logo)} />
                </div>
                <hr width={"60%"} />
                <p className='copy_right'>© 2024 Harman International Industries, Incorporated. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export default Footer