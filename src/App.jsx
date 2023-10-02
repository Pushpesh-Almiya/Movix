import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
function App() {
  //API testing ....
  const apiTesting =()=>{
    fetchDataFromApi("/movie/popular").then((res)=>{
      console.log(res)
    })
  }
  useEffect(()=>{
    apiTesting();
  },[])
  return (
    <>
    Welcome to Movix.......
    </>
  )
}

export default App
