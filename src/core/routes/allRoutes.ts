import { LoginView } from "@/Auth/views/login";
import { LogoutView } from "@/Auth/views/logout";
import { RegisterView } from "@/Auth/views/register";
import { RegisterWizardView } from "@/Auth/views/register-wizard-view";
import { ResetPasswordView } from "@/Auth/views/reset-password";
import AdminView from "@/admin/views";
import { ProductsView } from "@/admin/views/products";
import { CreateProductView } from "@/admin/views/products/create";
import ShopView from "@/shop/infrastructure/driving-adapter/views/shop-view";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [
    { path: "/", component: ShopView },
    { path: "/login", component: LoginView },
    { path: "/register", component: RegisterView },
    { path: "/logout", component: LogoutView },
    { path: "/register-wizard", component: RegisterWizardView },
    { path: "/reset-password", component: ResetPasswordView },
]

const authRoutes: Array<RouteObject> = [
    { path: "/dashboard", component: AdminView },

    // Products
    { path: "/dashboard/product", component: ProductsView },
    { path: "/dashboard/product/create", component: CreateProductView },
]

export { publicRoutes, authRoutes };
