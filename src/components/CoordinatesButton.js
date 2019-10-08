import React, { Component } from 'react';

export class CoordinatesButton extends Component {
    render() {
        return (
            <button onClick={e => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinates</button>
        );
    }
}

export default CoordinatesButton;