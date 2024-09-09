import { Search } from "lucide-react";

const SortFilterComponent = () => {

    return (
        <div className="flex flex-wrap items-center gap-2 justify-between">
            <div className="flex gap-2 shrink-0">                
            </div>
            <div className="relative flex-grow lg:flex-grow-0">
                <input type="text" className="w-full xl:w-[400px] pr-8 search form-input border-slate-200 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-500 placeholder:text-slate-400" placeholder="Search for ..." autoComplete="off" />
                <Search className="inline-block size-4 absolute right-2.5 top-2.5 text-slate-500 fill-slate-100" />
            </div> 
        </div>
    );
}

export default SortFilterComponent;
