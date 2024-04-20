import { createBrowserRouter } from 'react-router-dom'
import { RoutesAccount } from './shop_profile/views/Router'

const routerBase = createBrowserRouter([
    RoutesAccount
], { basename: "/web" })
export default routerBase
