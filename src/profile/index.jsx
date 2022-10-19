import React from "react";
import './profile.style.css';

class Profile extends React.Component {

    render() {
        return (
            <div className="Container">
                <h1>Hi, I am profile Component [Chapter-Four: 10];</h1> <hr />
                
                <div className="Bio">
                    <h1>Shihanur Rahman Chowdhury</h1>
                    <p>Fullstack Web developer</p>
                </div>

                <div className="Skills">
                    <h2>Skills:</h2>
                    <ul>
                        <li>React JS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>

                <div className="Links">
                    <h2>Links:</h2>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile;