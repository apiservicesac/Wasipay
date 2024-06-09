import React from "react";
import { ShopProfileTabHelper } from "./helper";

export const ProfileInfo = () => {
    
    const helper = ShopProfileTabHelper()

    React.useEffect(() => {
        helper.UpdateStateFormData()
    }, [helper.shop])

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Shop Profile</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Update your photo and personal details here easily.</p>
                    <form className="mt-10" id="shopProfileTabForm" onSubmit={helper.handleSubmit}>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-6">
                                <label htmlFor="name" className="inline-block mb-2 text-base font-medium">Name <span className="text-sm text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={helper.validation.values.name || ""}
                                    onChange={helper.validation.handleChange}
                                    onBlur={helper.validation.handleBlur}
                                />
                                {helper.validation.touched.name && helper.validation.errors.name ? (
                                    <div id="name-error" className="mt-1 text-sm text-red-500">{helper.validation.errors.name}</div>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="description" className="inline-block mb-2 text-base font-medium">Description <span className="text-sm text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="description"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={helper.validation.values.description || ""}
                                    onChange={helper.validation.handleChange}
                                    onBlur={helper.validation.handleBlur}
                                />
                                {helper.validation.touched.description && helper.validation.errors.description ? (
                                    <div id="description-error" className="mt-1 text-sm text-red-500">{helper.validation.errors.description}</div>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="phone" className="inline-block mb-2 text-base font-medium">Phone Number <span className="text-sm text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="+214 8456 8459 23"
                                    value={helper.validation.values.phone || ""}
                                    onChange={helper.validation.handleChange}
                                    onBlur={helper.validation.handleBlur}
                                />
                                {helper.validation.touched.phone && helper.validation.errors.phone ? (
                                    <div id="phone-error" className="mt-1 text-sm text-red-500">{helper.validation.errors.phone}</div>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="email" className="inline-block mb-2 text-base font-medium">Email <span className="text-sm text-red-500">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your email address"
                                    value={helper.validation.values.email || ""}
                                    onChange={helper.validation.handleChange}
                                    onBlur={helper.validation.handleBlur}
                                />
                                {helper.validation.touched.email && helper.validation.errors.email ? (
                                    <div id="email-error" className="mt-1 text-sm text-red-500">{helper.validation.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="address" className="inline-block mb-2 text-base font-medium">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your address"
                                    value={helper.validation.values.address || ""}
                                    onChange={helper.validation.handleChange}
                                    onBlur={helper.validation.handleBlur}
                                />
                                {/* {helper.validation.touched.address && helper.validation.errors.address ? (
                                    <div id="address-error" className="mt-1 text-sm text-red-500">{helper.validation.errors.address}</div>
                                ) : null} */}
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="city" className="inline-block mb-2 text-base font-medium">City <span className="text-sm text-red-500">*</span></label>
                                <input
                                    type="city"
                                    id="city"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    value={helper.validation.values.city || ""}
                                    onChange={helper.validation.handleChange}
                                    onBlur={helper.validation.handleBlur}
                                />
                                {helper.validation.touched.city && helper.validation.errors.city ? (
                                    <div id="city-error" className="mt-1 text-sm text-red-500">{helper.validation.errors.city}</div>
                                ) : null}
                            </div>                           
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Updates</button>
                            {/* <button type="button" className="text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20">Cancel</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};