import { LoginView } from "@/views/Auth/login";
import { LogoutView } from "@/views/Auth/logout";
// import ProductOverView from "@/views/home/components/product_overview";
import MainView from "@/views/home";
import ShopView from "@/views/shop";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [   
    { path: "/", component: MainView },
    { path: "/shop/:id?", component: ShopView },
    { path: "/login", component: LoginView },
]


const authRoutes: Array<RouteObject> = [
    { path: "/logout", component: LogoutView },
]

export { publicRoutes, authRoutes };
