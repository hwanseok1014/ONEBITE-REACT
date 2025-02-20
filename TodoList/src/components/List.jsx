import { useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';

const List = ({todos})=>{
    const [search, setSearch]=useState('');
    
    const handleChange= (e)=>{
        setSearch(e.target.value);
    };

    const getFilterData = () =>{
        if(search === ""){
            return todos;
        }
        return todos.filter((todo)=>
            todo.content.toLowerCase()
            .includes(search.toLocaleLowerCase())//includes는 대문자 소문자 구별
        );
    };

    const filterTodos =getFilterData(); // 데이터가 커지면 useEffect 사용

    return(
        <div className='List'>
            <h3>Todo List🌱</h3>
            <input search={search} onChange={handleChange} placeholder='검색어를 입력하세요...'/>
            <div className='todos_wrapper'>
              {filterTodos.map((todo)=>{
                return <TodoItem key={todo.id} 
                {...todo} />
              })}
            </div>
        </div>
    )
};

export default List;