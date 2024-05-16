import styled  from 'styled-components';

export const HomeContainer = styled.div`

    display: flex;
`

export const NewsContainer = styled.div`


    width: 20%;
    height: 100vh;

    border-right: 2px solid gray;


    h2 {
        margin-left: auto;
        margin-right: auto;
        width: 12rem;
        border-bottom: 1px solid gray;
        margin-top: 0;
    }


`


export const TimeLineContainer = styled.div`


    width: 50%;
    height: 100vh;

    white-space: break-spaces;
    overflow: scroll;
    overflow-x: hidden;
    text-overflow: clip;

    #postagem {
        display: flex;
    }

    #postagem > h2{
        margin-left: auto;
        margin-right: auto;
        width: 6.5rem;
        border-bottom: 1px solid gray;
        margin-top: 0;
    }

    #postagem > button {

        background-color: #1ed51e;
        border-radius: .5rem;
        height: 2.5rem;
        width: 6rem;
        color: white;
        border-style: none;
        margin-top: .4rem;
        margin-right: .5rem;
    }

    #postagem > button:hover{
        cursor: pointer;
    }

    #campo_postagem{

        border: 1px solid black;
        width: 99%;
        height: 6.3rem;
        margin-bottom: 1rem;
        border-radius: 1rem;
;
    }

    #campo_postagem > input{

        width: 38rem;
        height: 2rem;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    #campo_postagem > button{

        background-color: #1ed51e;
        border-radius: .5rem;
        height: 2rem;
        width: 4rem;
        color: white;
        border-style: none;
        margin-top: .4rem;
        margin-left: 35.5rem;
    }

`


export const ChatContainer = styled.div`


    width: 30%;
    height: 100vh;

    overflow: scroll;
    overflow-x: auto;

    h2{
        margin-left: auto;
        margin-right: auto;
        width: 3rem;
        border-bottom: 1px solid gray;
        margin-top: 0;
    }

    .MessageSpace {
        position: absolute;
        bottom: 1rem;

        margin-left: 3rem;
    }

    .MessageSpace > input{
        width: 15rem;
        height: 1.8rem;

        font-size: 20px;
        padding: 0 .4rem;
    }

    .MessageSpace > button {
        width: 4rem;
        height: 2rem;

    }

`