import React from 'react'
import './App.css'

const App = ({ children }) => (
  <main className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Book Manager</h1>
    </header>
    {children}
  </main>
)

export default App
