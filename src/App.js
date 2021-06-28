import React,{ useState,useRef,useEffect } from 'react';
import Todolist from './Todolist';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import 'tachyons'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const LOCAL_STORAGE_KEY='revision.todos'

function App() {
  const [todos,setTodos]=useState([])
  const TodoRef=useRef()
  useEffect(() => {
    const savedtodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedtodos)
    {
      setTodos(savedtodos)
    }
  },[])

  function toggletodos(id){
    const alltodos=[...todos];
    const chtodo=alltodos.find(chtodo => chtodo.id===id);
    chtodo.complete=!chtodo.complete;
    setTodos(alltodos);
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function removecompleted(){
    const tokeep=todos.filter(todo => !todo.complete);
    setTodos(tokeep)
  }
  function handleTodo(e){
    const name=TodoRef.current.value
    if (name===''){return}
    setTodos(prev => {
      return ([...prev,{id:uuidv4(), name:name,  complete:false}])
    })
    TodoRef.current.value=null

  }
  return  (
    <div id="total" className='tc center dtc v-mid tc white ph3 ph4-l'>
      <h1>TODO LIST</h1>
        <TextField
          id="outlined-basic" 
          inputRef	= {TodoRef}
          label="Enter task"
          defaultValue=""
          variant="outlined"
        />
      <p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button onClick={handleTodo}>
        Add
      </Button>
      <Button onClick={removecompleted}>
        Delete
      </Button>
      </ButtonGroup>
      </p>
      <h4>{todos.filter(todo => !todo.complete).length} tasks to complete</h4>
      <Todolist toggletodos={toggletodos} todos={todos}/>

    </div>
  );
}

export default App;
