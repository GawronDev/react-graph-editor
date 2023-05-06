import React from "react";
import { BsNodePlus, BsFillPlayFill, BsArrowLeft, BsArrowRight, BsFillDiagram2Fill } from "react-icons/bs";
import {MdOutlineRemoveCircleOutline} from "react-icons/md";
import { MdRestartAlt } from "react-icons/md";
import Profile from "../images/profile.png"

export default function Sidebar(props) {
    const [isOpened, setIsOpened] = React.useState(false);

    function toggleSidebar() {
        setIsOpened(isOpened => !isOpened);
    }

    if (isOpened) {
        return (
            <div className="sidebar-wrapper-opend">
                <div className="sidebar">
                    <h2 className="sidebar-title">Graph Editor</h2>
                    <h4 className="sidebar-header">Tools</h4>
                    <span className="sidebar-item" onClick={props.new_node}><BsNodePlus className="react-icon" />Add new node</span>
                    <span className="sidebar-item" onClick={props.topsort}><BsFillPlayFill className="react-icon" />Start algorithm</span>
                    <span className="sidebar-item" onClick={props.openConnectDialog}><BsFillDiagram2Fill className="react-icon" />Connect nodes</span>
                    <span className="sidebar-item" onClick={props.clear_nodes}><MdRestartAlt className="react-icon" />Reset canvas</span>
                    <div className="sidebar-credits">
                        <div className="sidebar-credits-img-container">
                            <img src={Profile} className="sidebar-credits-img" alt=""/>
                        </div>
                        <div className="sidebar-credits-info">
                            <span className="sidebar-credits-name">Jakub Gawroński</span>
                            <span className="sidebar-credits-email">kubusgawron@gmail.com</span>
                        </div>
                    </div>
                </div>
                <button className="hide-menu" onClick={toggleSidebar}>
                    <BsArrowLeft className="hide-icon" />
                </button>
            </div>
        )
    } else {
        return (
            <div className="sidebar-wrapper-closed">
                <div className="sidebar-closed">
                    <h2 className="sidebar-title-closed">GE</h2>
                    <span className="sidebar-item-closed" onClick={props.new_node}><BsNodePlus className="react-icon" /></span>
                    <span className="sidebar-item-closed" onClick={props.topsort}><BsFillPlayFill className="react-icon" /></span>
                    <span className="sidebar-item-closed" onClick={props.openConnectDialog}><BsFillDiagram2Fill className="react-icon" /></span>
                    <span className="sidebar-item-closed" onClick={props.clear_nodes}><MdRestartAlt className="react-icon" /></span>
                    <div className="sidebar-credits-closed">
                        <div className="sidebar-credits-img-container-closed">
                            <img src={Profile} className="sidebar-credits-img" alt=""/>
                        </div>
                    </div>
                </div>
                <button className="open-menu" onClick={toggleSidebar}>
                    <BsArrowRight className="open-icon" />
                </button>
            </div>
        )
    }
}