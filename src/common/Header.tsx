import React from 'react';
import { LogOut, Search, ShoppingCart, Store, User2 } from 'lucide-react';
import { Dropdown } from '@/common/components/Dropdown';
import { Link } from 'react-router-dom';

import logoDark from "@/assets/images/logo-dark.png";

const Header = ({ handleDrawer }: any) => {

    return (
        <React.Fragment>
            <header id="page-topbar" className="w-full md:right-vertical-menu group-data-[sidebar-size=md]:md:right-vertical-menu-md group-data-[sidebar-size=sm]:md:right-vertical-menu-sm group-data-[layout=horizontal]:right-0 fixed right-0 z-[1000] left-0 print:hidden group-data-[navbar=bordered]:m-4 group-data-[navbar=bordered]:[&.is-sticky]:mt-0 transition-all ease-linear duration-300 group-data-[navbar=hidden]:hidden group-data-[navbar=scroll]:absolute group/topbar group-data-[layout=horizontal]:z-[1004]">
                <div className="layout-width">
                    <div className="flex items-center px-4 mx-auto bg-topbar border-b-2 border-topbar group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-brand shadow-md h-header shadow-slate-200/50 group-data-[navbar=bordered]:rounded-md group-data-[navbar=bordered]:group-[.is-sticky]/topbar:rounded-t-none group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:border-zink-700 dark:shadow-none group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-zink-500 group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-md group-data-[navbar=bordered]:shadow-none group-data-[layout=horizontal]:group-data-[navbar=bordered]:rounded-b-none group-data-[layout=horizontal]:shadow-none group-data-[layout=horizontal]:dark:group-[.is-sticky]/topbar:shadow-none">
                        <div className="xl:mx-40 lg:mx-32 md:mx-10 sm:mx-20 flex items-center w-full group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl navbar-header group-data-[layout=horizontal]:xl:pl-3">                                              

                            {/* TODO: CHANGE SEARCH BAR TO ICON BUSSINESS */}
{/* 
                            <div className="px-1">
                                <Link to="#">
                                    <img src={logoDark} alt="" className="h-6 mx-auto" />
                                </Link>                    
                            </div> */}

                            <div className="flex gap-3 ms-auto">

                                {/* AddToCartDrawer */}
                                <div className="relative flex items-center h-header">
                                    <button type="button" data-drawer-target="cartSidePenal" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark" onClick={handleDrawer}>
                                        <ShoppingCart className="inline-block size-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"></ShoppingCart>
                                        <span className="absolute flex items-center justify-center w-[16px] h-[16px] text-xs text-white bg-red-400 border-white rounded-full -top-1 -right-1">3</span>
                                    </button>
                                </div>

                                <Dropdown className="relative flex items-center h-header">
                                    <Dropdown.Trigger type="button" className="inline-block p-0 transition-all duration-200 ease-linear bg-topbar rounded-full text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                        <div className="bg-white-100 rounded-full">
                                            <User2 className="inline-block size-6 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"/>
                                        </div>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content placement="right-end" className="absolute z-50 p-4 text-left bg-white rounded-md shadow-md !top-4 dropdown-menu min-w-[14rem] dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                        <h6 className="mb-2 text-sm font-normal text-slate-500 dark:text-zink-300">Bienvenido a RedShop</h6>
                                        <ul>
                                            <li>
                                                <Link className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                                                to={"/profile"}><User2 className="inline-block size-4"></User2> Profile</Link>
                                            </li>
                                            <li>
                                                <Link className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                                                to={"/dashboard"}><Store className="inline-block size-4"></Store> Dashboard </Link>
                                            </li>
                                            <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                                <a className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                                                href={"/logout"}><LogOut className="inline-block size-4"></LogOut> Sign Out</a>
                                            </li>
                                        </ul>
                                    </Dropdown.Content>
                                </Dropdown>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
