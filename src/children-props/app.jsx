import React from "react";
import ParentComponent from ".";
import './children-props.style.css';

class App extends React.Component {

    render() {

        return(
            <div className="Container">
                <ParentComponent/>
            </div>
        );
    }
}

export default App;