import Search from "./components/Search";
import List from "./components/List";
import Item from "./components/Item";
import { useState } from "react";
import { createContext, useEffect, useContext, useReducer } from 'react';

import useStorageState from "./hooks/useStorageState";

const title = "Hello Programmer";
const welcome = {
  greeting: "hi",
  title: "React",
};
const App=()=> {
  const stories = [
    {
      id: "0",
      title: "React",
      url: "https://reactjs.org",
      author: "ahmadi",
      num_comments: 1,
      points: 9,
    },
    {
      id: "1",
      title: "Redux",
      url: "https://Redux.js.org",
      author: "amiri",
      num_comments: 2,
      points: 10,
    },
  ];
  
  
  const [searchTerm,setSearchTerm] =useStorageState('search','');
  const handlerSearch=(event)=>{
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  

  
  useEffect(() => {
    localStorage.setItem("search",searchTerm);
  }, [searchTerm])

  const searchedStories=stories.filter((story)=>
    story.title.includes(searchTerm));

  return (
    <div>
      <h1>
        {welcome.greeting}
        {welcome.title}
      </h1>
      <Search Search={searchTerm} onSearch={handlerSearch}/>
     <List list={searchedStories}/>
    </div>
  );
}
export default App;
