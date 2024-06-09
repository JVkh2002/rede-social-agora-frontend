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