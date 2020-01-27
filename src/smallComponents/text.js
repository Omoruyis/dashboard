import React, { Component } from 'react';
import { render } from '@testing-library/react';

// class Text extends Component {
    
// }

class Text extends React.Component{
    render() {
        const { text, textClass, id, TagName } = this.props

        return (
            <TagName className={textClass} id={id}>{text}</TagName>
        )
    }
}

export default Text;