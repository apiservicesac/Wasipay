import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ActionCard = () => {
    return (
        <div className="card">
            <div className="card-body p-4 mt-4">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
                    <div className="xl:col-span-3">
                        <div className="relative">
                            <input type="text" className="pl-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={() => {

                            }} />
                            <Search className="inline-block size-4 absolute left-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1 lg:text-right xl:col-span-2 xl:col-start-11">
                        <Link to="/dashboard/product/create" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Plus className="inline-block size-4" /> <span className="align-middle">Add Product</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ActionCard;