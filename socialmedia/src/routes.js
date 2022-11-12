import Home from "./pages/Home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"

export const privateRoutes = [
    {path: '/', component: Home, exact: true}
]


export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/register', component: Registration, exact: true}
]
