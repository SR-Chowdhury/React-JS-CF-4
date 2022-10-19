import React from "react";

const Links = (props) => (
    <div className="Links">
        <h2>Links:</h2>
        <ul>
            <li><a href="#">{props.linkA}</a></li>
            <li><a href="#">{props.linkB}</a></li>
            <li><a href="#">{props.linkC}</a></li>
        </ul>
    </div>
)

export default Links;