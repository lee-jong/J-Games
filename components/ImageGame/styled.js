import styled from 'styled-components'

// common -start
// common -end


// StartScreen -start
export const Screen = styled.div`
    border : 1px solid #e8e8e8;
    height : 250px;
    padding : 10% 20% 10% 20%;
`
    
export const Div = styled.div`
    height : 30%;
    display : flex;
`
export const Span = styled.div`
    width : 250px;
    text-align : center;
    padding-top:1.5%;
    font-weight: 600;
`


export const Button = styled.button`
    width:100%;
    height : 80%;
    border : none;
    color : #e8e8e8;
    font-size : 15px;
    font-weight: 600;
    background-color : #1baec5;
`
// StartScreen -end

// SelectBox -start
export const Select = styled.select`
    height : 50%;
    width: 300px;
    text-align-last: center;
`

export const Option = styled.option`
`
// SelectBox -end


// Game -start
export const GameBox = styled.div`
    display:flex;
`
export const Count= styled.div`
    position: absolute;
    width: 50px;
    left: 86.3%;
    font-size: 32px;
    text-align: end;
    font-weight: 600;
`

export const GameFooter= styled.div`
    height : 80px;
`

export const Img = styled.img`
    width: 50%;
    height: 450px;
    margin : 0 auto;
`

// Game -end