import React from "react";
import { BsNodePlus, BsFillPlayFill, BsArrowLeft, BsArrowRight } from "react-icons/bs";
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
                    <h2 className="sidebar-title">Topological sorting</h2>
                    <h4 className="sidebar-header">Tools</h4>
                    <span className="sidebar-item" onClick={props.new_node}><BsNodePlus className="react-icon" />Add new node</span>
                    <span className="sidebar-item"><BsFillPlayFill className="react-icon" />Start algorithm</span>
                    <span className="sidebar-item"><MdOutlineRemoveCircleOutline className="react-icon"/>Remove node</span>
                    <span className="sidebar-item"><MdRestartAlt className="react-icon" />Reset canvas</span>
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
                    <h2 className="sidebar-title-closed">TS</h2>
                    <span className="sidebar-item-closed" onClick={props.new_node}><BsNodePlus className="react-icon" /></span>
                    <span className="sidebar-item-closed"><BsFillPlayFill className="react-icon" /></span>
                    <span className="sidebar-item-closed"><MdOutlineRemoveCircleOutline className="react-icon"/></span>
                    <span className="sidebar-item-closed"><MdRestartAlt className="react-icon" /></span>
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