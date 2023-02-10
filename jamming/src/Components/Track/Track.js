import React from "react";
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) return '-';
        return '+';
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name will go here</h3>
                    <p>track artist | track album </p>
                </div>
                <button className="Track-action">{this.renderAction()}</button>
            </div>
        )
    }
}

export default Track;