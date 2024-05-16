import styled from 'styled-components';

export const News = styled.div`

    display: flex;
    margin-left: .25rem;
    margin-right: .25rem;
    margin-top:.7rem;

    border: 1px solid gray;
    border-radius: .5rem;

    padding-top: 1rem;


    img {
        width: 12rem;
        height: 5rem;

        margin-left: .3rem;

        
    }

    h3{
        margin-left: .8rem;
        margin-top: -0.5rem;
        margin-bottom: .1rem;
        
    }

    p {
        margin-left: .8rem;
        margin-top: .1rem;


        white-space: break-spaces;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 400px;
        max-width: 13vw;
        max-height: 10.2vh;
    }

    div {
        width: 26rem;
    }

        
`