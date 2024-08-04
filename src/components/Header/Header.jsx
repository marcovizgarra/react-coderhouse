// Images
import cardIcon from '/public/img/header/credit-card-regular-white.svg';

const Header = ({prop}) => {
    return (
        <section className='header_section flex_row_center'>
            <img src={cardIcon} alt="CreditCardIcon" />
            <h4 className="h4-header">{prop}</h4>            
        </section>             
    )
}

export default Header