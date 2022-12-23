import React from "react";
import { Xwrapper } from "react-xarrows";
import Sidebar from "./Sidebar";

export default function Main(props) {
    return (
        <div className="main">
            <Xwrapper>
                {props.nodes}
            </Xwrapper>
        </div>
    )
}