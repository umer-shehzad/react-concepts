import React from 'react'
import LazyLoad from 'react-lazy-load';

import LittleLemon from '../../assets/little-lemon.png';
import Humsafar from '../../assets/humsafar-portfolio.png';

function Index() {
    return (
        <div>
            <h2>React-Lazy-Load Image Component</h2>
            <LazyLoad height={200} offset={100} placeholder={Humsafar}>
                <img src={LittleLemon} alt='little-lemon' width={900} />
            </LazyLoad>
            {/* <img src={LittleLemon} alt='little-lemon' width={900} loading='lazy'/> */}
        </div>
    )
}

export default Index
