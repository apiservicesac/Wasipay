import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProductCart } from '@/redux/features/cartSlice';


export const ProductsComponent = ({ list }: { list: boolean }) => {

    const dispatch = useAppDispatch()
    const products = useAppSelector((state) => state.productReducer.products)

    return (
        <div className={`grid grid-cols-1 mt-5 md:grid-cols-2 [&.gridView]:grid-cols-1 xl:grid-cols-4 group [&.gridView]:xl:grid-cols-1 gap-x-5 ${!list && "gridView"}`} id="cardGridView">

            {(products || []).map((item: any, key: number) => (
                <div className="card md:group-[.gridView]:flex relative" key={key}>
                    <div className="relative group-[.gridView]:static p-8 group-[.gridView]:p-5">
                        {/* <Link to="#!" className={`absolute group/item toggle-button top-6 right-6 ${item.isFav && "active"}`} onClick={(e) => btnFav(e.target)}>
                            <Heart className="size-5 text-slate-400 fill-slate-200 transition-all duration-150 ease-linear dark:text-zink-200 dark:fill-zink-600 group-[.active]/item:text-red-500 dark:group-[.active]/item:text-red-500 group-[.active]/item:fill-red-200 dark:group-[.active]/item:fill-red-500/20 group-hover/item:text-red-500 dark:group-hover/item:text-red-500 group-hover/item:fill-red-200 dark:group-hover/item:fill-red-500/20" />
                        </Link> */}
                        <div className="group-[.gridView]:p-3 group-[.gridView]:bg-slate-100 dark:group-[.gridView]:bg-zink-600 group-[.gridView]:inline-block rounded-md">
                            <img src={item.file[0].url} alt="" className="group-[.gridView]:h-16" />
                        </div>
                    </div>
                    <div className="card-body !pt-0 md:group-[.gridView]:flex group-[.gridView]:!p-5 group-[.gridView]:gap-3 group-[.gridView]:grow">
                        <div className="group-[.gridView]:grow">
                            <h6 className="mb-1 truncate transition-all duration-200 ease-linear text-15 hover:text-custom-500"><Link to="/apps-ecommerce-product-overview">{item.name}</Link></h6>

                            {/* <div className="flex items-center text-slate-500 dark:text-zink-200">
                                <div className="mr-1 text-yellow-500 shrink-0 text-15">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-line"></i>
                                </div>
                                ({item. })
                            </div> */}
                            <h5 className="mt-4 text-16">S/. {item.price} <small className="font-normal line-through text-slate-500 dark:text-zink-200">{item.discount !== 0 ? item.discount : ''}</small></h5>
                        </div>

                        <div className="flex items-center gap-2 mt-4 group-[.gridView]:mt-0 group-[.gridView]:self-end">
                            <button type="button" onClick={() => dispatch(addProductCart(item))} className="w-full bg-white border-dashed text-slate-500 btn border-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:text-zink-200 dark:border-zink-400 dark:ring-zink-400/20 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:focus:bg-zink-600 dark:focus:text-zink-100 dark:active:bg-zink-600 dark:active:text-zink-100"><ShoppingCart className="inline-block size-3 leading-none" /> <span className="align-middle">Add to Cart</span></button>
                            
                            <a href="#!" className="text-xl w-[50px] flex items-center justify-center text-white transition-all duration-200 ease-linear bg-green-500 rounded size-9 hover:bg-green-500 dark:bg-pink-500/20 dark:hover:bg-pink-500/30">                            
                                <i className="ri-whatsapp-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}