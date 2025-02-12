import {
    RouteObject,
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'

import {Error404, Notifications} from '@/pages'
import {PATH} from '../constants/pathConstants'
import {Layout} from '../layout/Layout'

const routes: RouteObject[] = [
    {
        element: <Notifications/>,
        path: PATH.BASE
    }
]

const router = createBrowserRouter([
    {
        children: routes,
        element: <Layout/>,
        errorElement: <Error404/>
    }
])

export function Router() {
    return <RouterProvider router={router}/>
}
