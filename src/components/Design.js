import React, { Component } from 'react';

class Design extends Component {

    state = {
        toggle: false,
        modalToggle: false
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

    modalToggle() {
        if (this.state.modalToggle === false) {
            this.setState({
                modalToggle: true
            })
        } else {
            this.setState({
                modalToggle: false
            })
        }
    }

    showProjectModal() {
        if (this.state.modalToggle === true) {
            return <div className="modal-content">
                <div onClick={() => { this.modalToggle() }} className="x"></div>
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

    showDesignLinks() {
        if (this.state.toggle === true) {
            return (
                <div>
                    <div className="modal">{this.showProjectModal()}</div>
                    <div className="design-projects">
                        <div onClick={() => { this.modalToggle() }} className="single-project">
                            <div className="design-links">NakedTravel</div>
                            <div className="cover-image"></div>
                        </div>
                        <div className="single-project">
                            <div className="design-links">NakedTravel</div>
                            <div className="cover-image"></div>
                        </div>
                        <div className="single-project">
                            <div className="design-links">NakedTravel</div>
                            <div className="cover-image"></div>
                        </div>
                        <div className="single-project">
                            <div className="design-links">NakedTravel</div>
                            <div className="cover-image"></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="design">
                <div className="design-content">
                    <div className="design-title" onClick={() => { this.toggleHandler() }} ></div>
                    <div className="design-links">{this.showDesignLinks()}</div>
                </div>
            </div>
        );
    }
}

export default Design;