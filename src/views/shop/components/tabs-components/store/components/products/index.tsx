import { Search, ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import { ProductEntity } from '@/features/product/domain/entities';
import { formatCurrency } from '@/common/utils/format';

export const ProductsComponent = ({ props, helper }: { props:any, helper:  any }) => {

    if (!helper.data || helper.data.length === 0) {
        return (
            <div className="noresult">
                <div className="py-6 text-center">
                    <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                    <h5 className="mt-2 mb-1">{props.t("Sorry! No Results Found")}</h5>
                    <p className="mb-0 text-slate-500 dark:text-zinc-200">{props.t("We are working to bring you the best deals from this store!")}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`grid grid-cols-2 mt-5 md:grid-cols-3 [&.gridView]:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 group [&.gridView]:xl:grid-cols-1 gap-x-5 ${!helper.list && "gridView"}`} id="cardGridView">

            {(helper.data || []).map((item: ProductEntity) => (
                <div id={item?.id} key={item?.id} className="card md:group-[.gridView]:flex relative">

                    {item?.discount && item?.discount != "0" && (
                        <div className="z-50 absolute top-0 right-0 bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-bl-lg">
                            {item.discount}
                        </div>
                    )}


                    <div className="relative group-[.gridView]:static p-3 md:p-5 group-[.gridView]:p-2">
                        <div className="group-[.gridView]:p-3 group-[.gridView]:bg-slate-100 dark:group-[.gridView]:bg-zink-600 group-[.gridView]:inline-block rounded-md flex justify-center items-center">
                            <img 
                            src={item?.image ? item.image.split(',')[0].trim() : ''} 
                            alt="" 
                            className="h-32 w-32 object-cover group-[.gridView]:h-16 group-[.gridView]:w-16"
                            />                        
                        </div>
                    </div>

                    <div className="p-3 md:card-body !pt-0 md:group-[.gridView]:flex group-[.gridView]:!p-5 group-[.gridView]:gap-3 group-[.gridView]:grow">
                        <div className="group-[.gridView]:grow">
                            <h6 className="mb-1 text-left transition-all duration-200 text-xs md:text-15 hover:text-custom-500 line-clamp-1 xl:line-clamp-2 2xl:line-clamp-2">
                                <Link to={item?.url!} target='_blank'>{item.title}</Link>
                            </h6>
                            <div className="font-semibold mt-2 text-13 text-black">
                                <p>Precio: </p><p>{formatCurrency.format(parseFloat(item.price!))}</p>
                            </div>
                            <div className="font-semibold mt-2 text-13 text-green-600">
                                <p>Precio Oferta: </p> <p>{formatCurrency.format(parseFloat(item.price_offer!))}</p>
                            </div>
                            <div className="font-semibold mt-2 text-13 text-red-600">
                                <p>Precio Tarjeta: </p> <p>{formatCurrency.format(parseFloat(item.price_card!))}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mt-4 group-[.gridView]:mt-0 group-[.gridView]:self-end">
                            <Link type="button" to={item?.url!} target='_blank' className="w-full bg-white border-dashed text-slate-500 btn border-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:text-zink-200 dark:border-zink-400 dark:ring-zink-400/20 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:focus:bg-zink-600 dark:focus:text-zink-100 dark:active:bg-zink-600 dark:active:text-zink-100"><ShoppingCart className="inline-block size-3 leading-none" /> <span className="align-middle">{props.t("Buy Now")}</span></Link>                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
