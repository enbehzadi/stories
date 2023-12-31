const Search=()=>{
  const handelChange=(event)=>{
    console.log(event.target.value);
  }
  return(
    <div>
      <label htmlFor="search">search</label>
      <input type="text"  onChange={handelChange} id="search"></input>
    </div>
  )
}
  export default Search;