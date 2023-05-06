import React, { useEffect, useState } from "react";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";
import Draggable from "react-draggable";

export default function NodeElem(props) {
    const [name, setName] = useState(props.name);
    const [dragging, setDragging] = useState(false);
    const updateXarrow = useXarrow();

    function dragResponse() {
        updateXarrow();
        setDragging(true);
    }

    function stopResponse() {
        updateXarrow();
        if(!dragging){

        }
        setDragging(false);
    }

    return (
        <Draggable onDrag={dragResponse} onStop={stopResponse} grid={[25, 25]} bounds="parent">
            <div id={props.id} className="node">
                <span className="node-label">{name}</span>
            </div>
        </Draggable>
    )
}