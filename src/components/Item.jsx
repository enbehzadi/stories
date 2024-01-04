const Item=({id,title,url,author,num_comments,points,onRemoveItem})=>{

  const handleRemoveItem=()=>{
    onRemoveItem(id)
  }
  return(
    <li >
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
        <button onClick={handleRemoveItem}>Remove</button>
</li>
  )
}
  export default Item;

