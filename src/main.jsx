import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import router from "@/router/index.jsx";
//导入定制样式
import '@/theme.css'
import {Provider} from "react-redux";
import store from "@/store/index.jsx";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
