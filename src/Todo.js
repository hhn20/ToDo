import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Todo({ todo , toggletodos}) {
    
    function handleclick(){
        toggletodos(todo.id)
    }
    return (
        <div>
            <label>
                <Checkbox color='primary' checked={todo.complete} onChange={handleclick} />
                {todo.name}
            </label>
        </div>
    )
}
