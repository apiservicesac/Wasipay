import BreadCrumb from "@/common/BreadCrumb";
import { Image, Package, PartyPopper, SquareGanttChart } from "lucide-react";
import Tab from "@/common/components/Tab/Tab";
import { Nav } from "@/common/components/Tab/Nav";

import { ProductInfo } from "./panel-tabs/ProductInfo";
import { ProductImages } from "./panel-tabs/ProductImages";
import { ProductDetails } from "./panel-tabs/ProductDetails";
import { ProductCompleted } from "./panel-tabs/ProductCompleted";

export const CreateProductView = () => {
    return (
        <>
            <BreadCrumb title="Create Product" pageTitle="Products" />

            <div className="grid grid-cols-1 2xl:grid-cols-12">
                <div className="col-span-12">
                    <div className="card">
                        <div className="card-body">
                            <Tab.Container defaultActiveKey="product-info">

                                <Nav className="grid grid-cols-1 gap-3 lg:grid-cols-4 nav-tabs form-wizard">
                                    <Nav.Item eventKey="product-info" className="group/item">
                                        <a href="#!" data-target="product-info" data-tab-id="1" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                            <Package className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                            <span className="block mt-3 font-medium text-15">1. Product Info</span>
                                        </a>
                                    </Nav.Item>
                                    <Nav.Item eventKey="product-details" className="group/item">
                                        <a href="#!"  onClick={() => { console.log("HOLA") }} data-target="product-details" data-tab-id="2" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                            <SquareGanttChart className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                            <span className="block mt-3 font-medium text-15">2. Product Details</span>
                                        </a>
                                    </Nav.Item>
                                    <Nav.Item eventKey="product-images" className="group/item">
                                        <a href="#!" data-target="product-images" data-tab-id="3" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                            <Image className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                            <span className="block mt-3 font-medium text-15">3. Product Images</span>
                                        </a>
                                    </Nav.Item>
                                    <Nav.Item eventKey="completed" className="group/item">
                                        <a href="#!" data-target="completed" data-tab-id="4" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                            <PartyPopper className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                            <span className="block mt-3 font-medium text-15">4. Completed</span>
                                        </a>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className="mt-5 tab-content">
                                    <Tab.Pane eventKey="product-info">
                                        <ProductInfo />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="product-details">
                                        <ProductDetails />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="product-images">
                                        <ProductImages />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="completed">
                                        <ProductCompleted />
                                    </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>

                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}