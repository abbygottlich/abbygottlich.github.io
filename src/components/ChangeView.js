import React from 'react';

class ChangeView extends React.Component {
    state = {
        displayedState: 0
    }

    displayOtherState = (otherState) => {
        this.setState(() => {
            return { displayedState: otherState }
        })
    }

    render() {
        let content = []
        if (this.state.displayedState == 0) {
            content = <div>Hello</div>
        } else if (this.state.displayedState == 1) {
            content = <div>Goodbye</div>
        }
    }
    return<Layout displayOtherState = { this.displayOtherState }
    >
</Layout >
    }

export default ChangeView;