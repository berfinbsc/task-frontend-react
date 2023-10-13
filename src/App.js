import './App.css';
import TodoInput from './TodoInput';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import uuid from 'uuid';

import TodoList from './TodoList';
function App() {



  const [item,setItem] =useState("");
  const [items,setItems] =useState([]);

const handleChange=(e)=>{
  setItem(e.target.value)
}

const handleSubmit=(e)=>{

  e.preventDefault();
  const newitem=item
const updateItems=[...items,newitem];
setItems(updateItems);

}


  return (
    <div className="container">
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
     <h3 className='text-capitalize text-center'> To Do Input</h3>
        <TodoInput
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />

        
<TodoList
items={items}
/>
        </div>
  
      </div>
  
    </div> 
  );
}

export default App;
