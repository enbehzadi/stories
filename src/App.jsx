import Search from "./components/InputWhitLable";
import List from "./components/List";
import Item from "./components/Item";
import { useRef, useState } from "react";

import { createContext, useEffect, useContext, useReducer } from 'react';

import useStorageState from "./hooks/useStorageState";
import InputWhitLable from "./components/InputWhitLable";

const title = "Hello Programmer";
const welcome = {
  greeting: "hi",
  title: "React",
};
const App=()=> {
  const InitialStories = [
    {
      id: "1",
      title: "React",
      url: "https://reactjs.org",
      author: "ahmadi",
      num_comments: 1,
      points: 9,
    },
    {
      id: "2",
      title: "Redux",
      url: "https://Redux.js.org",
      author: "amiri",
      num_comments: 2,
      points: 10,
    },
  ];
  // const [stories,setStories] =useState([]);
  const [searchTerm,setSearchTerm] =useStorageState('search','');
  const [isloading,setIsLoading]=useState(false);
  const [isError,setIsError]=useState(false);
  const [stories,dispatchStories]=useReducer(storiesReduser,[]);
  const handlerSearch=(event)=>{
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  
  const getAsyncStories=()=>
  new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve({data:{stories:InitialStories}});
    },2000);
  });
     
    useEffect(()=>{
      setIsLoading(true);

      getAsyncStories().then(
        result=>{
          
          dispatchStories({type:'SET_STORIES',payload:result.data.stories});
          // setStories(result.data.stories);
          setIsLoading(false);
        }).catch(()=>setIsError(true))
    },[])
  const handelRemoveStory=(id)=>{
    dispatchStories({type:'REMOVE_STORY',payload:id})
    // const newStories=stories.filter(story=>story.id!==id);
    // // setStories(newStories);

    // dispatchStories({type:'SET_STORIES',payload:new stories});

  }
  useEffect(() => {
    localStorage.setItem("search",searchTerm);
  }, [searchTerm])

  const searchedStories=stories.filter((story)=>
    story.title.includes(searchTerm));

    const inputRef=useRef();
    // if(isloading){
    //   return <p>Loading...</p>
    // }
  return (
    <div>
      <h1>
        {welcome.greeting}
        {welcome.title}
      </h1>
      
      <InputWhitLable id="search"  label="Search"  Value={searchTerm} onInputChange={handlerSearch} isFocused={true}/>
      {isError && <p>something went wrong</p>}
      {
        isloading ? <p>isLoading</p>:     <List list={searchedStories} onRemoveItem={handelRemoveStory} />

      }
    </div>
  );
}
const storiesReduser=(state,action)=>{
    switch(action.type){
      case 'SET_STORIES':
        return action.payload;
        break;
        case 'REMOVE_STORIES':
        return  stories.filter((story)=>story.id !==action.payload)
        break;
        default:
          return state;
          break; 
    }
}
export default App;
