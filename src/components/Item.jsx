const Item=({id,name,email,gender,status,onRemoveItem})=>{
  // console.log(id);
const onDelete=()=>{
  console.log(id);
  onRemoveItem(id);
}
  return(
    <li>
      <span>
         {id}
        </span>
        <span>
          <a href={email}>{name}</a>
        </span>
       
        <span>
         {gender}
        </span>
        <span>
         {status}
        </span> 
        <button onClick={onDelete}>Remove</button>
</li>
  )
}
  export default Item;

