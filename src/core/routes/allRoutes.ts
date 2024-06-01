import { LoginView } from "@/Auth/views/login";
import AdminView from "@/admin/views";
import { ProductsView } from "@/admin/views/products";
import { CreateProductView } from "@/admin/views/products/create";
import ShopView from "@/shop/infrastructure/driving-adapter/views";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [
    { path: "/", component: ShopView },
    { path: "/login", component: LoginView },
]

const authRoutes: Array<RouteObject> = [
    { path: "/dashboard", component: AdminView },

    // Products
    { path: "/dashboard/product", component: ProductsView },
    { path: "/dashboard/product/create", component: CreateProductView },
]

export { publicRoutes, authRoutes };
