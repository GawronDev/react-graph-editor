import React, { useEffect, useState } from "react";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";
import Draggable from "react-draggable";

export default function NodeElem(props) {
    const [name, setName] = useState(props.name);
    const [parents, setParents] = useState(props.parents);
    const [children, setChildren] = useState(props.children);
    const [dragging, setDragging] = useState(false);
    const updateXarrow = useXarrow();

    function dragResponse() {
        setDragging(true);
    }

    function stopResponse() {
        if(!dragging){
            if(props.connectMode == true){
                console.log(name, props.connectMode);
                props.changeConnectMode();
            } else {
                console.log(name, props.connectMode);
                props.changeConnectMode();
            }
        }
        setDragging(false);
    }

    return (
        <Draggable onDrag={dragResponse} onStop={stopResponse}>
            <div id={props.id} className="node">
                <span className="node-label">{name}</span>
            </div>
        </Draggable>
    )
}