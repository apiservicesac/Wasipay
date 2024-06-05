import React from "react";
import Select from 'react-select';
import { useQueryClient } from "@tanstack/react-query";
import { ShopEntity } from "@/shop/domain/entities";

interface Option { label: string; value: string; isDisabled?: boolean };

const cityOptions: Option[] = [
    { value: 'Madrid', label: 'Madrid' },
    { value: 'Toronto', label: 'Toronto' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'London', label: 'London' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Malaga', label: 'Malaga' },
    { value: 'Washington', label: 'Washington', isDisabled: true },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Marseille', label: 'Marseille' },
    { value: 'Hamburg', label: 'Hamburg' },
    { value: 'Munich', label: 'Munich' },
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Berlin', label: 'Berlin' },
    { value: 'Montreal', label: 'Montreal' },
    { value: 'New York', label: 'New York' },
    { value: 'Michigan', label: 'Michigan' },
];

const countryOptions: Option[] = [
    { value: 'USA', label: 'USA' },
    { value: 'Toronto', label: 'Toronto' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'London', label: 'London' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Malaga', label: 'Malaga' },
    { value: 'Washington', label: 'Washington', isDisabled: true },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Marseille', label: 'Marseille' },
    { value: 'Hamburg', label: 'Hamburg' },
    { value: 'Munich', label: 'Munich' },
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Berlin', label: 'Berlin' },
    { value: 'Montreal', label: 'Montreal' },
    { value: 'New York', label: 'New York' },
    { value: 'Michigan', label: 'Michigan' },
];



export const ProfileInfo = () => {
    const queryClient =  useQueryClient()

    const shop : ShopEntity | undefined = queryClient.getQueryData(['shop_profile'])

    const [formData, setFormData] = React.useState({
        name: shop?.name || "",
        description: shop?.description || "",
        phone: shop?.phone || "",
        email: shop?.email || "",
        address: shop?.address || "",
    });

    const handleChange = (e:any) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Shop Profile</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Update your photo and personal details here easily.</p>
                    <form action="#!">
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-6">
                                <label htmlFor="name" className="inline-block mb-2 text-base font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="description" className="inline-block mb-2 text-base font-medium">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="phone" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="+214 8456 8459 23"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="email" className="inline-block mb-2 text-base font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="address" className="inline-block mb-2 text-base font-medium">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="district" className="inline-block mb-2 text-base font-medium">District</label>
                                <Select
                                    className="border-slate-300 focus:outline-none focus:border-custom-500"
                                    id="choices-single-no-sorting"
                                    name="choices-single-no-sorting"
                                    data-choices
                                    data-choices-sorting-false
                                    options={cityOptions}
                                    isSearchable={true}
                                />
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="province" className="inline-block mb-2 text-base font-medium">Province</label>
                                <Select
                                    className="border-slate-300 focus:outline-none focus:border-custom-500"
                                    id="choices-single-no-sorting"
                                    name="choices-single-no-sorting"
                                    data-choices
                                    data-choices-sorting-false
                                    options={cityOptions}
                                    isSearchable={true}
                                />
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="city" className="inline-block mb-2 text-base font-medium">City</label>
                                <Select
                                    id="choices-single-no-sorting"
                                    name="choices-single-no-sorting"
                                    data-choices
                                    data-choices-sorting-false
                                    options={countryOptions}
                                    isSearchable={true}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Updates</button>
                            <button type="button" className="text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};