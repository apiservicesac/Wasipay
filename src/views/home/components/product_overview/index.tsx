import React from "react";


// Icon
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import BreadCrumb from "@/common/BreadCrumb";
import { LayoutPublic } from "@/common/layout_2";
import { ProductOverViewHelper } from "./helper";
import { formatCurrency, formatDiscountPrice } from "@/common/utils/format";
import { CartHelper } from "@/common/components/cart/helper";
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

const ProductOverView = () => {
    const helper = ProductOverViewHelper()

    const { addProductCart, decreaseProductQuantity, increaseProductQuantity } = CartHelper({setData: false})

      
    return (
        <LayoutPublic>
            <React.Fragment>
            <BreadCrumb title='Overview' pageTitle='Products' />        

            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                <div className="xl:col-span-4">
                    <div className="sticky top-[calc(theme('spacing.header')_*_1.3)] mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="relative group-[.gridView]:static p-3 md:p-5 group-[.gridView]:p-2">
                                    <div className="group-[.gridView]:p-3 group-[.gridView]:bg-slate-100 dark:group-[.gridView]:bg-zink-600 group-[.gridView]:inline-block rounded-md">
                                        <Swiper className="pagination-slider group-[.gridView]:w-24"
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                            }}
                                            modules={[Pagination, Navigation]}>
                                            {helper.product?.images!.map((image: any) => (
                                                <SwiperSlide key={image.id} className='flex justify-center items-center'>
                                                    <div className="w-full h-full flex justify-center items-center">
                                                        <img src={image.url} className="object-contain max-h-full max-w-full" />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                            <div className="swiper-button-next after:hidden text-custom-500 group-[.gridView]:hidden flex"><ChevronRight className='text-black' /></div>
                                            <div className="swiper-button-prev after:hidden text-custom-500 group-[.gridView]:hidden flex"><ChevronLeft className='text-black' /></div>
                                        </Swiper>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4 shrink-0">
                                    
                                <button onClick={() => addProductCart(helper.product!)} type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                    <ShoppingCart className="inline-block size-3 align-middle ltr:mr-1 rtl:ml-1" />
                                    <span className="align-middle">Add to Cart</span>
                                </button>

                                   
                                    <Link to={'/checkout'} onClick={() => addProductCart(helper.product!)} type="button" className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-red-400/20">Buy Now</Link>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-8">
                    <div className="card">
                        <div className="card-body">                                                        
                            <h5 className="mt-3 mb-1">{helper.product?.name}</h5>
                            <ul className="flex flex-wrap items-center gap-4 mb-5 text-slate-500 dark:text-zink-200">
                                <li>Published: <span className="font-medium">20 Oct, 2023</span></li>
                            </ul>                            

                            <div className="mb-4">
                                <p className="mb-1 text-green-500">{helper.product?.discount !== 0 ? 'Special' : ''}Price</p>

                                {helper.product?.discount !== 0 ? (
                                    <h4>{formatDiscountPrice(helper.product?.product!)} <small className="font-normal line-through align-middle text-slate-500 dark:text-zink-200">{formatCurrency.format(helper.product?.price!)}</small> <small className="text-green-500 align-middle">{helper.product?.discount}% Off</small></h4>
                                ) : (
                                    <h4>{formatCurrency.format(helper.product?.price!)}</h4>
                                )}
                                
                            </div>                            

                            <div className="mt-5">
                                <h6 className="mb-3 text-15">Product Description:</h6>
                                <p className="mb-2 text-slate-500 dark:text-zink-200">                                    
                                    {parse(helper.product?.description!)}
                                </p>
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