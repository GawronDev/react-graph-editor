import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import NodeElem from "./components/NodeElem";
import Main from "./components/Main";
import { nanoid } from "nanoid";

// Alphabeth for node names
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nodeNum = 0;

function resetAlphabet() {
    alphabet = [];
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}

export default function App() {
    console.log("App reseted");
    const [nodes, setNodes] = useState([]);
    const [connectMode, setConnectMode] = useState(false);
    console.log("Initialized connect mode with state:", connectMode);

    function clearNodes() {
        setNodes([]);
        resetAlphabet();
    }

    function changeConnectMode() {
        connectMode = !connectMode;
    }

    function addNode() {
        setNodes((prev) => {
            if (alphabet.length > 0) {
                var name = alphabet[0];
                alphabet.shift();                
                var id = nanoid();
                return [
                    ...prev,
                    <NodeElem name={name} key={id} id={id} parents={[]} children={[]} changeConnectMode={changeConnectMode} connectMode={connectMode}/>
                ]
            } else {
                nodeNum++;
                var id = nanoid();
                return [
                    ...prev,
                    <NodeElem name={nodeNum} key={id} id={id} parents={[]} children={[]} changeConnectMode={changeConnectMode} connectMode={connectMode}/>
                ]
            }
        });
    }


    return (
        <div className="general-wrapper">
            <Main nodes={nodes}/>
        </div>
    );
}