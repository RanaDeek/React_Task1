import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  const Counter=()=>{
    setCount(count+1);
  }
  return (
    <>
     <button onClick={Counter}>Rana Deek {count}</button>
    </>
  );
}

export default App
