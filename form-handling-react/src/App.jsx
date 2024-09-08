import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <h1>Controlled Component Form</h1>
      <RegistrationForm />
      
      <h1>Formik Form</h1>
      <FormikForm />
    </div>
      
    </>
  )
}

export default App
