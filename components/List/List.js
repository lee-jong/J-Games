import React from 'react'

import { ListBox, Card, Container, Img, Title } from './styled'
import { gameList } from '../../util/games'
import { $router } from '../../util/nextUtil'

class List extends React.Component {
    render(){
        return (
        <ListBox>
            {gameList.map(item => 
                <Card key={item.idx} onClick={() => $router(item.path)}>
                    <Img src="/static/images/logo.png" alt="Avatar"/>
                    <Container >
                        <Title>{ item.title }</Title>
                    </Container>
                </Card>
            )}
        </ListBox>
        )
    }
}

export default List;