import InsertImg from './InsertImg';
import cardIcon from '/public/img/header/credit-card-regular-white.svg';
// import navExpandIcon from '/public/img/navbar/xmark-solid.svg';

const Header = ({prop}) => {
    return (
        <section className='header-section'>
            <InsertImg img={cardIcon} />
            <h4 className="h4-header">{prop}</h4>            
        </section>             
    )
}

export default Header