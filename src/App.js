import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function App(){
    const [nodes, setNodes] = useState([]);

    function addNode(){
        
    }

    return (
        <div className="general-wrapper">
            <Sidebar new_node={addNode()} />
            <Main nodes={nodes} />
        </div>
    );
}