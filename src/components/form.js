import React from "react";
import "../App.css";


const Form = (props) => {
    const { handleColorChange, handleInputChange, handleSubmit } = props;
    return ( 
        <div className="form-color">
            <div className="form-view">
                <form onSubmit={handleSubmit}>
                    <h4>Select a Color</h4>
                    <div className="form-container">
                        <hr />                    
                    </div>
                    <div style={{ padding: "5px"}}>
                        <div className="form-input">
                            <input onChange={handleInputChange} type="text" placeholder="Enter Color" name="name" />
                        </div>
                        
                        <div style= {{ padding: "10px", marginBottom: "5px"}}>
                            <input type="color" name="color" onChange={handleColorChange} />
                        </div>
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>

            </div>
        </div>
    ); 
};


export default Form;
