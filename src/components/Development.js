import React, { Component } from 'react';

class Development extends Component {

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

    showDevelopmentLinks() {
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
            <div className="development">
                <div className="development-text" onClick={() => { this.toggleHandler() }} >&lt;Development /&gt;  {this.showDevelopmentLinks()}</div>
            </div>
        );
    }
}

export default Development;