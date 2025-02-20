import { useState } from 'react'
import './App.css'

import Viewer from './components/Viewer'
import Controller from './components/Controller'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <h1>Simple Counter</h1>
     <section>
      <Viewer/>
     </section> 
     <section>
      <Controller/>
     </section>
    </div>
  )
}

export default App
