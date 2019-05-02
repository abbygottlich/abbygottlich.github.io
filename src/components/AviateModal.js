import React, { Component } from 'react';

class AviateModal extends Component {

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
                    <div className="project-name">Aviate App + Designs</div>
                    <a className="prototype" href="https://marvelapp.com/14fg916/screen/10797059" target="blank">View Prototype</a>
                    <div onClick={() => { this.xToggle() }} className="x"></div>
                </div>
                <div className="project-images">
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-1.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-2.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-3.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-4.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-5.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-6.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-7.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-8.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-9.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-10.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-11.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-12.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/aviate-slide-13.jpg')} />
                    <img className="project-image" alt="project" src={require('../aviate/brand-guidelines.jpg')} />
                </div>
            </div>
        } else return null
    }

}

export default AviateModal;