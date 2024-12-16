import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    console.log("ToDO Details ",data);
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    const renderPriority = (priority) => {
        switch(priority) {
            case 'high':
                return <span>High</span>;
            case 'medium':
                return <span>Medium</span>;
            case 'low':
                return <span>Low</span>;
            default:
                return null;
        }
    };

    return (
        <li className={className}>
        <div className="checkbox">
            <label style={{ display: 'flex', justifyContent: 'space-between', }}>
                <CheckBox checked={data.completed} onChange={handleChange} />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <p>{data.text}</p>
                    <p style={{paddingRight: '20px'}}>{renderPriority(data.priority)}</p>
                    <p>{data.dueDate ? `Due: ${data.dueDate}` : ''}</p>
                </div>
            </label>
        </div>
    </li>
    
    );
}
