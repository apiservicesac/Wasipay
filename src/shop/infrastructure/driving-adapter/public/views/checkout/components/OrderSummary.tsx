import { formatCurrency } from "@/common/utils/format";
import { ProductItemEntity } from "@/shop/domain/entities";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export const OrderSummary = ({ helper }:{ helper: any }) => {
    return (
        <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Orders Summary</h6>                            
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>

                                        {
                                            (helper.filter_product_cart || [])?.map((item: ProductItemEntity) => (
                                                <tr key={item.product?.id}>
                                                    <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500">
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0">
                                                                <img src={item.product?.images && item.product?.images.length !== 0 ? item.product?.images![0].url : null} alt="" className="h-8" />
                                                            </div>
                                                            <div className="grow">
                                                                <h6 className="mb-1 text-15"><Link to="/apps-ecommerce-product-overview" className="transition-all duration-300 ease-linear hover:text-custom-500">{item.product?.name}</Link></h6>
                                                                <p className="text-slate-500 dark:text-zink-200">{formatCurrency.format(item.product?.price!)} x {item.quantity}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left">{formatCurrency.format(item.total_price!)}</td>
                                                </tr>
                                            ))
                                        }
                                        
                                        <tr>
                                            <td className="px-3.5 pt-4 pb-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Sub Total
                                            </td>
                                            <td className="px-3.5 pt-4 pb-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">{formatCurrency.format(helper.cart_price.subtotal_price!)}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Estimated Tax (18%)
                                            </td>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">{formatCurrency.format(helper.cart_price.total_tax!)}</td>
                                        </tr>
                                        <tr className="font-semibold">
                                            <td className="px-3.5 pt-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Total Amount (PEN)
                                            </td>
                                            <td className="px-3.5 pt-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">{formatCurrency.format(helper.cart_price.total_price!)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4">
                                <button onClick={helper.onHandleSubmitOrder} type="button" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Place Order</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180" /></button>
                            </div>
                        </div>
                    </div>
    );
}