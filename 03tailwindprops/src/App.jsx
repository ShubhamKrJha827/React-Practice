import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>shubham test</h1>
     <Card username = "cahiaurcode" btnText ="click me"/>
     <Card username="shubham" btnText ="visit me"/>
    
    </>
  )
}

export default App
