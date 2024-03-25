import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState('')

  
  const onPressHandler = (event) => {
    event.preventDefault()
    const value = event.target.list.value
    console.log(value)
    
    
    setList(value);
    console.log('lists: ', list)

    if(list){

      
      let myArray = list.split(", ");
      const randomIndex = myArray[Math.floor(Math.random() * myArray.length)];

      console.log('randomIndex', randomIndex);

    }

  }
  
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <form onSubmit={onPressHandler}>
          <textarea name='list' />
          <button
            value='press'
            title='eee'
          >dddd</button>
        </form>
      </div>
    </>
  )
}

export default App