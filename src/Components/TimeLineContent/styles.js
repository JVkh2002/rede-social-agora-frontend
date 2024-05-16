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
        margin-left: -8.2rem;
        color: gray;
    }

    .content > p{
        margin-top: 0;
    }
`