import { createBrowserRouter } from 'react-router-dom'
import { RoutesAccount } from '@/store_profile/views/Router'
import { RoutesAdmin } from '@/Admin/views/Router'

const routerBase = createBrowserRouter([
    RoutesAccount,
    RoutesAdmin
], { basename: "/web" })
export default routerBase
