import React, { Component } from 'react';
import NakedTravelModal from "./NakedTravelModal";
import AviateModal from "./AviateModal";

class Design extends Component {

    state = {
        toggle: false,
        nakedTravelModalToggle: false,
        aviateModalToggle: false
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

    nakedTravelModalToggle() {
        if (this.state.nakedTravelModalToggle === false) {
            this.setState({
                nakedTravelModalToggle: true
            })
        } else {
            this.setState({
                nakedTravelModalToggle: false
            })
        }
    }

    aviateModalToggle() {
        if (this.state.aviateModalToggle === false) {
            this.setState({
                aviateModalToggle: true
            })
        } else {
            this.setState({
                aviateModalToggle: false
            })
        }
    }

    showNakedTravelModal() {
        if (this.state.nakedTravelModalToggle === true) {
            return <NakedTravelModal />
        } else return null
    }

    showAviateModal() {
        if (this.state.aviateModalToggle === true) {
            return <AviateModal />
        } else return null
    }

    showDesignLinks() {
        if (this.state.toggle === true) {
            return (
                <div>
                    <div className="modal">{this.showNakedTravelModal()}</div>
                    <div className="modal">{this.showAviateModal()}</div>
                    <div className="design-projects">
                        <div onClick={() => { this.nakedTravelModalToggle() }} className="single-project">
                            <div className="design-links">NakedTravel</div>
                            <div className="naked-travel-cover-image"></div>
                        </div>
                        <div onClick={() => { this.aviateModalToggle() }} className="single-project">
                            <div className="design-links">Aviate</div>
                            <div className="aviate-cover-image"></div>
                        </div>
                        <div className="single-project">
                            <div className="design-links">Alex Campaign</div>
                            <div className="alex-campaign-cover-image"></div>
                        </div>
                        <div className="single-project">
                            <div className="design-links">Elm Creek</div>
                            <div className="elm-creek-cover-image"></div>
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