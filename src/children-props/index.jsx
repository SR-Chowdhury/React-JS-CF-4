import React from "react";

class ParentComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>Render Child Component [Chapter-Four: 16];</h1> <hr />
                <ChildComponent>
                    <h3>Horra! we add lines.</h3>
                </ChildComponent>
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>I am Child Component; Now i can add more line from parent Component, here we go...</h3>
                {this.props.children}
                <code>Got it?</code>
            </div>
        );
    }
}

export default ParentComponent;