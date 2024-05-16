import React from 'react';

import {News } from "./styles";
import terra from '../../images/planetaterra.jpg'

const New = () => {
    return (
        <News>
            <img src={terra} alt="imagem do planeta terra" />

            <div>
            <h3>titulo da noticia</h3>
            <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Natus sequi est sit, doloribus rem temporibus 
                amet error maxime quidem quod officiis, accusamus dolor impedit 
                alias nesciunt culpa eius odio veritatis.</p>
            </div>
        </News>

    )
}

export { New };