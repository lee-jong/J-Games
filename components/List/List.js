import React from 'react'
import { ListBox, Card, Container, Img, Title } from './styled'

class List extends React.Component {
    render(){
        return (
        <ListBox>
            <Card class="card">
              <Img src="/static/images/logo.png" alt="Avatar"/>
              <Container >
                <Title>Dice Game</Title>
              </Container>
            </Card>
            <Card class="card">
              <Img src="/static/images/logo.png" alt="Avatar"/>
              <Container >
                <Title>Game</Title>
              </Container>
            </Card>
            <Card class="card">
              <Img src="/static/images/logo.png" alt="Avatar"/>
              <Container >
                <Title>Game</Title>
              </Container>
            </Card>
            <Card class="card">
              <Img src="/static/images/logo.png" alt="Avatar"/>
              <Container >
                <Title>Game</Title>
              </Container>
            </Card>
            <Card class="card">
              <Img src="/static/images/logo.png" alt="Avatar"/>
              <Container >
                <Title>Game</Title>
              </Container>
            </Card>
            <Card class="card">
              <Img src="/static/images/logo.png" alt="Avatar"/>
              <Container >
                <Title>Game</Title>
              </Container>
            </Card>
            <Card class="card">
              <Img src="/static/images/logo.png" alt="Avatar"/>
              <Container >
                <Title>Game</Title>
              </Container>
            </Card>
        </ListBox>
        )
    }
}

export default List;