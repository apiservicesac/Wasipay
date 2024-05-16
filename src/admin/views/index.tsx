import BreadCrumb from "@/common/BreadCrumb";
import WelcomeWidget from "./components/WelcomeWidget";
import React from "react";
import Widgets from "./components/Widgets";
import TopSellingProducts from "./components/TopSellingProducts";
import ProductsOrders from "./components/ProductsOrders";

const AdminComponent = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Ecommerce' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 gap-x-5">
                <WelcomeWidget />
                <TopSellingProducts />
                <Widgets />
                <ProductsOrders />
            </div>
        </React.Fragment>        
    );
}

export default AdminComponent;