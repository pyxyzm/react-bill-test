import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import router from "@/router/index.jsx";
//导入定制样式
import '@/theme.css'


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
)
