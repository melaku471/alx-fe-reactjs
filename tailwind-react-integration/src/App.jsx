import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'; // Note: No "." at the start



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <UserProfile />
    </div>
    
    </>
  )
}

export default App
