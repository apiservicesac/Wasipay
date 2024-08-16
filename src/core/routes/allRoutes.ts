import AdminView from "@/views/Admin/home";
import { OrdersView } from "@/views/Admin/orders";
import { PaymentMehtodsView } from "@/views/Admin/payment_methods";
import { ProductsView } from "@/views/Admin/products";
import { CreateProductView } from "@/views/Admin/products/create-wizard-product";
import { LoginView } from "@/views/Auth/login";
import { LogoutView } from "@/views/Auth/logout";
import { CheckoutView } from "@/views/Client/checkout";
import ProductOverView from "@/views/Client/home/components/product_overview";
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


const authDashboardRoutes: Array<RouteObject> = [

    { path: "/dashboard", component: AdminView },

    { path: "/dashboard/payment-methods", component: PaymentMehtodsView },
    
    // Products
    { path: "/dashboard/product", component: ProductsView },
    { path: "/dashboard/product/create", component: CreateProductView },

    // Orders
    { path: "/dashboard/order", component: OrdersView },
]

export { publicRoutes, authRoutes, authDashboardRoutes };
