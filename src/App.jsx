import './App.css'
import Container from "./components/Container"
import {useRef} from "react";

function App() {
  let dropRef = useRef(null)

  let handleDrop =()=>{
    //console.log(dropRef.current)
    //dropRef.current.style.display= 'block'
    if (dropRef.current.style.display== 'block'){
      dropRef.current.style.display= 'none'

    }
    else{
      dropRef.current.style.display= 'block'

    }
  }
 

  return (
    <>
    <Container className={"max-w-[1320px] mx-auto"}>
      <div onClick={handleDrop}>
        <button className="py-3 px-7 bg-purple-500 text-white rounded-sm">click</button>
        <div className='bg-gray-500 hidden' ref={dropRef}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>

        </div>
      </div>
  
    </Container>
 
    
    
    </>
  )
}

export default App
