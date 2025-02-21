import './Editor.css'

import { useState,useRef } from 'react';

const Editor = ({onCreate})=>{
const [content, setcontent] =useState('');
const contentRef =useRef(); //✅ 입력 포커스 제어할 때 사용 기억하기
    
  const handleChange=(e)=>{
    setcontent(e.target.value);
  };

  const onKeydown =(e) =>{
    if(e.keyCode === 13){
        onSubmit();
    }
  }

  const onSubmit=()=>{
    if(content ===''){
      contentRef.current.focus();// 🔥input 요소에 직접 접근하여 focus 호출
      return;
    }
    onCreate(content);
    setcontent('');
  }

    return(
        <div className="Editor">
            <input 
              ref = {contentRef}
              value={content} 
              onKeyDown={onKeydown} 
              onChange={handleChange}
              placeholder="새로운Todo..." 
            />
            <button onClick={()=>onSubmit()} >추가</button>
        </div>
    )
};

export default Editor;