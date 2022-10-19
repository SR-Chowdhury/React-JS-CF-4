import React from "react";
import Bio from "./bio";
import Links from "./links";
import Skills from "./skills";
import './split-profile.style.css'

class SplitProfile extends React.Component {

    render() {
        return (
            <div className="Container">

                <h1>Hi, I am Split Profile Component [Chapter-Four: 11];</h1> <hr />

                <Bio/>
                <Skills/>
                <Links/>
            </div>
        )
    }
}

export default SplitProfile;