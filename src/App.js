import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ConnectDialog from "./components/ConnectDialog";
import NodeElem from "./components/NodeElem";
import Main from "./components/Main";
import { nanoid } from "nanoid";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";

// Alphabeth for node names
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nodeNum = 0;

function resetAlphabet() {
    alphabet = [];
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}

export default function App() {
    console.log("App reseted");
    const [openDialog, setOpenDialog] = useState(false);
    const [relations, setRelations] = useState([]);
    const [nodes, setNodes] = useState([]);

    function clearNodes() {
        setNodes([]);
        resetAlphabet();
    }

    function openConnectDialog() {
        setOpenDialog(prev => !prev);
    }

    function connectNodes(parent, child) {
        console.log(getNode(parent), getNode(child));
        setNodes((prev) => {
            return [
                ...prev,
                <Xarrow id="arrow" start={parent} end={child} color={"black"} headSize={3}/>
            ]
        })
    }

    function getNode(node_name) {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].props.name == node_name) {
                return nodes[i];
            }
        }
    }

    function addNode() {
        setNodes((prev) => {
            if (alphabet.length > 0) {
                var name = alphabet[0];
                alphabet.shift();
                var id = nanoid();
                return [
                    ...prev,
                    <NodeElem name={name} key={id} id={name} parents={[]} children={[]} connected={false} />
                ]
            } else {
                nodeNum++;
                var id = nanoid();
                return [
                    ...prev,
                    <NodeElem name={nodeNum} key={id} id={name} parents={[]} children={[]} connected={false}/>
                ]
            }
        });
    }


    return (
        <div className="general-wrapper">
            {openDialog ? <ConnectDialog closeDialog={openConnectDialog} connectNodes={connectNodes} nodes={nodes} updateNodes={setNodes} /> : ""}
            <Sidebar clear_nodes={clearNodes} new_node={addNode} openConnectDialog={openConnectDialog} />
            <Main nodes={nodes} clearNodes={clearNodes} addNode={addNode} />
        </div>
    );
}