import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (   
      <div>
        
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h5>{count}</h5>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div>   
  )
}

export default App
