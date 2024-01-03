import { useEffect, useRef, useState } from "react";
const InputWhitLable=({id,label,Value,onInputChange,type='text',isFocused})=>{
  //let searchTerm='';
  // const [searchTerm,setSearchTerm] =useState('');

  const handelChange=(event)=>{
    // console.log(event.target.value);
    // setSearchTerm(event.target.value);
    // props.onSearch(event);
    onInputChange(event);
    //searchTerm=event.target.value;
  }
  const inputRef=useRef();
  useEffect(()=>{
    if(isFocused && inputRef.current){
      inputRef.current.focus()
    }
  },[isFocused]);

  return(
    <>
      <label htmlFor={id}>{label}</label>
      <input 
      onChange={handelChange}
      type={type}
      id={id}
      value={Value}
      // autoFocus={isFocused}
      ref={inputRef}
      />
    </>
  )
}
  export default InputWhitLable;