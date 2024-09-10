import { Dropdown } from "@/common/components/Dropdown"
// import Authorization, { LoggedIn, LoggedOut } from "@/common/security/Authorization"
// import { useUser } from "@/features/user/infrastructure/driving-adapter/hooks/useUser"
// import { LogIn, LogOut, User2 } from "lucide-react"
import { User2 } from "lucide-react"
// import { Link } from "react-router-dom"

export const UserDropdownMenu = () => {

    // const { logout } = useUser()

    return (
        <Dropdown className="relative flex items-center h-header">
            <Dropdown.Trigger type="button" className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-200 ease-linear bg-topbar rounded-md btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:text-topbar-item-dark" data-bs-toggle="dropdown">
                <User2 className="inline-block size-5 stroke-1 fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand"/>
            </Dropdown.Trigger>
            <Dropdown.Content placement="right-end" className="absolute z-50 p-4 text-left bg-white rounded-md shadow-md !top-4 dropdown-menu min-w-[14rem] dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                <h6 className="mb-2 text-sm font-normal text-slate-500 dark:text-zink-300">Bienvenido a Wasipay</h6>
                
                {/* <ul>
                    <Authorization>
                        <LoggedIn>
                            <li>
                                <Link className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                                to={"/profile"}><User2 className="inline-block size-4"></User2> Profile</Link>
                            </li>
                            <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                <button onClick={logout} type="button" className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                                ><LogOut className="inline-block size-4"></LogOut> Sign Out</button>
                            </li>
                        </LoggedIn>
                        <LoggedOut>
                            <li>
                                <Link className="block py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:text-custom-500 focus:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:focus:text-custom-500" 
                                to={"/login"}><LogIn className="inline-block size-4"></LogIn> Sign In</Link>
                            </li>
                        </LoggedOut>
                    </Authorization>
                   
                </ul> */}
            </Dropdown.Content>
        </Dropdown>
    )
}