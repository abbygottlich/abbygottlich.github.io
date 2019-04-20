import React, { Component } from 'react';

class Design extends Component {

    state = {
        toggle: false
    }

    toggleHandler() {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true
            })
        } else {
            this.setState({
                toggle: false
            })
        }
    }

    showDesignLinks() {
        if (this.state.toggle === true) {
            return (
                <div>
                    <div>link 1</div>
                    <div>link 2</div>
                    <div>link 3</div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="design">
                <div className="design-text" onClick={() => { this.toggleHandler() }} >{this.showDesignLinks()}</div>
            </div>
        );
    }
}

export default Design;