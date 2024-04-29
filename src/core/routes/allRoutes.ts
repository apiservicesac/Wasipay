import AdminComponent from "@/admin/views";
import ShopComponent from "@/shop/views";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [
    { path: "/", component: ShopComponent },
]

const authRoutes: Array<RouteObject> = [
    { path: "/dashboard", component: AdminComponent },
]

export { publicRoutes, authRoutes };
