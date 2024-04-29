import React from "react";
import Header from "./Header";
import CartDrawer from "./CartDrawer";
import { LogOut, Settings, ShoppingCart, Store, User2 } from 'lucide-react';
import { Dropdown  }from '@/common/components/Dropdown';
import { Link } from "react-router-dom";

const Layout = ({ children }: any) => {

    document.title = "Web";

    
    const [show, setShow] = React.useState<boolean>(false);
    const handleDrawer = () => setShow(!show);
    
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
                            to={"/dashboard"}><Settings className="inline-block size-4"></Settings> Dashboard </Link>
                        </li>
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
            <div className='container-fluid xl:mx-40 lg:mx-32 md:mx-10 sm:mx-20'>
                {children}
            </div>
        </div>
        </div>
        <CartDrawer show={show} handleDrawer={handleDrawer} />

        <a href="https://wa.me/51959083710?text=Me gusta tu poto flaca, lo amo, y ti tmbn te amo" target="_blank" className="fixed w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-[35px] z-10 bottom-5 right-5">
            <i className="ri-whatsapp-line"></i>
            </a>
</div>
    );
}

export default Layout;