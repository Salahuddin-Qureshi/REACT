import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Game from './Game.jsx'
import Home from './Home.jsx'
import TodoList from './Todolist.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Game /> */}
    <TodoList />
    {/* <Home /> */}
  </React.StrictMode>,
)
