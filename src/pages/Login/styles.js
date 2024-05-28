import styled  from 'styled-components';
import terra from '../../images/planetaterra.jpg'

export const Background = styled.div`


    background-image: url(${terra});
    background-color: #000000;
    background-position: center;
    background-repeat: no-repeat;
    
    background-position: center;
    background-repeat: no-repeat;
    
    width: 100%;
    height: 100vh;
    

    header {
    color: white;

    h1{
        color: rgba(30, 255, 0, 0.685);
        align-content: center;
        margin-left: 1.5rem;
    }

    form{
        align-content: center;
        margin-left: auto;
        margin-right: 1rem;

        input{
        margin-right: 1rem;
        }

    }

    form > #login_senha_invalida{
        color: red;
        display: inline-block;
        position: absolute;
        top: 2.3rem;
        right: -3rem;
        font-size: 16px;
    }

    form > #login_email_invalido {
        color: red;
        display: inline-block;
        position: absolute;
        top: 2.3rem;
        left: 46.5rem;
        font-size: 16px;
    }

    display: flex;

    }

    #cadastro {
    background-color: white;
    display: flex;
    flex-direction: column;

    margin-left: auto;
    margin-right: 1rem;
    margin-top: 5rem;

    width: 23rem;
    height: fit-content;
    border-radius: 0.3rem;

    h3{
        margin-left: auto;
        margin-right: auto;
    }

    form{
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
        }

        div > #mensagem_erro_email {
            color: red;
            font-size: 16px;
            position: absolute;
            top: 13.2rem;
            right: 12rem;
            width: fit-content;
        }

        div > #mensagem_erro_usuario {
            color: red;
            font-size: 16px;
            position: absolute;
            top: 16.9rem;
            right: 8.7rem;
            width: fit-content;
        }

        div > #mensagem_erro_hashtag {
            color: red;
            font-size: 16px;
            position: absolute;
            top: 20.5rem;
            right: 8rem;
            width: fit-content;
        }

        div > #mensagem_erro_senha{
            color: red;
            font-size: 16px;
            position: absolute;
            top: 24.1rem;
            right: 10rem;
            width: fit-content;
        }

        div > #mensagem_erro_senhas_iguais {
            color: red;
            font-size: 16px;
            position: absolute;
            top: 27.8rem;
            right: 7.3rem;
            width: fit-content;
        }

        div > input{
            width: 20rem;
            margin-left: .7rem;
        }

        label{
            margin-right: .7rem;
            margin-left: .7rem;
            display: inline-block;
            width: fit-content;
        }
        

        button{
            width: 8rem;

            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
        }
    }
    }

    p{
    color: white;
    font-size: 2rem;
    width: 22.5rem;
    margin-left: 3rem;
    position: absolute;
    top: 9rem;
    }

`