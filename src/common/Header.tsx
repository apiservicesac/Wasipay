import { ChevronsLeft } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ children }: { children : React.ReactNode }) => {    

    const navigate = useNavigate()
    return (
        <React.Fragment>
            <header id="page-topbar" className="w-full md:right-vertical-menu group-data-[sidebar-size=md]:md:right-vertical-menu-md group-data-[sidebar-size=sm]:md:right-vertical-menu-sm group-data-[layout=horizontal]:right-0 fixed right-0 z-[1000] left-0 print:hidden group-data-[navbar=bordered]:m-4 group-data-[navbar=bordered]:[&.is-sticky]:mt-0 transition-all ease-linear duration-300 group-data-[navbar=hidden]:hidden group-data-[navbar=scroll]:absolute group/topbar group-data-[layout=horizontal]:z-[1004]">
                <div className="layout-width">
                    <div className="flex items-center px-4 mx-auto bg-topbar border-b-2 border-topbar group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-brand shadow-md h-header shadow-slate-200/50 group-data-[navbar=bordered]:rounded-md group-data-[navbar=bordered]:group-[.is-sticky]/topbar:rounded-t-none group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:border-zink-700 dark:shadow-none group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-zink-500 group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-md group-data-[navbar=bordered]:shadow-none group-data-[layout=horizontal]:group-data-[navbar=bordered]:rounded-b-none group-data-[layout=horizontal]:shadow-none group-data-[layout=horizontal]:dark:group-[.is-sticky]/topbar:shadow-none">
                        <div className="xl:mx-40 lg:mx-32 md:mx-10 sm:mx-20 flex items-center w-full group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl navbar-header group-data-[layout=horizontal]:xl:pl-3">                                              
                            
                            <button
                                onClick={() => navigate(-1)}                                                        
                                type="button"
                                className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-75 ease-linear bg-topbar rounded-md btn hover:bg-slate-100 group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-dark group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-brand group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:dark:border-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[layout=horizontal]:flex group-data-[layout=horizontal]:md:hidden hamburger-icon" id="topnav-hamburger-icon">
                                <ChevronsLeft className="w-5 h-5 group-data-[sidebar-size=sm]:hidden" />
                            </button>

                            <div className="flex gap-3 ms-auto">
                                {children}                                                            
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
