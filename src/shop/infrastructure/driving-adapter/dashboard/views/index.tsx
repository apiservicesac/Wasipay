import BreadCrumb from "@/common/BreadCrumb";
import WelcomeWidget from "./components/WelcomeWidget";
import React from "react";
import Widgets from "./components/Widgets";
import ProductsOrders from "./components/ProductsOrders";
import OrderStatistics from "./components/OrderStatistics";

const AdminView = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Ecommerce' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 gap-x-5">
                <WelcomeWidget />
                <OrderStatistics />
                <Widgets />
                <ProductsOrders />
            </div>
        </React.Fragment>        
    );
}

export default AdminView;