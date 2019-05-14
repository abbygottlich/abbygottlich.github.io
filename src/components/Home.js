import React, { Component } from 'react';
import Development from "./Development";
import Design from "./Design";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="main">
                    {this.props.headerFooterState === false ? <Development /> : null}
                    <Design hideHeaderFooter={this.props.hideHeaderFooter} />
                    {/* <div className="home-under-construction">
                        <div class="under-construction">Home Page currently under construction</div>
                        <div class="project-link">In the meantime, please view my most recent development project, <a href="https://abbygottlich.dev/feast-finder-app/" className="feast-finder-link" target="blank">Feast Finder</a></div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Home;