import { useState } from 'react'
import './App.css'
import { CakeView } from './features/cake/cakeView'
import { IceCreamView } from './features/icecream/icecreamView'
import { UserView } from './features/user/userView'

function App() {

  return (
    <div className='App'>
      <CakeView />
      <IceCreamView />
      <UserView />      
    </div>
  )
}

export default App
