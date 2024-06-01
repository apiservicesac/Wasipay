import React from "react";

import { ProductsComponent } from "./components/products";
import { PaginationComponent } from "./pagination";
import { FilterComponent } from "./components/filters/filters";
import { SortFilterComponent } from "./components/filters/sort_filter";

export const Store = () => {

    const [list, setList] = React.useState<boolean>(true);

    return (
        <React.Fragment>                        
            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-x-5">                
                <div className="hidden 2xl:col-span-3 2xl:block">
                    <FilterComponent />                  
                </div>
                <div className="2xl:col-span-9">                    
                    <SortFilterComponent list={list} setList={setList}/>
                    <ProductsComponent list={list}/>
                    <PaginationComponent />                    
                </div>
            </div>
        </React.Fragment>
    );
};