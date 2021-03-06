import React from 'react'
import Todo from './Todo'
import 'tachyons'
export default function Todolist({ todos , toggletodos}) {
    return (
        todos.map(todo => {
            return <Todo toggletodos={toggletodos} key={todo.id} todo={todo} />
        })
        
    )
}
