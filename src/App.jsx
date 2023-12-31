import Search from "./components/Search";
import List from "./components/List";
import Item from "./components/Item";
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
  return (
    <div>
      <h1>
        {welcome.greeting}
        {welcome.title}
      </h1>
      <Search/>
     <List list={stories}/>
    </div>
  );
}



export default App;
