const Item=({id,title,url,author,num_comments,points,onRemoveItem})=>{
  // console.log(id);
const onDelete=()=>{
  // console.log(id);
  onRemoveItem(id)
}
  return(
    <li>
        <span>
          <a href={url}>{title}</a>
        </span>
       
        <span>
         {author}
        </span>
        <span>
         {num_comments}
        </span>
        <span>
         {points}
        </span> 
        <button onClick={onDelete}>Remove</button>
</li>
  )
}
  export default Item;

