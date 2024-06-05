import { LayoutDashboard, LogOut, Settings, ShoppingCart, User2 } from 'lucide-react';
import { Dropdown  }from '@/common/components/Dropdown';
import { Link } from "react-router-dom";
import Header from "@/common/Header";


export const HeaderLayout = ({ cart_products, handleDrawer } : { cart_products : any, handleDrawer : any } ) => {
    return (
        <Header>
            <div className="relative flex items-center h-header">
                <button type="button" data-drawer-target="cartSidePenal" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark" onClick={handleDrawer}>
                    <ShoppingCart className="inline-block size-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"></ShoppingCart>
                    {cart_products && cart_products?.length !== 0 && (
                        <span className="absolute flex items-center justify-center w-[16px] h-[16px] text-xs text-white bg-red-400 border-white rounded-full -top-1 -right-1">{cart_products?.length}</span>
                    )}
                </button>
            </div>
            <div className="relative flex items-center h-header">
                <Link to={'/dashboard'} type="button" data-drawer-target="cartSidePenal" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark">
                    <LayoutDashboard className="inline-block size-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand" />
                </Link>
            </div>

            <Dropdown className="relative flex items-center h-header">
                <Dropdown.Trigger type="button" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark" data-bs-toggle="dropdown">
                    <User2 className="inline-block size-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"/>
                </Dropdown.Trigger>
                <Dropdown.Content placement="right-end" className="absolute z-50 p-4 text-left bg-white rounded-md shadow-md !top-4 dropdown-menu min-w-[14rem] dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                    <h6 className="mb-2 text-sm font-normal text-slate-500 dark:text-zink-300">Bienvenido a RedShop</h6>
                    <ul>
                        <li>
                            <Link className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                            to={"/profile"}><User2 className="inline-block size-4"></User2> Profile</Link>
                        </li>
                        {/* <li>
                            <Link className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                            to={"/dashboard"}><Settings className="inline-block size-4"></Settings> Dashboard </Link>
                        </li> */}
                        <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                            <Link className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                            to={"/logout"}><LogOut className="inline-block size-4"></LogOut> Sign Out</Link>
                        </li>
                    </ul>
                </Dropdown.Content>
            </Dropdown>                              
        </Header>
    );
}