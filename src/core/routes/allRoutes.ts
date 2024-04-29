import Admin from "@/admin/views";
import ShopProfile from "@/shop_profile/views";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [
    { path: "/", component: ShopProfile },
]

const authRoutes: Array<RouteObject> = [
    { path: "/dashboard", component: Admin },
]

export { publicRoutes, authRoutes };
