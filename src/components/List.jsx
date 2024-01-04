import Item from "./Item";
const List=({list,onRemoveItem})=>{ +
  console.log('list',list)
//   useEffect(()=>{
// console.log(props.list);
//   },[props.list])
  return(
    <ul>
  {list.map(({id,...item}) => 

     (
       <Item  key={id} {...item} onRemoveItem={onRemoveItem}/>
    ))}
  </ul>
  )
}
export default List;