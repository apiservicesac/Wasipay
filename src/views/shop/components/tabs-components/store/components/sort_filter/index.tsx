import { Filter, LayoutGrid, List, Search } from "lucide-react";
import { FilterDrawer } from "./components/filter_drawer";
import Sortby from "./components/sort_by";
import IconButton from "./components/IconButton";

const SortFilterComponent = ({ helper } : { helper: any }) => {

    return (
        <div className="flex flex-wrap items-center gap-2 justify-between">
            <div className="flex gap-2 shrink-0">
                <Sortby />

                <button type="button" onClick={helper.drawerEndToggle} className="2xl:hidden flex items-center justify-center size-[37.5px] p-0 bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100">
                    <Filter className="size-4" />
                </button>

                <FilterDrawer drawerEndToggle={helper.drawerEndToggle} drawerFilter={helper.drawerFilter} />

                <IconButton id="listView" isActive={!helper.list} onClick={() => helper.setList(false)}>
                    <List className="size-4" />
                </IconButton>

                <IconButton id="gridView" isActive={helper.list} onClick={() => helper.setList(true)}>
                    <LayoutGrid className="size-4" />
                </IconButton>
            </div>
            <div className="relative flex-grow lg:flex-grow-0">
                <input type="text" className="w-full xl:w-[400px] pr-8 search form-input border-slate-200 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-500 placeholder:text-slate-400" placeholder="Search for ..." autoComplete="off"  onChange={(e) => helper.filterSearchData(e)} />
                <Search className="inline-block size-4 absolute right-2.5 top-2.5 text-slate-500 fill-slate-100" />
            </div> 
        </div>
    );
}

export default SortFilterComponent;
