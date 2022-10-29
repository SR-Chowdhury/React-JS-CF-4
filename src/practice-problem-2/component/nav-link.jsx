import React from "react";

class NavLinks extends React.Component {

    render() {

        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{this.props.linkA}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{this.props.linkB}</a>
                </li>                
                <li className="nav-item">
                    <a className="nav-link" href="#">{this.props.linkC}</a>
                </li>                
                <li className="nav-item">
                    <a className="nav-link" href="#">{this.props.linkD}</a>
                </li>
            </ul>
        );
    }
}

export default NavLinks;