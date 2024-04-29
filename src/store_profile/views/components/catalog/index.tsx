import React from "react";

import FilterCard from "./filters";
import ProductsCard from "./products";
import PaginationCard from "./pagination";
import SortFilter from "./sort_filter";



const Catalog = () => {

    const [list, setList] = React.useState<boolean>(true);

    return (
        <React.Fragment>                        
            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-x-5">                
                <div className="hidden 2xl:col-span-3 2xl:block">
                    <FilterCard />                  
                </div>
                <div className="2xl:col-span-9">                    
                    <SortFilter list={list} setList={setList}/>
                    <ProductsCard list={list}/>
                    <PaginationCard />                    
                </div>
            </div>
        </React.Fragment>
    );
};

export default Catalog;