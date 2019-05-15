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
                    <a className="dev-link-text" href="http://abbygottlich.dev/feast-finder-app/" target="blank">feast-finder-app</a>
                    <span class="cursor">|</span>
                </div>
            )
        } else {
            return null
        }
    }

    scrollDown() {
        window.scroll({ top: 700, left: 0, behavior: 'smooth' })
    }

    render() {
        return (
            <div className="development-wrapper">
                <div className="development-inner-wrapper">
                    <div className="development">
                        <div className="development-content">
                            <div className="development-title" onClick={() => { this.toggleHandler() }}></div>
                            <div className="development-links">{this.showDevelopmentLinks()}</div>
                        </div>
                    </div>
                    <div onClick={this.scrollDown} className="development-arrow"></div>
                    <div className="arrow-text">more</div>
                </div>
            </div>
        );
    }
}

export default Development;