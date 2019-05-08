import React, { Component } from 'react';

class Design extends Component {

    state = {
        toggle: false,
        nakedTravelModalToggle: false,
        aviateModalToggle: false,
        alexModalToggle: false,
        elmCreekToggle: false
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

    // NakedTravel functions
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

    showNakedTravelModal() {
        if (this.state.nakedTravelModalToggle === true) {
            return <div className="modal-content">
                <div className="modal-header">
                    <div className="project-name">NakedTravel UX Design</div>
                    <a className="prototype" href="https://projects.invisionapp.com/share/P9E50REUB#/screens" target="blank">View Prototype</a>
                    <div onClick={() => { this.nakedTravelModalToggle() }} className="x"></div>
                </div>
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

    // Aviate functions
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

    showAviateModal() {
        if (this.state.aviateModalToggle === true) {
            return <div className="modal-content">
                <div className="modal-header">
                    <div className="project-name">Aviate App + Designs</div>
                    <a className="prototype" href="https://marvelapp.com/14fg916/screen/10797059" target="blank">View Prototype</a>
                    <div onClick={() => { this.aviateModalToggle() }} className="x"></div>
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

    // Elm Creek Functions
    elmCreekModalToggle() {
        if (this.state.elmCreekToggle === false) {
            this.setState({
                elmCreekToggle: true
            })
        } else {
            this.setState({
                elmCreekToggle: false
            })
        }
    }

    showElmCreekModal() {
        if (this.state.elmCreekToggle === true) {
            return <div className="modal-content">
                <div className="modal-header">
                    <div className="project-name">Elm Creek Website + Branding</div>
                    <a className="prototype" href="https://marvelapp.com/133fji06/screen/37485606" target="blank">View Prototype</a>
                    <div onClick={() => { this.elmCreekModalToggle() }} className="x"></div>
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

    // Alex functions
    alexModalToggle() {
        if (this.state.alexModalToggle === false) {
            this.setState({
                alexModalToggle: true
            })
        } else {
            this.setState({
                alexModalToggle: false
            })
        }
    }

    showAlexModal() {
        if (this.state.alexModalToggle === true) {
            return <div className="modal-content">
                <div className="modal-header">
                    <div className="project-name">Alex City Council</div>
                    <div className="project-name">Campaign Website</div>
                    <div onClick={() => { this.alexModalToggle() }} className="x"></div>
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


    showDesignLinks() {
        if (this.state.toggle === true) {
            return (
                <div>
                    <div className="modal">{this.showNakedTravelModal()}</div>
                    <div className="modal">{this.showAviateModal()}</div>
                    <div className="modal">{this.showElmCreekModal()}</div>
                    <div className="modal">{this.showAlexModal()}</div>
                    <div className="design-projects">
                        <div onClick={() => { this.nakedTravelModalToggle() }} className="single-project">
                            <div className="design-links">NakedTravel</div>
                            <div className="naked-travel-cover-image"></div>
                        </div>
                        <div onClick={() => { this.aviateModalToggle() }} className="single-project">
                            <div className="design-links">Aviate</div>
                            <div className="aviate-cover-image"></div>
                        </div>
                        <div onClick={() => { this.elmCreekModalToggle() }} className="single-project">
                            <div className="design-links">Elm Creek</div>
                            <div className="elm-creek-cover-image"></div>
                        </div>
                        <div onClick={() => { this.alexModalToggle() }} className="single-project">
                            <div className="design-links">Alex Campaign</div>
                            <div className="alex-campaign-cover-image"></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    scrollUp() {
        window.scrollBy(0, -window.innerHeight)
    }

    render() {
        return (
            <div className="design-wrapper">
                <div className="design-inner-wrapper">
                    <div className="design">
                        <div className="design-content">
                            <div className="design-title" onClick={() => { this.toggleHandler() }} ></div>
                            <div className="design-links">{this.showDesignLinks()}</div>
                        </div>
                    </div>
                    <div onClick={this.scrollUp} className="design-arrow"></div>
                    <div className="arrow-text">scroll to top</div>
                </div>
            </div>
        );
    }
}

export default Design;