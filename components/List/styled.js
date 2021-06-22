import styled from 'styled-components'
export const ListBox = styled.div`
    display:flex;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 21%;
    margin : 1.9%;
    padding-bottom : 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const Container = styled.div`
    padding: 2px 16px;
`


export const Img = styled.img`
    width: 100%;
`

export const Title = styled.h2`
`
