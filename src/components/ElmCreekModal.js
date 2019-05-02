import React, { Component } from 'react';

class ElmCreekModal extends Component {

    state = {
        xToggle: false
    }

    xToggle() {
        if (this.state.xToggle === false) {
            this.setState({
                xToggle: true
            })
        } else {
            this.setState({
                xToggle: false
            })
        }
    }

    render() {
        if (this.state.xToggle === false) {
            return <div className="modal-content">
                <div className="modal-header">
                    <div className="project-name">Elm Creek Website + Branding</div>
                    <a className="prototype" href="https://marvelapp.com/133fji06/screen/37485606" target="blank">View Prototype</a>
                    <div onClick={() => { this.xToggle() }} className="x"></div>
                </div>
                <div className="project-images">
                    <img className="project-image" alt="project" src={require('../elm-creek/elm-creek-slide-1.jpg')} />
                    <img className="project-image" alt="project" src={require('../elm-creek/elm-creek-slide-2.jpg')} />
                    <img className="project-image" alt="project" src={require('../elm-creek/elm-creek-slide-3.jpg')} />
                    <img className="project-image" alt="project" src={require('../elm-creek/elm-creek-slide-4.jpg')} />
                    <img className="project-image" alt="project" src={require('../elm-creek/elm-creek-slide-5.jpg')} />
                    <img className="project-image" alt="project" src={require('../elm-creek/brand-guidelines.jpg')} />
                </div>
            </div>
        } else return null
    }

}

export default ElmCreekModal;