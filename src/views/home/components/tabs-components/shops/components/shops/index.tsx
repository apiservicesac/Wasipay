import { Link } from "react-router-dom";
import { ShopEntity } from '@/features/shop/domain/entities';
import { ShoppingBagIcon } from "lucide-react";
import { useAppSelector } from "@/core/redux/hooks";

export const ShopsComponent = () => {

    const shops = useAppSelector((state) => state.shopReducer.shops)

    return (
        <div className={`grid grid-cols-2 mt-5 lg:mt-0 md:grid-cols-3 [&.gridView]:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 group [&.gridView]:xl:grid-cols-1 gap-x-5`} id="cardGridView">

            {(shops || []).map((item: ShopEntity) => (
                <div className="card" id={item?.id} key={item?.id}>
                    <div className="card-body">
                        <div className="relative flex items-center justify-center size-16 mx-auto text-lg rounded-full bg-slate-100 dark:bg-zink-600">
                            {item.image ? <img src={item.image.url} alt="" className="size-16 rounded-full" /> : "#"}
                        </div>
                        <div className="mt-4 text-center">
                            <h5 className="mb-1 text-16"><Link to="/pages-account">{item.name}</Link></h5>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <Link to={`/shop/${item.id}`} className="bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500 grow"><ShoppingBagIcon className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Open Shop</span></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
