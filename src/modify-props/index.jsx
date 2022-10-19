import React from "react";
import Bio from "./bio";
import Links from "./links";
import Skills from "./skills";
import './modify-props.style.css'

class ModifyProps extends React.Component {

    render() {
        return (
            <div>
                <h1>Modify Props [Chapter-Four: 14];</h1> <hr />
                <Bio name='Shihan' title='Fullstack Developer'/>
                <Skills skillA='Java' skillB='JS' skillC='Angular'/>
                <Links linkA='Linkedin' linkB='Instagram' linkC='Facebook'/>
            </div>
        )
    }
}

export default ModifyProps;