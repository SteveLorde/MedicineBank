import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotWindow from "./Components/BotWindow.tsx";
import InputBar from "./Components/InputBar.tsx";

export default function App() {

  return (
    <>

        <div>
            <BotWindow />
            <InputBar />
        </div>

    </>
  )
}


