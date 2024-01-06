import Item from "./Item";
const List=({list,onRemoveItem})=>{ +
  console.log('list',list)
//   useEffect(()=>{
// console.log(props.list);
//   },[props.list])
  return(
    <ul>
  {list.map((item) => 
  (
       <Item  key={item.id} {...item} onRemoveItem={onRemoveItem}/>
    ))}
  </ul>
  )
}
export default List;