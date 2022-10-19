import React from "react";
import ModifyProps from ".";
import Bio from "./bio";
import Links from "./links";
import Skills from "./skills";


class App extends React.Component {
    obj = {
        skillA: 'Python',
        skillB: 'Android',
        skillC: 'React',
        linkA: 'Facebook',
        linkB: 'Twitter',
        linkC: 'Youtube'
    };
    render () {
        return (
            <div className="Container">
                <ModifyProps/>
                <hr />
                <Bio name='Tanjima' title='Lecturer'/>
                <Skills skillA={this.obj.skillA} skillB={this.obj.skillB} skillC={this.obj.skillC}/>
                <Links linkA={this.obj.linkA} linkB={this.obj.linkB} linkC={this.obj.linkC}/>
            </div>
        )
    }
}

export default App;