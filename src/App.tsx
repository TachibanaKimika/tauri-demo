import { useState } from 'react'
import { invoke } from '@tauri-apps/api'
import SystemInfo from './components/SystemInfo'
import Sereenshot from './components/ShortScreen'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <Sereenshot />
      <SystemInfo />
    </div>
  )
}

export default App
