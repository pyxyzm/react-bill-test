import {createBrowserRouter} from "react-router-dom";
import Layout from "@/pages/Layout/index.jsx";
import Monthly from "@/pages/Month/index.jsx";
import Year from "@/pages/Year/index.jsx";
import New from "@/pages/Year/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Monthly/>,
            },
            {
                path: "year",
                element: <Year/>,
            },
        ],
    },
    {
        path: "/new",
        element: < New/>,
    },
]);

export default router;