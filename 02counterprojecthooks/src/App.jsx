import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter] = useState(15)  // hooks use this line 
    // let counter = 5

    const addvalue = () =>{ 
      counter = counter+1
      setCounter(counter)
    }

    const removevalue = () =>{ 
      counter = counter-1 
      setCounter(counter-1)
    }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter}</h2>

      <button onClick = {addvalue}
      >add value : {counter}</button>
      <br />
      <button onClick = {removevalue}
      >remove value :{counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
