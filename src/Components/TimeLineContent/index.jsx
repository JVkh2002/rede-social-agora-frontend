import React from "react";
import {Content} from "./styles"
import userImage from '../../images/user_image.png';

const TimeLineContent = (props) => {
    return (
        <Content>
            <div className="userInfos">
                <img src={userImage} alt="foto do usuario" />
                <h4>Nome do usuário</h4>
                <p>@Usuário</p>
            </div>
            <div className="content">
                <p>
                    ${props.comentario}
                </p>
            </div>
        </Content>
    );

}

export { TimeLineContent };
