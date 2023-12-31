import Item from "./Item";
const List=(props)=>{ 
//   useEffect(()=>{
// console.log(props.list);
//   },[props.list])
  return(
    <ul>
  {props.list.map((item) => 
     (
      <Item  key={item.id} item ={item}/>
    ))}
  </ul>
  )
}
export default List;