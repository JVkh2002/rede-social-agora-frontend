import styled from 'styled-components';

export const Content = styled.div`

    width: calc(100% - 1.3rem);
    max-height: fit-content;
    margin-left: .5rem;
    margin-right: .5rem;

    border: 1px solid gray;
    margin-bottom: .7rem;

    padding: .2rem;

    .userInfos{
        display: flex;
    }

    .userInfos > img{
        width: 3rem;
        height: 3rem;;
    }

    .userInfos > h4{
        margin-left: 0.5rem;
        margin-top: 0;
        padding: 0;
    }

    .userInfos > p{
        margin-top: 1.3rem;
        margin-left: -2.4rem;;
        color: gray;
    }

    .userInfos > #editar_conteudo_pontos {
        position: absolute;
        left: 56rem;

    }

    .userInfos > #editar_conteudo_pontos:hover {
        cursor: pointer;
    }

    .userInfos > #editar_conteudo{
        border: 2px solid lightgray;
        border-radius: 0.3rem;

        position: relative;
        top: 1rem;
        left: 28rem;
    }

    
    
    .userInfos > #editar_conteudo > p{
        padding: 0.1rem 0.3rem;
        margin: 0;
        margin-bottom: .1rem;
        font-size: 16px;
        
        justify-content: center;
        display: flex;
    }
        
    .userInfos > #editar_conteudo > p:hover {
        cursor: pointer;
    }
    .userInfos > #editar_conteudo > hr{
        margin: 0;
    }

    .content > p{
        margin-top: 0;
    }
`