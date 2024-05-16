import React from "react";
import { NewsContainer, TimeLineContainer, ChatContainer, HomeContainer} from "./styles";


import { New } from '../../Components/News/index'
import { TimeLineContent } from "../../Components/TimeLineContent/index";
import { Message } from '../../Components/ChatMessage/index'
import { useState } from "react";

const Home = () => {

    const [postContainer, setPostContainer] = useState(false);

    const showPostContainer = () => {

        setPostContainer(!postContainer);
        
    };

    return (
        <HomeContainer>

            <NewsContainer>
                <h2>Últimas notícias</h2>

                <New/>
                <New/>
                <New/>
                <New/>
                
            </NewsContainer>

            <TimeLineContainer>

                <div id="postagem">
                    <h2>Time line</h2>
                    <button onClick={showPostContainer}>Fazer nova postagem</button>
                </div>


                {postContainer === true ? (
                    <div id='campo_postagem'>
                        <input></input>
                        <button>Postar</button>
                    </div>

                ) : null}

                

                <TimeLineContent comentario={"comentario1"}/>
                <TimeLineContent comentario={"comentario2"}/>
                <TimeLineContent comentario={"comentario3"}/>


            </TimeLineContainer>

            

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