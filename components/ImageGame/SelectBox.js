import React from 'react'
import { Select, Option } from './styled'

class SelectBox extends React.Component {
    render(){
        const { name, handleGameSetting, selected, optionList } = this.props
        return (
            <Select name={name} onChange={ e => handleGameSetting(e) } selected={ selected }>
                {optionList.map(item => 
                <>
                    <Option value={ item.value } key={ `${ name + item.idx }` }>{ item.name }</Option>
                </>
                )}
            </Select>
        )
    }
}

export default SelectBox