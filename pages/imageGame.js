import React from 'react'
import { StartScreen, Game } from '../components/ImageGame'

class ImageGame extends React.Component {
    state = {
        startStatus : false,
        setting : {
            option : 'character',
            problemCnt : '',
        }
    }

    handleGameStatus = () => {
        this.setState({
            startStatus : !this.state.startStatus
        })
    }

    handleGameSetting = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
           setting : {
               ...this.state.setting,
               [name] : value
           }
        })
    }

    render(){
        const { startStatus, setting } = this.state
        return (
            <>
            { startStatus ? 
                <Game setting={ setting } /> :
                <StartScreen handleGameSetting={ this.handleGameSetting } setting={ setting } handleGameStatus={ this.handleGameStatus }/>
            }
            </>
        )
    }
}

export default ImageGame