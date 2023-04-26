import { useState } from 'react'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState(0)
  const [city, setCity] = useState('')
  const [module, setmodule] = useState(false)


  return (
    <form>
      <label htmlFor='FullName'>
        Nome Completo
        <input id='FullName' type='text' value={fullName} onChange={({target}) => setFullName(target.value)}/>
      </label>
      <label htmlFor='age'>
        Idade
        <input id='age' type='number' value={age} onChange={({target}) => setAge(target.value)}/>
      </label>
      <label htmlFor='city'>
        Cidade
        <input id='city' type='text' value={city} onChange={({target}) => setCity(target.value)}/>
      </label>
      <label htmlFor='fundamentals'>
        Fundamentos
        <input id='fundamentals' checked={module === 'Fundamentos'} type='radio' value='Fundamentos' onChange={({target}) => setmodule(target.value)}/>
      </label>
        <label htmlFor='frontend'>
        Front-End
        <input id='frontend' type='radio' checked={module === 'Front-end'} value='Front-end' onChange={({target}) => setmodule(target.value)}/>
      </label>
      <label htmlFor='backend'>
        Back-End
        <input id='backend' type='radio' checked={module === 'Back-end'} value='Back-end'onChange={({target}) => setmodule(target.value)}/>
      </label>
      <label htmlFor='ciency'>
        Ciência da Computação
        <input id='ciency' type='radio' checked={module === 'Ciência'}value='Ciência' onChange={({target}) => setmodule(target.value)}/>
      </label>
      <button type='submit' onClick={(event) => {
        event.preventDefault();
        console.log('CLick')
      }}>
        Enviar
      </button>
    </form>
  )
}

export default App
