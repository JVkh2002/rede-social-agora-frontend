import React from 'react';
import userImage from '../../images/user_image.png'
import {Container} from '../../Components/ChatMessage/styles'

const Message = () => {
    return (
        <Container>
        <img src={userImage} alt='foto do usuário'/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Assumenda voluptas earum itaque. Cum adipisci non, officia amet facere quod laudantium, 
            corporis reiciendis a quia laborum eius repudiandae nisi asperiores voluptatibus..</p>
        </Container>
    )
}

export { Message };