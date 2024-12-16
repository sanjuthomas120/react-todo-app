import React from 'react';

export default function Sorting({ sortTasks }) {
    return (
        <div style={{margin: '10px auto'}}>
            <select onChange={(e) => sortTasks(e.target.value)} defaultValue="">
                <option value="">Sort by</option>
                <option value="dateAsc">Due Date (Asc)</option>
                <option value="dateDesc">Due Date (Desc)</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    );
}