import React from "react";
import { Minus, Plus, X } from "lucide-react";

import { Link } from "react-router-dom";
import Drawer from "../../../../../../../common/components/Drawer";
import { useAppSelector } from "@/redux/hooks";

const CartComponent = ({ show, handleDrawer }: any) => {

    const cart_products = useAppSelector((state) => state.carttReducer.products)

    return (
        <React.Fragment>
            <Drawer show={show} onHide={handleDrawer} id="cartSidePenal" drawer-end="true" className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow dark:bg-zink-600 right-0 md:w-96 z-drawer">
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500">
                    <div className="grow">
                        <h5 className="mb-0 text-16">Shopping Cart <span className="inline-flex items-center justify-center size-5 ml-1 text-[11px] font-medium border rounded-full text-white bg-custom-500 border-custom-500">{cart_products?.length}</span></h5>
                    </div>
                    <div className="shrink-0">
                        <Drawer.Header data-drawer-close="cartSidePenal" className="transition-all duration-150 ease-linear text-slate-500 hover:text-slate-800">
                            <X className="size-4"></X>
                        </Drawer.Header>
                    </div>
                </div>
                <div>
                    <div className="h-[calc(100vh_-_370px)] p-4 overflow-y-auto product-list">
                        <div className="flex flex-col gap-4">
                            {
                                (cart_products || [])?.map((item: any, index: number) => (
                                    <div key={index} className="flex gap-2 product" id={`product${item.id}`}>
                                        <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                                            <img src={item.file[0].url} alt="" className="h-8" />
                                        </div>
                                        <div className="overflow-hidden grow">
                                            <div className="float-left">
                                                <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"
                                                >
                                                    <X className="size-4"></X>
                                                </button>
                                            </div>
                                            <a href="#!" className="transition-all duration-200 ease-linear hover:text-custom-500">
                                                <h6 className="mb-1 text-15">{item.name}</h6>
                                            </a>
                                            <div className="flex items-center mb-3">
                                                <h5 className="text-base product-price"> $<span>{item.price}</span></h5>
                                                <div className={`font-normal mr-1 dark:text-zink-200 ${index === cart_products!.length - 3 ? "text-slate-500" : "text-slate-400"}`}>({item.name})</div>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="inline-flex text-center input-step">
                                                    <button type="button" className="border size-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                        >
                                                        <Minus className="inline-block size-4"></Minus>
                                                    </button>
                                                    <input type="number" className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500" value={'0'} min="0" max="100" readOnly />
                                                    <button type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 rounded-l size-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                       >
                                                        <Plus className="inline-block size-4"></Plus>
                                                    </button>
                                                </div>
                                                <h6 className="product-line-price">{item.total}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="p-4 border-t border-slate-200 dark:border-zink-500">

                        <table className="w-full mb-3 ">
                            <tbody className="table-total">
                                {/* <tr>
                                    <td className="py-2">Sub Total :</td>
                                    <td className="text-right cart-subtotal">${subTotal.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Shipping Charge :</td>
                                    <td className="text-right cart-shipping">${charge}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Estimated Tax (12.5%) : </td>
                                    <td className="text-right cart-tax">${tax.toFixed(2)}</td>
                                </tr> */}
                                <tr className="font-semibold">
                                    <td className="py-2">Total : </td>
                                    {/* <td className="text-right cart-total">S/.{(subTotal + charge + tax - dis).toFixed(2)}</td> */}
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex items-center justify-between gap-3">
                            <Link to="/apps-ecommerce-product-grid" className="w-full text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:ring-slate-400/10">Continue Shopping</Link>
                            <Link to="/apps-ecommerce-checkout" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20">Checkout</Link>
                        </div>
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default CartComponent;