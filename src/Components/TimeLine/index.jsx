import React from "react";
import { TimeLineContent } from "../../Components/TimeLineContent/index";
import { useState } from "react";
import { TimeLineContainer } from "./styles";


const TimeLine = () => {


    const [postContainer, setPostContainer] = useState(false);

    const [postagens, setPostagens] = useState([
        {nomeUsuario: 'João', conteudo: 'Olá, mundo!'},
    ]);

    const [novaPostagem, setNovaPostagem] = useState('');

    const showPostContainer = () => {

        setPostContainer(!postContainer);
        
    };

    const handlePostar = () => {
        setPostagens([...postagens, {nomeUsuario: 'Usuário', conteudo: novaPostagem}]);
        setNovaPostagem('');
        setPostContainer(false)
    };


    return(
        <TimeLineContainer>
            <div id="postagem">
                <h2>Time line</h2>
                <button onClick={showPostContainer}>Fazer nova postagem</button>
            </div>


            {postContainer === true ? (
                <div id='campo_postagem'>
                    <input value={novaPostagem} onChange={(e) => setNovaPostagem(e.target.value)}></input>
                    <button onClick={handlePostar}>Postar</button>
                </div>

            ) : null}

            
            {postagens.map((postagem) => (
                            <TimeLineContent {...postagem} />
                        ))}
                        
        </TimeLineContainer>

    )
}

export { TimeLine };