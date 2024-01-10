const Item=({id,name,email,gender,status,onRemoveItem})=>{
  // console.log(id);
const onDelete=()=>{
  console.log(id);
  onRemoveItem(id);
}
  return(
    <li>    
      <span>
   Id:
   </span>
  <span>
    {id}
    <br></br>
  </span>
  <span>
    Name:
  </span>
  <span>
   {name}
    <br></br>
  </span>
  <span>
    Email:
  </span>
  <span>
    <a href={email}>{email}</a>
    <br></br>
  </span>
  <span>
      Gender:

  </span>
    <span>
      {gender}
      <br></br>
    </span>
    <span>
      Status:
    </span>
    <span>
      {status}
      <br></br>
    </span> 
    <button onClick={onDelete}>Remove</button>
    <br></br>
    <br></br>
</li>
  )
}
  export default Item;

                                          