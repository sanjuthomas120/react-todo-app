import React from "react";
import enhance from "../hoc/wrapInputBox";

function InputBox(props) {
    const { value, handleChange, handleKeyUp, priority, handlePriorityChange, dueDate, handleDueDateChange} = props;

    return (
        <div style={{display: "flex",gap:'10'}}>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            <select
                className="form-control"
                value={priority}
                onChange={handlePriorityChange}
            >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={handleDueDateChange}
            />
        </div>
    );
}

export default enhance(InputBox);
