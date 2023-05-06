import React from "react";
import { Xwrapper } from "react-xarrows";

export default function Main(props) {
    return (
        <div className="main">
            <Xwrapper>
                {props.nodes}
            </Xwrapper>
        </div>
    )
}