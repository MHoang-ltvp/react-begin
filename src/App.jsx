import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/learn/MyComponent'
import { SecondComponent2, SecondComponent22 } from './Components/learn/MySecondComponent'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div> // hot reloading
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>ll
      <h1>Hello World 2</h1>
      <MyComponent />
      <SecondComponent2 />
      <SecondComponent22 />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>SS
    </>
  )
}

export default App

