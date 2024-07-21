import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './assets/component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/> 
        <p className='bg-gray-700 text-white text-xl p-4 text-center'>&copy; All rights are reserved</p> 
    </>
  )
}

export default App
