import { useState } from "react";

const Search=(props)=>{
  //let searchTerm='';
  // const [searchTerm,setSearchTerm] =useState('');

  const handelChange=(event)=>{
    // console.log(event.target.value);
    // setSearchTerm(event.target.value);
    props.onSearch(event);
    //searchTerm=event.target.value;
  }
  
  return(
    <div>
      <label htmlFor="search">search</label>
      <input type="text"  onChange={handelChange} id="search" value={props.Search}></input>
      {/* <p>
        searching for <strong>{searchTerm}</strong>
      </p> */}
    </div>
  )
}
  export default Search;