import Drawer from "@/common/components/Drawer";
import { Dropdown } from "@/common/components/Dropdown";
import { ChevronDown, Filter, LayoutGrid, List, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FilterDrawer } from "./filter_drawer";

export const SortFilterComponent = ({ list, setList } : { list: boolean, setList: any}) => {

    const [drawerFilter, setDrawerFilter] = React.useState<boolean>(false);
    const drawerEndToggle = () => setDrawerFilter(!drawerFilter);

    return (
        <div className="flex flex-wrap items-center gap-2">                        
            <div className="flex gap-2 shrink-0">
                <Dropdown className="relative dropdown">
                    <Dropdown.Trigger href="#!" className="bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500 dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown"><span className="hidden 2xl:inline-block">Sort by:</span> <b className="font-medium">Highest Price</b>
                        <ChevronDown className="inline-block size-4 ml-1" />
                    </Dropdown.Trigger>

                    <Dropdown.Content className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[135px] 2xl:min-w-[186px] dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Lowest Price</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Highest Price</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Hight to Low</Link>
                        </li>
                        <li className="pt-2 mt-2 border-t dark:border-zink-300/50">
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">Low to High</Link>
                        </li>
                    </Dropdown.Content>
                </Dropdown>

                <button type="button" onClick={drawerEndToggle} className={`2xl:hidden flex items-center justify-center size-[37.5px] p-0 bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100`}><Filter className="size-4" /></button>
                <FilterDrawer drawerEndToggle={drawerEndToggle} drawerFilter={drawerFilter} />
                <button type="button" id="listView" className={`flex items-center justify-center size-[37.5px] p-0 text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 [&.active]:text-white [&.active]:bg-sky-600 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:[&.active]:bg-sky-500 dark:[&.active]:text-white dark:ring-sky-400/20 ${!list && "active"}`} onClick={() => setList(false)}><List className="size-4" /></button>
                <button type="button" id="gridView" className={`flex items-center justify-center size-[37.5px] p-0 text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 [&.active]:text-white [&.active]:bg-sky-600 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:[&.active]:bg-sky-500 dark:[&.active]:text-white dark:ring-sky-400/20 ${list && "active"}`} onClick={() => setList(true)}><LayoutGrid className="size-4" /></button>

            </div>            
        </div>
    );
}