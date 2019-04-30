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