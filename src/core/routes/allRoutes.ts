import AdminComponent from "@/admin/views";
import { ProductsView } from "@/admin/views/products";
import { CreateProductView } from "@/admin/views/products/create";
import ShopComponent from "@/shop/infrastructure/driving-adapter/views/public_profile";

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

    // Products
    { path: "/dashboard/product", component: ProductsView },
    { path: "/dashboard/product/create", component: CreateProductView },
]

export { publicRoutes, authRoutes };
