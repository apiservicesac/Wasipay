import React from "react";

import { ProductsComponent } from "./components/products";
import { PaginationComponent } from "./components/pagination";
import SortFilterComponent from "./components/sort_filter";
import { FilterComponent } from "./components/sort_filter/components/filters";
import { HelperStore } from "./helper";

export const Store = () => {

    const helper = HelperStore()

    return (
        <React.Fragment>                        
            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-x-5">                
                <div className="hidden 2xl:col-span-3 2xl:block">
                    <FilterComponent />                  
                </div>
                <div className="2xl:col-span-9">                    
                    <SortFilterComponent helper={helper} />                    
                    <ProductsComponent helper={helper} />
                    <PaginationComponent />                    
                </div>
            </div>
        </React.Fragment>
    );
};