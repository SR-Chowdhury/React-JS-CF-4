import React from "react";
import Myprops from ".";
import './props.style.css';

class App extends React.Component {

    render() {
        return (
            <div className="Container">
                <h1>What is Props in React? [Chapter-Four: 13];</h1> <hr />
                <h1>Definition</h1>
                <ul>
                    <li>In functional component every time you need to take props or property as parameter</li>
                    <li>But in class based component you don't need to take props cause it take props and can access from anywhere within the block.</li>
                    <Myprops name='Ronaldo'/> 
                    <Myprops name='Reuse'/>
                </ul>
            </div>
        );
    }
}

export default App;