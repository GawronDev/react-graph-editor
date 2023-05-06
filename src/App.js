import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ConnectDialog from "./components/ConnectDialog";
import NodeElem from "./components/NodeElem";
import Main from "./components/Main";
import { nanoid } from "nanoid";
import Xarrow from "react-xarrows";

// Alphabeth for node names
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nodeNum = 0;

function resetAlphabet() {
    alphabet = [];
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}

// Relations - a graph stored as adjency list
var relations = {};

// Keydown bool to prevent holding keys
var key_pressed = false;


export default function App() {
    console.log("App rerendered");
    const [displayResult, setDisplayResult] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [sorted, setSorted] = useState([]);

    // Clear the graph
    function clearNodes() {
        relations = [];
        setNodes([]);
        setSorted([]);
        setDisplayResult(false);
        resetAlphabet();
    }

    // Open the dialog window for connecting nodes
    function openConnectDialog() {
        setOpenDialog(prev => !prev);
    }

    // Connect nodes function
    function connectNodes(parent, child) {
        for (var key in relations) {
            console.log(key);
            if (key === parent) {
                console.log("1");

                if (relations[key].includes(child)) {
                    // If the node is already connected, do not duplicate
                    console.log("Tried to duplicate a connection");
                } else {
                    // Connect two nodes but dont overwrite previous connections
                    var current_connections = relations[parent];
                    current_connections.push(child);
                    relations[parent] = current_connections;
                    console.log(relations);
                    // Return the new connection as an arrow object
                    setNodes((prev) => {
                        return [
                            ...prev,
                            <Xarrow id="arrow" start={parent} end={child} color={"black"} headSize={3} curveness={0.8} animateDrawing={true} />
                        ];
                    })
                }
            }
        }
    }

    /*

    BUG: OpenDialog appers to be true even if it is false

    */

    useEffect(()=>{
        console.log("OpenDialog status", openDialog);
    }, [openDialog])

    // Listen for key presses to perform certain actions
    document.addEventListener("keydown", (event) => {
        if (event.isComposing || event.keyCode === 229) {
          return;
        }
        if(openDialog && event.keyCode === 27 && !key_pressed){
            key_pressed = true;
            console.log("Closing dialog");
            setOpenDialog(false);
            return;
        } 
      });
    
    document.addEventListener("keyup", (e)=>{
        key_pressed = false;
    })    

    // Add new node
    function addNode() {
        setNodes((prev) => {
            var id = nanoid();
            if (alphabet.length > 0) {
                var name = alphabet[0];
                alphabet.shift();
                relations[name] = [];
                return [
                    ...prev,
                    <NodeElem name={name} key={id} id={name}/>
                ]
            } else {
                nodeNum++;
                relations[nodeNum] = [];
                return [
                    ...prev,
                    <NodeElem name={nodeNum} key={id} id={name} />
                ]
            }
        });
    }

    function topsort() {
        setSorted([]);
        var edges = []; // Create edges array
        for(var key in relations){
            for(let i = 0; i < relations[key].length; i++){
                edges.push([key, relations[key][i]]);
            }
        }

        var nodes = {}, // hash: stringified id of the node => { id: id, afters: lisf of ids }
            sorted = [], // sorted list of IDs ( returned value )
            visited = {}; // hash: id of already visited node => true

        var Node = function (id) {
            this.id = id;
            this.afters = [];
        }

        // 1. build data structures
        edges.forEach(function (v) {
            var from = v[0], to = v[1];
            if (!nodes[from]) nodes[from] = new Node(from);
            if (!nodes[to]) nodes[to] = new Node(to);
            nodes[from].afters.push(to);
        });

        // 2. topological sort
        Object.keys(nodes).forEach(function visit(idstr, ancestors) {
            var node = nodes[idstr],
                id = node.id;

            // if already exists, do nothing
            if (visited[idstr]) return;

            if (!Array.isArray(ancestors)) ancestors = [];

            ancestors.push(id);

            visited[idstr] = true;

            node.afters.forEach(function (afterID) {
                if (ancestors.indexOf(afterID) >= 0)  // if already in ancestors, a closed chain exists.
                    throw new Error('closed chain : ' + afterID + ' is in ' + id);

                visit(afterID.toString(), ancestors.map(function (v) { return v })); // recursive call
            });

            sorted.unshift(id);
        });

        setSorted(sorted.map((prev)=> {
            return <div>{prev}</div>
        }))

        if(sorted.length > 0){
            setDisplayResult(true);
        } else {
            window.alert("Sorting failed");
        }
    }



    return (
        <div className="general-wrapper">
            {openDialog ? <ConnectDialog closeDialog={openConnectDialog} connectNodes={connectNodes} nodes={nodes} updateNodes={setNodes} /> : ''}
            <Sidebar clear_nodes={clearNodes} new_node={addNode} openConnectDialog={openConnectDialog} topsort={topsort} />
            <Main nodes={nodes} clearNodes={clearNodes} addNode={addNode} />
            {displayResult ?  <div className="result">
                <h2>Topological sort results:</h2>
                {sorted}
            </div> : ""}
        </div>
    );
}