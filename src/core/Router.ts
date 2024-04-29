import { createBrowserRouter } from 'react-router-dom'
import { RoutesAccount } from '@/shop_profile/views/Router'
import { RoutesAdmin } from '@/admin/views/Router'

const routerBase = createBrowserRouter([
    RoutesAccount,
    RoutesAdmin
], { basename: "/web" })
export default routerBase
