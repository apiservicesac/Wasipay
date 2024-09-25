import { Search } from "lucide-react";
import TableContainer from "@/common/TableContainer";
import { Helpers } from "./helpers";
import { useAppSelector } from "@/core/redux/hooks";
import { ProductItemEntity } from "@/features/product/domain/entities";

export const ProductsView = () => {
       
    const products = useAppSelector((state) => state.productReducer.products)
    const { columns } = Helpers()
    
    return (
        <>            
            <div className="card  mt-4">                    
                <div className="card-body">
                    {products && products.length > 0 ?
                        <TableContainer
                            isAddItem={true}
                            routeAddItem={"/dashboard/product/create"}
                            isGlobalFilter={true}
                            isPagination={true}
                            columns={(columns || [])}
                            data={(products.flatMap((item: ProductItemEntity) => item.product) || [])}
                            customPageSize={7}
                            divclassName="overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="text-left bg-slate-100 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center gap-4 px-4 mt-4 md:flex-row"/>
                        :(
                            <div className="noresult">
                                <div className="py-6 text-center">
                                    <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                                    <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 199+ product We did not find any product for you search.</p>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
}