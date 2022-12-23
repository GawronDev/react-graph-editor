import React, { useEffect, useState } from "react";

export default function ConnectDialog(props) {
    const [formData, setFormData] = useState({
        "parent": "A",
        "child": "A"
    });

    const [options, setOptions] = useState([]);

    function handleChange(event) {
        if(event.target.name == "parent"){
            const newFormData = {...formData, "parent": event.target.value};
            setFormData(newFormData);
        } else {
            const newFormData = {...formData, "child": event.target.value};
            setFormData(newFormData); 
        }
    }

    function submitFormData(){
        if(formData.parent == formData.child){
            console.log("Error, cant connect node to it self");
        } else{
            props.connectNodes(formData.parent, formData.child);
        }
    }

    useEffect(() => {
        setOptions(props.nodes.map((data) => {
            if(data.props.id != "arrow"){
                return <option value={data.props.name} data-value={data.props.name}>{data.props.name}</option>
            }
        }))
    }, [props.nodes])

    return (
        <div className="connect-dialog-wrapper">
            <div className="dialog">
                <h2>Connect nodes</h2>
                <form className="dialog-form">
                    <div className="dialog-line">
                        <label htmlFor="parent">Connect (parent)</label>
                        <select
                            id="parent"
                            onChange={handleChange}
                            name="parent"
                        >
                            {options}
                        </select>
                    </div>
                    <div className="dialog-line">
                        <label>Connect to (child)</label>
                        <select
                            id="child"
                            onChange={handleChange}
                            name="child"
                        >
                            {options}
                        </select>
                    </div>
                </form>

                <div className="dialog-button-container" onClick={props.closeDialog}>
                    <button className="close-button">
                        Close dialog window
                    </button>

                    <button className="submit-button" onClick={submitFormData}>
                        Connect nodes
                    </button>
                </div>

            </div>
        </div>
    )
}