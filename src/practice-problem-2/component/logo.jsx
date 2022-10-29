import React from "react";

const Logo = (props) => {
    return (
        <div>
            <a className="navbar-brand" href="#">{props.name}</a>
        </div>
    );
}

export default Logo;