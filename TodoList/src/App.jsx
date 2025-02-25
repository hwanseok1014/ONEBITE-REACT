import './App.css'
import {useState, useRef, useReducer} from 'react';

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

import { createContext } from 'react';

const MockData=[{
  id:0,
  isDone:false,
  content:'요리하기',
  date: new Date().getTime(),
},{
  id:1,
  isDone:false,
  content:'빨래하기',
  date: new Date().getTime(),
},{
  id:2,
  isDone:false,
  content:'노래 연습하기',
  date: new Date().getTime(),
},];

const reducer = (state,action)=>{
  switch(action.type){
    case 'Create':
      return [action.data,...state];
    case 'Update':
      return state.map((todo)=>String(todo.id) === String(action.targetId)
    ? {...todo, isDone: !todo.isDone }
    :todo);
    case 'Delete':
      return state.filter((todo)=>todo.id !== action.targetId);
    default:
      return state;
  };
}

export const TodoStateContext = createContext();
export const TodoDispatchContex = createContext(); 

function App() {  
  const [todos,dispatch] =useReducer(reducer,MockData);
  const idRef = useRef(3);

  const onCreate=(content)=>{
    dispatch({
      type:'Create',
      data:{
        id:idRef.current++,
        content: content,
        date:new Date().getTime(),
      },
    });
  };

  const onUpdate=(id)=>{
    dispatch({
      type:'Update',
      targetId:id,
    });
  };

  const onDelete=(id)=>{
    dispatch({
      type:'Delete',
      targetId:id,
    });
  };

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContex value={{onCreate,onUpdate,onDelete}}>
          <Editor/>
          <List/>
        </TodoDispatchContex>
      </TodoStateContext.Provider>

    </div>
  )
}

export default App
