import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { ProductDetailsHelper } from "./helper/ProductDetails";

import Select from 'react-select';
import "flatpickr/dist/flatpickr.css";
import Flatpickr from 'react-flatpickr';

export const ProductDetails = () => {

    const helper = ProductDetailsHelper()

    return (
        <React.Fragment>
            <h5 className="mb-3">Product Details</h5>
            <form action="#!" onSubmit={helper.onHandleSubmitForm}>                
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
                    <div>
                        <label htmlFor="quantity" className="inline-block mb-2 text-base font-medium">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Quantity"
                            value={helper.validation.values.quantity}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.quantity && helper.validation.errors.quantity ?
                                <div id="quantity" className="text-red-500">{helper.validation.errors.quantity}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="sku" className="inline-block mb-2 text-base font-medium">SKU</label>
                        <input
                            type="text"
                            name="sku"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="SKU"
                            value={helper.validation.values.sku}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.sku && helper.validation.errors.sku ?
                                <div id="sku" className="text-red-500">{helper.validation.errors.sku}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="brand" className="inline-block mb-2 text-base font-medium">Brand</label>
                        <input
                            type="text"
                            id="brand"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Brand"
                            value={helper.validation.values.brand}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.brand && helper.validation.errors.brand ?
                                <div id="brand" className="text-red-500">{helper.validation.errors.brand}</div>
                                : null
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
                    <div>
                        <label htmlFor="price" className="inline-block mb-2 text-base font-medium">Price</label>
                        <input
                            type="number"
                            name="price"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Price"
                            value={helper.validation.values.price}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.price && helper.validation.errors.price ?
                                <div id="price" className="text-red-500">{helper.validation.errors.price}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="discount" className="inline-block mb-2 text-base font-medium">Discount</label>
                        <input
                            type="number"
                            name="discount"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Discount"
                            value={helper.validation.values.discount}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.discount && helper.validation.errors.discount ?
                                <div id="discount" className="text-red-500">{helper.validation.errors.discount}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="product_tax" className="inline-block mb-2 text-base font-medium">TAX Applicable</label>
                        <Select
                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            options={helper.taxAplicableOptions}
                            isSearchable={false}
                            name="product_tax"
                            value={helper.taxAplicableOptions.find(option => option.value === helper.validation.values.product_tax)}
                            onChange={helper.handleTaxAplicableOptionsChange}
                            onBlur={helper.validation.handleBlur}
                            id="product_tax"
                        />                        
                        {
                            helper.validation.touched.product_tax && helper.validation.errors.product_tax ?
                                <div id="product_tax" className="text-red-500">{helper.validation.errors.product_tax}</div>
                                : null
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
                    <div>
                        <label htmlFor="publish_date_time" className="inline-block mb-2 text-base font-medium">Publish Date & Time</label>
                        <Flatpickr
                            id="publish_date_time"
                            name="publish_date_time"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            options={{
                                dateFormat: "d M, Y",
                                enableTime: true,
                            }}
                            value={helper.validation.values.publish_date_time}                        
                            onChange={helper.handlePublishDateTimeOptionsChange}
                            onBlur={helper.validation.handleBlur}
                            placeholder='Select date & time'
                        />                        
                        {
                            helper.validation.touched.publish_date_time && helper.validation.errors.publish_date_time ?
                                <div id="publish_date_time" className="text-red-500">{helper.validation.errors.publish_date_time}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="status" className="inline-block mb-2 text-base font-medium">Status</label>
                        <Select
                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            options={helper.statusProductOptions}
                            isSearchable={false}
                            name="status"
                            value={helper.statusProductOptions.find(option => option.value === helper.validation.values.status)}
                            onChange={helper.handleStatusProductOptionsChange}
                            onBlur={helper.validation.handleBlur}
                            id="status"
                        /> 
                        {
                            helper.validation.touched.status && helper.validation.errors.status ?
                                <div id="status" className="text-red-500">{helper.validation.errors.status}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="visibility" className="inline-block mb-2 text-base font-medium">Visibility</label>
                        <Select
                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            options={helper.visibilityProductOptions}
                            isSearchable={false}
                            name="visibility"
                            value={helper.visibilityProductOptions.find(option => option.value === helper.validation.values.visibility)}
                            onChange={helper.handleVisibilityProductOptionsChange}
                            onBlur={helper.validation.handleBlur}
                            id="visibility"
                        />
                        {
                            helper.validation.touched.visibility && helper.validation.errors.visibility ?
                                <div id="visibility" className="text-red-500">{helper.validation.errors.visibility}</div>
                                : null
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <label htmlFor="tags" className="inline-block mb-2 text-base font-medium">Product Tags</label>
                        <input
                            type="text"
                            id="tags"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Product Tags"
                            value={helper.validation.values.tags}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.tags && helper.validation.errors.tags ?
                                <div id="tags" className="text-red-500">{helper.validation.errors.tags}</div>
                                : null
                        }
                </div>
                
                <div className="flex justify-between gap-2 mt-5">
                    <button type="button" data-action="prev" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"><MoveLeft className="inline-block h-4 mr-1 rtl:rotate-180" /> <span className="align-middle">Previous</span></button>
                    <button type="submit" data-action="next" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Next</span> <MoveRight className="inline-block h-4 ml-1 rtl:rotate-180" /></button>
                </div>
            </form>
        </React.Fragment>
    );
}