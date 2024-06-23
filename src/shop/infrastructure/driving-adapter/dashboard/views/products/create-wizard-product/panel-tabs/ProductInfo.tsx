import React from "react";
import { MoveRight } from "lucide-react";
import Select from 'react-select';
import { ProductInfoHelper } from "./helper/ProductInfoHelper";

export const ProductInfo = () => {

    const helper = ProductInfoHelper()

    return (
        <React.Fragment>
            <h5 className="mb-3">Product Info</h5>
            <form action="#!" onSubmit={helper.onHandleSubmitForm}>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="inline-block mb-2 text-base font-medium">Product Title <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Product Title"
                            value={helper.validation.values.name}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.name && helper.validation.errors.name ?
                            <div className="text-red-500">{helper.validation.errors.name}</div>
                            : null
                        }
                    </div>
                    <div>
                        <label htmlFor="product_code" className="inline-block mb-2 text-base font-medium">Product Code <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            disabled
                            id="product_code"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Product Code"
                            value={helper.validation.values.product_code}
                            onChange={helper.validation.handleChange}
                            onBlur={helper.validation.handleBlur}
                        />
                        {
                            helper.validation.touched.product_code && helper.validation.errors.product_code ?
                                <div id="product_code" className="text-red-500">{helper.validation.errors.product_code}</div>
                                : null
                        }
                    </div>                    
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="product_category" className="inline-block mb-2 text-base font-medium">Product Category <span className="text-red-500">*</span></label>
                        <Select
                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            options={helper.productCategoryOptions}
                            isSearchable={false}
                            name="product_category"
                            value={helper.productCategoryOptions.find(option => option.value === helper.validation.values.product_category)}
                            onChange={helper.handleProductCategoryChange}
                            onBlur={helper.validation.handleBlur}
                            id="product_category"
                        />
                        {
                            helper.validation.touched.product_category && helper.validation.errors.product_category ?
                            <div className="text-red-500">{helper.validation.errors.product_category}</div>
                            : null
                        }
                    </div>
                    <div>
                        <label htmlFor="product_type" className="inline-block mb-2 text-base font-medium">Product Type <span className="text-red-500">*</span></label>
                        <Select
                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            options={helper.productTypeOptions}
                            isSearchable={false}
                            name="product_type"
                            value={helper.productTypeOptions.find((option) => option.value === helper.validation.values.product_type)}
                            onChange={helper.handleProductTypeChange}
                            onBlur={helper.validation.handleBlur}
                            id="product_type"
                        />
                        {
                            helper.validation.touched.product_type && helper.validation.errors.product_type ?
                                <div id="product_type" className="text-red-500">{helper.validation.errors.product_type}</div>
                                : null
                        }
                    </div>                    
                </div>                
                <div className="grid grid-cols-1">
                    <label htmlFor="description" className="inline-block mb-2 text-base font-medium">Description</label>    
                    <textarea 
                        id="description"  
                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"                             
                        placeholder="Enter Description"
                        name="description"
                        value={helper.validation.values.description}
                        onChange={helper.validation.handleChange}
                        onBlur={helper.validation.handleBlur}
                        rows={5} />
                    {
                        helper.validation.touched.description && helper.validation.errors.description ?
                            <div id="description" className="text-red-500">{helper.validation.errors.description}</div>
                            : null
                    }
                </div>                
                <div className="flex justify-end gap-2 mt-5">                    
                    <button type="submit" data-action="next" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Next</span> <MoveRight className="inline-block h-4 ml-1" /></button>
                </div>
            </form>
        </React.Fragment>

    );
}