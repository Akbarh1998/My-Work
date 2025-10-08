import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todos from './components/Todos'
import Todo from './components/Todo'
import MainApp from './components/second'
import Portfolio from './components/Protfolio'
import Example from './components/second'
import MyTable from './components/second'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Portfolio/> */}
    <MyTable />
  </StrictMode>
)
