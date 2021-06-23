import React from 'react'
import { GameBox, Img, GameFooter, Button, Count} from './styled'
import { images } from '../../util/imageGame'

class Game extends React.Component {
    state = {
        timer : 0,
        images : images[this.props.setting.option] ? images[this.props.setting.option] : [],
        view : {
            image : '',
            cnt : 0
        }
    }

    startTimer = null;

    componentDidMount(){
        this.startGame()
        this.randomImage()
    }

    startGame = () => {
        this.startTimer = setInterval(() => {
            this.setState({
                timer : ++this.state.timer
            })
        }, 1000)
    }

    randomImage = () => {
        let { images } = this.state
        let { problemCnt } = this.props.setting 
        let { cnt } = this.state.view

        let imagesFilter = images.filter(item => item.exposure == false) 
        
        // if(problemCnt != '' && cnt == problemCnt) 
        // if(imagesFilter.length <= 0)


        let randomImage = imagesFilter[Math.floor(Math.random() * imagesFilter.length)]
        let findIdx = images.findIndex(item => item.key == randomImage.key)

        images[findIdx].exposure = true

        this.setState({
            view : {
                image : randomImage,
                cnt : ++cnt
            },
            images
        })
    }

    render(){
        const { timer } =this.state
        const { image } = this.state.view
        return (
            <>
                <GameBox>
                    <Img src={ image.url }/>
                    <Count>
                        { timer }
                    </Count>
                </GameBox>
                <GameFooter>
                    <Button onClick={() => this.randomImage()}>다음</Button>
                </GameFooter>
            </>
        )
    }
}

export default Game