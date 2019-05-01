import React, { Component } from 'react';

class NakedTravelModal extends Component {

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
                <div onClick={() => { this.xToggle() }} className="x"></div>
                <div className="project-name">NakedTravel UX Design</div>
                <div className="project-images">
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-1.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-2.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-3.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-3.5.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-4.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-5.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-6.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-7.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-8.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-9.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-10.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-11.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-12.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-13.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-14.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-15.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-16.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-17.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-18.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-19.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-20.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-21.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-22.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-23.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-24.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-25.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-26.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-28.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-29.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-30.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-31.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/slide-32.jpg')} />
                    <img className="project-image" alt="project" src={require('../naked-travel/brand-identity.jpg')} />
                </div>
            </div>
        } else return null
    }

}

export default NakedTravelModal;