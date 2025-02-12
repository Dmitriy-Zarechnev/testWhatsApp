import {
    RouteObject,
    RouterProvider,
    createBrowserRouter, Outlet, Navigate
} from 'react-router-dom'

import {Error404, Messenger, AddInstances} from '@/pages'
import {PATH} from '../constants/pathConstants'
import {Layout} from '../layout/Layout'

const routes: RouteObject[] = [
    {
        element: <Messenger/>,
        path: PATH.MESSENGER
    },
    {
        element: <AddInstances/>,
        path: PATH.ADD_INSTANCES
    }
]

const router = createBrowserRouter([
    {
        children: [
            {
                children: routes,
                element: <Outlet/>
            },
            {
                element: <Navigate replace to={PATH.ADD_INSTANCES}/>,
                path: '/'
            }
        ],
        element: <Layout/>,
        errorElement: <Error404/>
    }
])

export function Router() {
    return <RouterProvider router={router}/>
}
