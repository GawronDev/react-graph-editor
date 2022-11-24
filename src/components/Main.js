import React, { useEffect, useState } from "react";
import NodeElem from "./NodeElem";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

export default function Main(props) {
    const [nodes, setNodes] = useState();

    useEffect(()=>{
        setNodes(props.nodes);
    },[props.nodes])


    return (
        <div className="main">
            <Xwrapper>
                {nodes}
                {/* <NodeElem id={"A"} name="A" />
                <NodeElem id={"B"} name="B" />
                <NodeElem id={"C"} name="C" />
                <Xarrow color="black" headSize={4} start={"A"} end={"B"} />
                <Xarrow color="black" headSize={4} start={"C"} end={"B"} /> */}
            </Xwrapper>
        </div>
    )
}