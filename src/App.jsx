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
    // {
    //   id: "1",
    //   title: "React",
    //   url: "https://reactjs.org",
    //   author: "ahmadi",
    //   num_comments: 1,
    //   points: 9,
    // },
    // {
    //   id: "2",
    //   title: "Redux",
    //   url: "https://Redux.js.org",
    //   author: "amiri",
    //   num_comments: 2,
    //   points: 10,
    // },
  ];
  // const [stories,setStories] =useState([]);
  const [searchTerm,setSearchTerm] =useStorageState('search','');
  const [isloading,setIsLoading]=useState(false);
  const [isError,setIsError]=useState(false);
  const API_ENDPOINT='react-mini-projects-api.classbon.com/Story/list';
  const [stories,dispatchStories]=useReducer(storiesReduser,
    {
      data:[],isloading:false,isError:false
    });
  const handlerSearch=(event)=>{
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  
  const getAsyncStories=()=>
  new Promise ((resolve,reject)=>{
    setTimeout(()=>{
       resolve({data:{stories:InitialStories}});
      // reject();
    },2000);
  });
     
  //   useEffect(()=>{
  //     setIsLoading(true);

  //     getAsyncStories().then(
  //       result=>{
          
  //        // dispatchStories({type:'SET_STORIES',payload:result.data.stories});
  //             dispatchStories({type:'STORIES_FETCH_SUCCESS',payload:result.data.stories});

  //         // setStories(result.data.stories);
  //         //setIsLoading(false);
  //       }).catch(()=>dispatchStories({type:'STORIES_FETCH_FAILURE'}));

  //   },[])
  const handelRemoveStory=(id)=>{
    dispatchStories({type:'REMOVE_STORIES',payload:id})
    // const newStories=stories.filter(story=>story.id!==id);
    // // setStories(newStories);

    // dispatchStories({type:'SET_STORIES',payload:new stories});

  }
  useEffect(() => {
    dispatchStories({type:'STORIES_FETCH_INIT'});
    fetch(API_ENDPOINT).then(responce=>responce.json()).
    then().then((stories)=>{
        dispatchStories({
          type:"STORIES_FETCH_SUCCESS",
          payload:stories,
        })
    }).catch(()=>dispatchStories({type:'STORIES_FETCH_FAILURE'}));
    // localStorage.setItem("search",searchTerm);
  }, [
    // searchTerm
  ])

  const searchedStories=stories.data.filter((story)=>
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

      {stories.isError && <p>something went wrong</p>}
      {
        stories.isloading ? <p>isLoading</p>:     <List list={searchedStories} onRemoveItem={handelRemoveStory} />

      }
    </div>
  );
}
const storiesReduser=(state,action)=>{
    switch(action.type){
      case 'STORIES_FETCH_INIT':
        return{
          ...state,
          isloading:true,
          isError:false
        }
        case 'STORIES_FETCH_SUCCESS':
          return{
            ...state,
            isloading:false,
            isError:false,
            data:action.payload
          } 

          case 'STORIES_FETCH_FAILURE':
            return{
              ...state,
              isloading:false,
              isError:true,
            } 
   
            case 'REMOVE_STORIES':
              return{
                ...state,
                data:state.data.filter((story)=>story.id!==action.payload)
              }
            
        break;
        default:
          return state;
          break; 
    }
}
export default App;
