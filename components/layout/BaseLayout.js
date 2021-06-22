import React from 'react';

//Component
import Meta from '../shared/Meta';

class BaseLayout extends React.Component {
  render(){
    let { children } = this.props
    return (
      <>
        <Meta />
        { children }
      </>
    )
  }
}

export default BaseLayout;
