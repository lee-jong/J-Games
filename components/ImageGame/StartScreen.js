import React from 'react'
import SelectBox from './SelectBox'
import { Screen, Div, Span, Button } from './styled'
import { imageGameCategory, imageGameProblemCnt } from '../../util/imageGame'


class StartScreen extends React.Component {
    render(){
        const { handleGameSetting, setting, handleGameStatus } = this.props
        return (
            <Screen>
                <Div>
                    <Span> 종목 </Span>
                    <SelectBox name={'option'} handleGameSetting={ handleGameSetting } selected={ setting.option } optionList={ imageGameCategory}/> 
                </Div>
                <Div>
                    <Span> 문제수 </Span>
                    <SelectBox name={'problemCnt'} handleGameSetting={ handleGameSetting } selected={ setting.problemCnt } optionList={ imageGameProblemCnt }/> 
                </Div>
                <Div>
                    <Button onClick={() => handleGameStatus()}>시작하기</Button>
                </Div>
            </Screen>
        )
    }
}

export default StartScreen