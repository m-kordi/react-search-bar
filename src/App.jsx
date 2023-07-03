import "./App.css"
import mydata from "./data/mydata.json"
import { useState } from 'react';

function App() {
  const [filtereData,setFiltereData]=useState(mydata);
  const search = (e)=> setFiltereData(mydata.filter((item)=>item.name.includes((e.target.value).charAt(0).toUpperCase())));
  /* .charAt(0).toUpperCase() this cod if your array start with capital letters if not do not use it */
  return (
    <>
    <h1>search example</h1>
    <input type="text" placeholder='search' onKeyUp={search}/>
    <ul>
      {filtereData.map((el)=>{
        return <li key={el.id}>{el.name}</li>
      })}
    </ul>
    </>
  )
}

export default App
