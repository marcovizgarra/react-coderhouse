import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react'

import JS from '/public/js.png'
import HTML from '/public/HTML.png'
import CSS from '/public/css3.svg'

const SplideFull = () => {
    return(
        <>
            <div className="splite_container">
                <Splide aria-label="My Favorite Images" options={{
                    type   : 'loop',
                    perPage: 3,
                    focus  : 'center',
                }}>
                    <SplideSlide className="flex_row_center">
                        <img src={HTML} alt="Image 1" width={100}/>
                    </SplideSlide>
                    <SplideSlide className="flex_row_center">
                        <img src={CSS} alt="Image 2" width={150}/>
                    </SplideSlide>
                    <SplideSlide className="flex_row_center">
                        <img src={JS} alt="Image 3" width={100}/>
                    </SplideSlide>
                </Splide>
            </div>
        </>
    )
}

export default SplideFull