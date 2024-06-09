import React , {useContext, useState}from "react";
import {Content} from "./styles"
import userImage from '../../images/user_image.png';
import { NomeUsuarioContext } from '../../pages/Login';


const TimeLineContent = (props) => {

    const nomeContexto = useContext(NomeUsuarioContext)

    console.log("nome do usuario na timeline: " + nomeContexto);
    console.log("teste de rederização")

    return (
        <Content>
            <div className="userInfos">
                <img src={userImage} alt="foto do usuario" />
                <h4>joão{nomeContexto}</h4>
                <p>@Usuário</p>
            </div>
            <div className="content">
                <p>
                    {props.conteudo}
                </p>
            </div>
        </Content>
    );

}

export { TimeLineContent };
