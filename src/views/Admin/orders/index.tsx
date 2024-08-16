import React, { useState } from "react";
import CountUp from 'react-countup';

// icons
import { Boxes, PackagePlus, Loader, Search, Truck, PackageCheck, PackageX, RefreshCcw } from 'lucide-react';
import { OrdersOverviewChart } from "@/common/components/charts/charts";
import { Link } from "react-router-dom";

import BreadCrumb from "@/common/BreadCrumb";
import TableContainer from "@/common/TableContainer";
import { ColumnsOrders } from "../utils/TableColumnsOrders";
import { useSearchOrder } from "@/features/order/infrastructure/driving-adapter/hooks/useSearchOrder";

export const OrdersView = () => {
    const { orders, searchOrderByStatus, searchOrder }  = useSearchOrder()

    const [activeTab, setActiveTab] = useState("1");

    const toggleTab = (tab: any, type: any) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            searchOrderByStatus(type)
        }
    };

    return (
        <React.Fragment>
            <BreadCrumb title='Order Lists' pageTitle='Ecommerce' />
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 2xl:grid-cols-12">
                <div className="2xl:col-span-2 2xl:row-span-1">
                    <div className="card">
                        <div className="flex items-center gap-3 card-body">
                            <div className="flex items-center justify-center size-12 rounded-md text-15 bg-custom-50 text-custom-500 dark:bg-custom-500/20 shrink-0"><Boxes /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={0} separator="," className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Total Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:col-span-2 2xl:row-span-1">
                    <div className="card">
                        <div className="flex items-center gap-3 card-body">
                            <div className="flex items-center justify-center size-12 rounded-md text-15 bg-sky-50 text-sky-500 dark:bg-sky-500/20 shrink-0"><PackagePlus /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={0} separator="," className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">New Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-last md:col-span-2 2xl:col-span-8 2xl:row-span-3 card 2xl:order-none">
                    <div className="card-body">
                        <h6 className="mb-4 text-gray-800 text-15 dark:text-zink-50">Orders Overview</h6>
                        <OrdersOverviewChart id="ordersOverview" />
                    </div>
                </div>
                <div className="2xl:col-span-2 2xl:row-span-1">
                    <div className="card">
                        <div className="flex items-center gap-3 card-body">
                            <div className="flex items-center justify-center size-12 text-yellow-500 rounded-md text-15 bg-yellow-50 dark:bg-yellow-500/20 shrink-0"><Loader /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={0} separator="," className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Pending Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:col-span-2 2xl:row-span-1">
                    <div className="card">
                        <div className="flex items-center gap-3 card-body">
                            <div className="flex items-center justify-center size-12 text-purple-500 rounded-md text-15 bg-purple-50 dark:bg-purple-500/20 shrink-0"><Truck /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={0} separator="," className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Shipping Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:col-span-2 2xl:row-span-1">
                    <div className="card">
                        <div className="flex items-center gap-3 card-body">
                            <div className="flex items-center justify-center size-12 text-green-500 rounded-md text-15 bg-green-50 dark:bg-green-500/20 shrink-0"><PackageCheck /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={0} separator="," className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Delivered Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:col-span-2 2xl:row-span-1">
                    <div className="card">
                        <div className="flex items-center gap-3 card-body">
                            <div className="flex items-center justify-center size-12 text-red-500 rounded-md text-15 bg-red-50 dark:bg-red-500/20 shrink-0"><PackageX /></div>
                            <div className="grow">
                                <h5 className="mb-1 text-16">
                                    <CountUp end={0} separator="," className="counter-value" />
                                </h5>
                                <p className="text-slate-500 dark:text-zink-200">Cancelled Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" id="ordersTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-12 items-center">
                        <div className="xl:col-span-9">
                            <ul className="flex flex-wrap w-full text-sm font-medium text-center text-gray-500 nav-tabs">
                                <li className={`group ${activeTab === "1" && "active"}`}>
                                    <Link to="#" data-tab-toggle data-target="allOrders" className="inline-block px-4 py-1.5 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]" onClick={() => { toggleTab("1", "all"); }}>
                                        <Boxes className="inline-block size-4 mr-1" /> <span className="align-middle">All Orders</span>
                                    </Link>
                                </li>
                                <li className={`group ${activeTab === "2" && "active"}`}>
                                    <Link to="#" data-tab-toggle data-target="pendingOrder" className="inline-block px-4 py-1.5 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]" onClick={() => { toggleTab("2", "PENDING"); }}>
                                        <Loader className="inline-block size-4 mr-1" /> <span className="align-middle">Pending</span>
                                    </Link>
                                </li>
                                <li className={`group ${activeTab === "3" && "active"}`}>
                                    <Link to="#" data-tab-toggle data-target="deliveredOrder" className="inline-block px-4 py-1.5 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]" onClick={() => { toggleTab("3", "DELIVERED"); }}>
                                        <PackageCheck className="inline-block size-4 mr-1" /> <span className="align-middle">Delivered</span>
                                    </Link>
                                </li>
                                <li className={`group ${activeTab === "4" && "active"}`}>
                                    <Link to="#" data-tab-toggle data-target="returnsOrders" className="inline-block px-4 py-1.5 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]" onClick={() => { toggleTab("4", "Return"); }}>
                                        <RefreshCcw className="inline-block size-4 mr-1" /> <span className="align-middle">Returns</span>
                                    </Link>
                                </li>
                                <li className={`group ${activeTab === "5" && "active"}`}>
                                    <Link to="#" data-tab-toggle data-target="cancelledOrders" className="inline-block px-4 py-1.5 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]" onClick={() => { toggleTab("5", "CANCELLED"); }}>
                                        <PackageX className="inline-block size-4 mr-1" /> <span className="align-middle">Cancelled</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="pl-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => searchOrder(e)} />
                                <Search className="inline-block size-4 absolute left-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                    </div>                    

                    {orders && orders.length > 0 ?
                        <TableContainer
                            isPagination={true}
                            columns={(ColumnsOrders || [])}
                            data={(orders || [])}
                            customPageSize={10}
                            divclassName="mt-5 overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="text-left bg-slate-100 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 font-semibold text-slate-500 border-b border-slate-200 dark:border-zink-500 dark:text-zink-200"
                            tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 299+ orders We did not find any orders for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </React.Fragment>
    );
};