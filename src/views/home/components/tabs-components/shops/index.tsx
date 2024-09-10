import React from "react";

import ShopsComponent from "./components/shops";
// import { PaginationComponent } from "./components/pagination";
// import { FilterComponent } from "./components/sort_filter/components/filters";
import { Search } from "lucide-react";

export const Shops = () => {

    return (
        <React.Fragment>                        
            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-x-5">                
                {/* <div className="hidden 2xl:col-span-3 2xl:block">    
                    <FilterComponent />                  
                </div> */}
                <div className="2xl:col-span-12">  
                    <div className="flex lg:hidden flex-wrap items-center gap-2 justify-between">
                        <div className="hidden lg:flex gap-2 shrink-0" />
                        <div className="relative flex-grow lg:flex-grow-0">
                            <input type="text" className="w-full xl:w-[400px] pr-8 search form-input border-slate-200 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-500 placeholder:text-slate-400" placeholder="Search for ..." autoComplete="off" />
                            <Search className="inline-block size-4 absolute right-2.5 top-2.5 text-slate-500 fill-slate-100" />
                        </div> 
                    </div>
                    <ShopsComponent />
                    {/* <PaginationComponent /> */}
                </div>
            </div>
        </React.Fragment>
    );
};