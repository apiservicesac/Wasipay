import { LoginView } from "@/views/Auth/login";
import { LogoutView } from "@/views/Auth/logout";
// import ProductOverView from "@/views/home/components/product_overview";
import ShopView from "@/views/home";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [   
    { path: "/", component: ShopView },
    // { path: "/product/:id", component: ProductOverView },
    { path: "/login", component: LoginView },
]


const authRoutes: Array<RouteObject> = [
    { path: "/logout", component: LogoutView },
]

export { publicRoutes, authRoutes };
