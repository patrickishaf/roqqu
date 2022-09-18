import { useRoutes } from "react-router-dom";
import Exchange from "../ui/sections/Exchange";
import Home from "../ui/sections/Home";
import Main from "../ui/pages/Main";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Main/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: 'exchange',
                    element: <Exchange/>
                }
            ]
        }
    ]);
}