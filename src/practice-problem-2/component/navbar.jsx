import React from "react";
import Logo from "./logo";
import SearchBox from "./search-box";
import NavLinks from "./nav-link";

class Navbar extends React.Component {
    obj = {
        branName: 'First Nav',
        linkA: 'Home',
        linkB: 'About',
        linkC: 'Contact',
        linkD: 'Login',
    };

    render() {
        return (
            <div className="nav-bar-div">
                <nav className="navbar navbar-expand-lg p-3 navbar-light bg-light">
                    <Logo name={this.obj.branName}/>
                    <div className="collapse navbar-collapse">
                        <NavLinks linkA={this.obj.linkA} linkB={this.obj.linkB} linkC={this.obj.linkC} linkD={this.obj.linkD} />
                        <SearchBox />
                    </div>
                </nav>               
            </div>
        );
    }
}

export default Navbar;