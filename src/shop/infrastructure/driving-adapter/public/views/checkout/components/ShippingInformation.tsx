export const ShippingInformation = ({ helper }:{ helper: any }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="mb-4 text-15">Shipping Information</h6>
                <form action="#!">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
                        <div className="xl:col-span-6">
                            <label htmlFor="first_name" className="inline-block mb-2 text-base font-medium">First Name</label>
                            <input 
                                type="text" 
                                name="first_name" 
                                id="first_name" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="Enter First Name" 
                                value={helper.validation.values.first_name}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.first_name && helper.validation.errors.first_name ?                                            
                                    <div id="first_name" className="text-red-500">{helper.validation.errors.first_name}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-6">
                            <label htmlFor="last_name" className="inline-block mb-2 text-base font-medium">Last Name</label>
                            <input 
                                type="text" 
                                name="last_name" 
                                id="last_name" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="Enter Last Name" 
                                value={helper.validation.values.last_name}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.last_name && helper.validation.errors.last_name ?                                            
                                    <div id="last_name" className="text-red-500">{helper.validation.errors.last_name}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-6">
                            <label htmlFor="phone_number" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                            <input 
                                type="text" 
                                name="phone_number" 
                                id="phone_number" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="(51) 999 999 999" 
                                value={helper.validation.values.phone_number}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                                />
                                {
                                    helper.validation.touched.phone_number && helper.validation.errors.phone_number ?                                            
                                    <div id="phone_number" className="text-red-500">{helper.validation.errors.phone_number}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-6">
                            <label htmlFor="email" className="inline-block mb-2 text-base font-medium">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="Enter email" 
                                value={helper.validation.values.email}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.email && helper.validation.errors.email ?                                            
                                    <div id="email" className="text-red-500">{helper.validation.errors.email}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-12">
                            <label htmlFor="street" className="inline-block mb-2 text-base font-medium">Street Address</label>
                            <input 
                                type="text" 
                                name="street" 
                                id="street" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="Street address" 
                                value={helper.validation.values.street}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.street && helper.validation.errors.street ?                                            
                                    <div id="street" className="text-red-500">{helper.validation.errors.street}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-12">
                            <label htmlFor="city" className="inline-block mb-2 text-base font-medium">Town/City</label>
                            <input 
                                type="text" 
                                name="city" 
                                id="city" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="Town/City" 
                                value={helper.validation.values.city}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.city && helper.validation.errors.city ?                                            
                                    <div id="city" className="text-red-500">{helper.validation.errors.city}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-4">
                            <label htmlFor="state" className="inline-block mb-2 text-base font-medium">State</label>
                            <input 
                                type="text" 
                                name="state" 
                                id="state" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="State" 
                                value={helper.validation.values.state}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.state && helper.validation.errors.state ?                                            
                                    <div id="state" className="text-red-500">{helper.validation.errors.state}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-4">
                            <label htmlFor="country" className="inline-block mb-2 text-base font-medium">Country</label>
                            <input 
                                type="text" 
                                disabled={true}
                                name="country" 
                                id="country" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="State" 
                                value={helper.validation.values.country}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.country && helper.validation.errors.country ?                                            
                                    <div id="country" className="text-red-500">{helper.validation.errors.country}</div>
                                : null
                            }
                        </div>
                        <div className="xl:col-span-4">
                            <label htmlFor="postal_code" className="inline-block mb-2 text-base font-medium">ZipCode</label>
                            <input 
                                type="text" 
                                name="postal_code" 
                                id="postal_code" 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                placeholder="ZipCode"
                                value={helper.validation.values.postal_code}
                                onChange={helper.validation.handleChange}
                                onBlur={helper.validation.handleBlur}
                            />
                            {
                                helper.validation.touched.postal_code && helper.validation.errors.postal_code ?                                            
                                    <div id="postal_code" className="text-red-500">{helper.validation.errors.postal_code}</div>
                                : null
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}