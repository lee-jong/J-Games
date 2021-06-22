import React from 'react'

import { MenuIcon } from '../../Icon'
import { Div, Img } from './styled'
import { $router } from '../../../util/nextUtil'


class Menu extends React.Component {
    render(){
        return (
            <Div>
              <Img src = {'/static/images/logo.png'} />
            </Div>
        )
    }
}

export default Menu;