import React, { Component } from 'react';

class AlexModal extends Component {

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
                    <div className="project-name">Alex Campaign Website</div>
                    <div onClick={() => { this.xToggle() }} className="x"></div>
                </div>
                <div className="project-images">
                    <img className="project-image" alt="project" src={require('../alex-campaign/alex-slide-1.jpg')} />
                    <img className="project-image" alt="project" src={require('../alex-campaign/alex-slide-2.jpg')} />
                    <img className="project-image" alt="project" src={require('../alex-campaign/alex-slide-3.jpg')} />
                    <img className="project-image" alt="project" src={require('../alex-campaign/alex-slide-4.jpg')} />
                    <img className="project-image" alt="project" src={require('../alex-campaign/alex-slide-5.jpg')} />
                    <img className="project-image" alt="project" src={require('../alex-campaign/alex-slide-6.jpg')} />
                </div>
            </div>
        } else return null
    }

}

export default AlexModal;