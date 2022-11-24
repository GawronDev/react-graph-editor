import React, { useState } from "react";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";
import Draggable from "react-draggable";

export default function NodeElem(props) {
    const [name, setName] = useState(props.name);
    // const [parents, setParents] = useState(props.parents);
    // const [children, setChildren] = useState(props.children);
    const updateXarrow = useXarrow();

    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={props.id} className="node">
                <span className="node-label">{name}</span>
            </div>
        </Draggable>
    )
}