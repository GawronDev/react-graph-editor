import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import NodeElem from "./components/NodeElem";

export default function App(){
    const [nodes, setNodes] = useState([]);

    function addNode(){
        console.log("Added new node")
        
        setNodes();
    }

    return (
        <div className="general-wrapper">
            <Sidebar new_node={addNode} />
            <Main nodes={nodes} />
        </div>
    );
}