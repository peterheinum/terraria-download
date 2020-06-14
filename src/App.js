import React from "react"
import logo from "./logo.svg"
import "./App.css"

const App = () => {
  const downloadFile = () => {
    window.location.replace('https://github.com/peterheinum/terraria-syncv2/blob/master/Sad_Shore_of_Werewolves.wld?raw=true')
    setTimeout(() => {
      window.location.replace('https://github.com/peterheinum/terraria-syncv2/blob/master/Sad_Shore_of_Werewolves.wld.bak?raw=true')
    }, 5000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  className="App-logo" alt="logo" />
        <p>
        <button onClick={downloadFile}>Download</button>
        <br />
        Download these two files and put them in your "worlds" folder for terraria, then set sail :) 
        </p>
      </header>
    </div>
  )
}

export default App
