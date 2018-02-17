import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li>Clicky Game</li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "purple"}}>{props.correctGuesses}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;