import React , {useContext, useState}from "react";
import {Content} from "./styles"
import userImage from '../../images/user_image.png';
import { NomeUsuarioContext } from '../../pages/Login';
import { HiDotsHorizontal } from "react-icons/hi";


const TimeLineContent = (props) => {

    const { handleRemover } = props;

    const [mostrarEditar, setMostrarEditar] = useState(false);

    const nomeContexto = useContext(NomeUsuarioContext);

    const mostrarEditarConteudo = () => {

        setMostrarEditar(!mostrarEditar);
        
    };


    return (
        <Content>
            <div className="userInfos">
                <img src={userImage} alt="foto do usuario" />
                <h4>{props.nomeUsuario}</h4>
                <p>@Usuário</p>
                <HiDotsHorizontal id="editar_conteudo_pontos" size={22} onClick={mostrarEditarConteudo}/>

                {mostrarEditar === true ? (
                    <div id="editar_conteudo">
                        <p onClick={() => handleRemover()}>Apagar</p>
                        <hr></hr>
                        <p>Editar</p>
                    </div>
                ) : null}
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
