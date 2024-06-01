import React from "react";
import Header from "../Header";
import { LogOut, StoreIcon, User2 } from 'lucide-react';
import { Dropdown } from '@/common/components/Dropdown';
import { Link } from "react-router-dom";

export const LayoutBasic = ({ children }: any) => {

    document.title = "Web";

    React.useEffect(() => {
        document.documentElement.classList.add("scroll-smooth", "group");
        document.body.classList.add('text-base', 'bg-body-bg', 'text-body', 'font-public', 'dark:text-zink-100', 'dark:bg-zink-800', 'group-data-[skin=bordered]:bg-body-bordered', 'group-data-[skin=bordered]:dark:bg-zink-700');
        return () => {
          document.documentElement.classList.remove("scroll-smooth", "group");
          document.body.classList.remove('text-base', 'bg-body-bg', 'text-body', 'font-public', 'dark:text-zink-100', 'dark:bg-zink-800', 'group-data-[skin=bordered]:bg-body-bordered', 'group-data-[skin=bordered]:dark:bg-zink-700');
        };
    }, []);

    return (        
        <div className="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
        <Header>
            <div className="relative flex items-center h-header">
                <Link to="/" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover">
                    <StoreIcon className="inline-block size-5 stroke-1 fill-slate-100"></StoreIcon>
                </Link>
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
                        <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                            <a className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                            href={"/logout"}><LogOut className="inline-block size-4"></LogOut> Sign Out</a>
                        </li>
                    </ul>
                </Dropdown.Content>
            </Dropdown>
            
        </Header>
        <div className='relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm'>
        <div className="group-data-[sidebar-size=lg]:md:mr-vertical-menu group-data-[sidebar-size=md]:mr-vertical-menu-md group-data-[sidebar-size=sm]:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.8)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
            <div className='container-fluid group-data-[content=boxed]:max-w-boxed mx-auto xl:mx-40 lg:mx-32 md:mx-10 sm:mx-20'>
                {children}
            </div>
        </div>
        </div>
    </div>
    );
}