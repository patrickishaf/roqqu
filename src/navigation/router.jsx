import { useRoutes } from "react-router-dom";
import Exchange from "../ui/components/Exchange";
import Home from "../ui/components/Home";
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