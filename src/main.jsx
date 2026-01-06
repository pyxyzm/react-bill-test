import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import sum from "@/test.jsx";



const a = sum(1,2)
console.log(a)

createRoot(document.getElementById('root')).render(
    <App />
)
