import './TodoItem.css'
const TodoItem=({id,isDone,content,date,onUpdate,onDelete})=>{

    return(
        <div className='TodoItem'>
            <input onChange={()=>onUpdate(id)}
            checked={isDone} type="checkbox"/>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={()=>onDelete(id)}>삭제</button>

        </div>
    )
}

export default TodoItem;