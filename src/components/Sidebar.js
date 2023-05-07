import React from "react";
import { BsNodePlus, BsFillPlayFill, BsArrowLeft, BsArrowRight, BsFillDiagram2Fill } from "react-icons/bs";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { MdRestartAlt } from "react-icons/md";

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
                    <div className="tools">
                        <span className="sidebar-item" onClick={props.new_node}><BsNodePlus className="react-icon" />Add new node <span className="keycomb">Ctrl + N</span></span>
                        <span className="sidebar-item" onClick={props.topsort}><BsFillPlayFill className="react-icon" />Topological sort<span className="keycomb">Ctrl + T</span></span>
                        <span className="sidebar-item" onClick={props.openConnectDialog}><BsFillDiagram2Fill className="react-icon" />Connect nodes <span className="keycomb">Ctrl + C</span></span>
                        <span className="sidebar-item" onClick={props.clear_nodes}><MdRestartAlt className="react-icon" />Reset canvas <span className="keycomb">Ctrl + R</span></span>
                    </div>
                    <h4 className="sidebar-header">Saved graphs</h4>
                    <div className="saved">
                        <span className="sidebar-item">Graph 1</span>
                        <span className="sidebar-item">Graph 1</span>
                        <span className="sidebar-item">Graph 1</span>
                        <span className="sidebar-item">Graph 1</span>
                        <span className="sidebar-item">Graph 1</span>
                    </div>

                    <div className="sidebar-credits">
                        <div className="sidebar-credits-img-container">
                            <img src={props.profile_picture} className="sidebar-credits-img" alt="" />
                        </div>
                        <div className="sidebar-credits-info">
                            <span className="sidebar-credits-name">{props.name}</span>
                            <span className="sidebar-credits-email">{props.email}</span>
                            <button onClick={props.logout}>Logout</button>
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
                            <img src={props.profile_picture} className="sidebar-credits-img" alt="" />
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
