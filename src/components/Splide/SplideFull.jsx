import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import screenSize from '../../hooks/screenSize';
import Loader from '/src/components/Loader/Loader.jsx'


const SplideFull = ({ type }) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const { catalogue } = useContext(CartContext)
    const { widthSize } = screenSize()
    const navigateTo = useNavigate();

    const handleClick = (path) => {
        navigateTo(path)
    };

    useEffect(() => {
        let typeOfProduct = catalogue.filter(item => item.type == type)

        if (typeOfProduct.length > 0) {
            setFilteredItems(catalogue.filter(item => item.type == type))
        } else {
            setFilteredItems(catalogue)
        }
    }, [type, catalogue])

    return(
        <>
            {
                filteredItems == 0 
                    ? <Loader />
                    : <>
                        <div className="splide_container">
                            <Splide aria-label={type} options={{
                                type   : 'loop',
                                autoplay: true,
                                perPage: widthSize > 767 ? 3 : 1,
                                focus  : 'center',
                            }}>
                                {
                                    filteredItems.map((item) => (
                                        <SplideSlide key={item.id} className="flex_col_center cursor_pointer" onClick={() => { handleClick("/:" + item.id) }}>
                                            <img src={item.img} alt="Image 1" width={"250"}/>
                                            <p className='title'>{item.title}</p>
                                            <p className='price'>U$D {item.price}</p>
                                        </SplideSlide>
                                    ))
                                }
                            </Splide>
                        </div>
                    </>
            }
        </>
    )
}

export default SplideFull