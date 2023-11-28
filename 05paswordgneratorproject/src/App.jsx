import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed,setnumberallowed] = useState(false)
  const [charcterallowed,setcharcterallowed] = useState(false)
  const [password,setpassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) string += "0123456789"
    if (charcterallowed) string += "!@#$%^&*{}[]?_+="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
      
    }

    setpassword(pass)
      
    
  },[length,numberallowed,charcterallowed,setpassword])
  
  const copypasswordtoclipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordgenerator()
  },[length,numberallowed,charcterallowed,passwordgenerator])

  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
        password generator
        <div className='className ="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly
          ref={passwordRef}
          
          />
          <button onClick={copypasswordtoclipboard} 
          className='bg-blue-500 outline-none text-white px-3 py-0.5'>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            
            />
            <label htmlFor="">length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberallowed}
            id='numberinput'
            onChange={()=> {
              setnumberallowed((prev) => !prev)
            }}
            
            />
            <label htmlFor="numberinput">numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charcterallowed}
            id='characterinput'
            onChange={()=> {
              setcharcterallowed((prev) => !prev)
            }}
            
            />
            <label htmlFor="characterinput">characters</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
