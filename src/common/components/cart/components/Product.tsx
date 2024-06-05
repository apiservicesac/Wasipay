import { ProductItemEntity } from "@/shop/domain/entities";
import { Minus, Plus, Trash } from "lucide-react";
import { HelperCart } from "../helper";

export const ProductItem = ({ item }:{ item:ProductItemEntity }) => {

    const { removeProductCart, decreaseProductQuantity, increaseProductQuantity } = HelperCart()

    return (
        <div className="flex gap-2 product" id={`product${item.product!._id}`}>
            <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                <img src={item.product?.file![0].url} alt="" className="h-8" />
            </div>
            <div className="overflow-hidden grow">
                
                <div className="float-right">
                    <button onClick={() => removeProductCart(item.product!._id!)} className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500">
                        <Trash className="size-4" />
                    </button>
                </div>

                <a href="#!" className="transition-all duration-200 ease-linear hover:text-custom-500">
                    <h6 className="mb-1 text-15">{item.product!.name}</h6>
                </a>
                
                <div className="flex items-center mb-3">
                    <h5 className="text-base product-price"> S/. <span>{item.product!.price}</span></h5>                
                </div>

                <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex text-center input-step">
                        <button onClick={() => decreaseProductQuantity(item.product!._id!)} type="button" className="border size-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 rounded-l transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50">
                            <Minus className="inline-block size-4"></Minus>
                        </button>
                        <input type="number" className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500" value={item.quantity} min="0" max="100" readOnly />
                        <button onClick={() => increaseProductQuantity(item.product!._id!)} type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 rounded-r size-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50">
                            <Plus className="inline-block size-4"></Plus>
                        </button>
                    </div>
                    <h6 className="product-line-price text-[17px]">S/. {item!.total_price}</h6>
                </div>

            </div>
        </div>
    );
}