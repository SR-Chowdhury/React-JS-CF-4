import React from "react";

class ParentClass extends React.Component {

    parentFunc() {
        console.log('I am parent function; NB: Only function can pass from Parent to Child. [One way]');
    }

    render() {
        return (
            <div>
                <h1>Pass Function using Props [Chapter-Four: 15];</h1> <hr />
                <ChildClass func={this.parentFunc}/>
            </div>
        );
    }
}

class ChildClass extends React.Component {
    render() {
        return (
            <div>
                <h1>I am Child Component</h1>
                <p>NB: Only function can pass from Parent to Child. [One way]</p>
                {this.props.func()}
            </div>
        );
    }
}

export default ParentClass;