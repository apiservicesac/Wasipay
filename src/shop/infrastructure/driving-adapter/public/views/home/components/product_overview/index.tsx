import React from "react";


// Icon
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import BreadCrumb from "@/common/BreadCrumb";
import { LayoutPublic } from "@/common/layout_2";
import { ProductOverViewHelper } from "./helper";
import { formatCurrency, formatDiscountPrice } from "@/common/utils/format";


const ProductOverView = () => {
    const helper = ProductOverViewHelper()

    return (
        <LayoutPublic>
            <React.Fragment>
            <BreadCrumb title='Overview' pageTitle='Products' />        

            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                <div className="xl:col-span-4">
                    <div className="sticky top-[calc(theme('spacing.header')_*_1.3)] mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                                    <div className="rounded-md md:col-span-8 md:row-span-2 bg-slate-100 dark:bg-zink-600">
                                        {/* <img src={overview01} alt="" /> */}
                                    </div>
                                    <div className="rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        {/* <img src={overview02} alt="" /> */}
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        {/* <img src={productImg01} alt="" /> */}
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        {/* <img src={productImg09} alt="" /> */}
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        {/* <img src={productImg12} alt="" /> */}
                                    </div>
                                    <div className="p-4 rounded-md md:col-span-4 bg-slate-100 dark:bg-zink-600">
                                        {/* <img src={productImg13} alt="" /> */}
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4 shrink-0">
                                    <Link to="/apps-ecommerce-cart" type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                        <ShoppingCart className="inline-block size-3 align-middle ltr:mr-1 rtl:ml-1" />
                                        <span className="align-middle">Add to Cart</span>
                                    </Link>
                                    <button type="button" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-red-400/20">Buy Now</button>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-8">
                    <div className="card">
                        <div className="card-body">                                                        
                            <h5 className="mt-3 mb-1">{helper.product?.product?.name}</h5>
                            <ul className="flex flex-wrap items-center gap-4 mb-5 text-slate-500 dark:text-zink-200">
                                <li>Published: <span className="font-medium">20 Oct, 2023</span></li>
                            </ul>                            

                            <div className="mb-4">
                                <p className="mb-1 text-green-500">{helper.product?.product?.discount !== 0 ? 'Special' : ''}Price</p>

                                {helper.product?.product?.discount !== 0 ? (
                                    <h4>{formatDiscountPrice(helper.product?.product!)} <small className="font-normal line-through align-middle text-slate-500 dark:text-zink-200">{formatCurrency.format(helper.product?.product?.price!)}</small> <small className="text-green-500 align-middle">{helper.product?.product?.discount}% Off</small></h4>
                                ) : (
                                    <h4>{formatCurrency.format(helper.product?.product?.price!)}</h4>
                                )}
                                
                            </div>                            

                            <div className="mt-5">
                                <h6 className="mb-3 text-15">Product Description:</h6>
                                <p className="mb-2 text-slate-500 dark:text-zink-200">{helper.product?.product?.description}</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    </LayoutPublic>
    );
};

export default ProductOverView;