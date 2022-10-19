import React from "react";
import ParentClass from ".";
import './pass-function.style.css'

class App extends React.Component{
    render() {
        return (
            <div className="Container">
                <ParentClass/>
            </div>
        );
    }
}

export default App;