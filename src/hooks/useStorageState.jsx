import { useEffect, useState } from "react"

const useStorageState=(key,intialState)=>{
    const [value,setvalue]=useState(localStorage.getItem(key)||intialState);

    useEffect(()=>{
        localStorage.setItem(key,value);

    });
    return [value,setvalue];
}
export default useStorageState;