import React from "react";
import { NewsContainer, ChatContainer, HomeContainer} from "./styles";


import { New } from '../../Components/News/index'
import { TimeLine } from "../../Components/TimeLine/index";
import { Message } from '../../Components/ChatMessage/index'
//import { postagens } from "../../Components/TimeLine/index";



const Home = () => {


    return (
        <HomeContainer>

            <NewsContainer>
                <h2>Últimas notícias</h2>

                <New/>
                <New/>
                <New/>
                <New/>
                
            </NewsContainer>

            <TimeLine />

            

            <ChatContainer>
                <h2>Chat</h2>

                <Message/>
                <Message/>
                <Message/>
                <Message/>

                <div className="MessageSpace">
                    <input type="text" />
                    <button>enviar</button>    
                </div>                

            </ChatContainer>
        </HomeContainer>

    )
};

export { Home };