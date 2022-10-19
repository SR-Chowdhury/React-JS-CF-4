import React from 'react';

const FunctionalComponent = () => {
    return (
        <h1>Hi, I am functional Component</h1>
    );
}

class Intro extends React.Component {
 render() {

    const obj = {
        title: 'Alhamdulillah',
        id: 'NewID'
    };

    const note = 'We can use JS code any where within one scope';

    const note2 = (
        <div>
            <p>Even we can store value / statement as variable</p>
            <span>Horrah! we made it.</span> <hr />
            {note}
        </div>
    );

    return (
        <div>
            <h1>Bismillahir Rahmanir Rahim</h1>
            <h2 {...obj} >We done</h2>
            <FunctionalComponent/>
            <h3>{ new Date().toISOString() }</h3>
            <h4>Look, {note}</h4>
            <br />
            {note2}
        </div>
    );
 }   
}

export default Intro;

/**
 * Chapter Four: 3
 * A Component has two layers:
 * One: data / logic layer (Optional) -> Has State, variable / properties, Functions / methods, Life cycle methods
 * Two: Representation Layer (Required) -> JSX; must have render() method
 */

/**
 * Chapter Four: 4
 * Two ways to create component in React
 * First: Class based / Stateful / Smart component
 * Second: Functional / Stateless / Dumb component -> No state, Life cycle methods etc
 */

/**
 * Chapter Four: 5
 * Functional Component
 * It is easy to create; For only UI generate it is used and it is only return JSX
 */