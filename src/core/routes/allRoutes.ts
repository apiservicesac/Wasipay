import { LoginView } from "@/views/Auth/login";
import { LogoutView } from "@/views/Auth/logout";
import { CheckoutView } from "@/views/Client/checkout";
import ProductOverView from "@/views/Client/product_overview";
import ShopView from "@/views/Client/home/index";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [   
    { path: "/", component: ShopView },
    { path: "/product/:id", component: ProductOverView },
    { path: "/login", component: LoginView },
]


const authRoutes: Array<RouteObject> = [
    { path: "/logout", component: LogoutView },
    { path: "/checkout", component: CheckoutView },
]

export { publicRoutes, authRoutes };
