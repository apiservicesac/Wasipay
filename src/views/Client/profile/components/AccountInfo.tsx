import React from "react";
import { MoreHorizontal, UserCircle } from "lucide-react";

// IMage
import avatar1 from "@/assets/images/profile/profile-icon.png";
import { Dropdown } from "@/common/components/Dropdown";
import { UserEntity } from "@/Auth/domain/entities";
import { UserRole } from "@/Auth/domain/enums";

export const AccountInfo = ({ className, user }: {className:any, user: UserEntity}) => {

    return (
        <React.Fragment>
            <div className={className}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 2xl:grid-cols-12">
                <div className="lg:col-span-2 2xl:col-span-1">
                        <div className="border-2  relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
                            <img src={avatar1} alt="" className="object-cover border-0 rounded-full img-thumbnail user-profile-image" />                            
                        </div>
                    </div>
                    <div className="lg:col-span-10 2xl:col-span-9">
                        <h5 className="mb-1">{user.first_name} {user.last_name}</h5>
                        <div className="flex gap-3 mb-4">
                            <p className="text-slate-500 dark:text-zink-200"><UserCircle className="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></UserCircle> {user.role === UserRole.ADMIN ? 'Admin' : 'User'}</p>
                        </div>                                         
                    </div>
                    <div className="lg:col-span-12 2xl:col-span-2">
                        <div className="flex gap-2 2xl:justify-end">
                            <Dropdown className="relative">
                                <Dropdown.Trigger className="flex items-center justify-center size-[37.5px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="accountSettings" data-bs-toggle="dropdown">
                                    <MoreHorizontal className="size-4"></MoreHorizontal>
                                </Dropdown.Trigger>
                                <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white dark:bg-zink-600 rounded-md shadow-md dropdown-menu min-w-[10rem]" aria-labelledby="accountSettings">
                                    <li className="px-3 mb-2 text-sm text-slate-500">
                                        Payments
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Create Invoice</a>
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Pending Billing</a>
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Genarate Bill</a>
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Subscription</a>
                                    </li>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}