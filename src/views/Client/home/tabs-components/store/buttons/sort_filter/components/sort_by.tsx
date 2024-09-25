import { Dropdown } from "@/common/components/Dropdown";
import { setSortBy } from "@/core/redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { ChevronDown } from "lucide-react";
import { withTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";


const SortBy = (props: any) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const selectedSort = useAppSelector((state) => state.productReducer);

    const dispatch = useAppDispatch()

    const sortOptions = [
        { label: "Lowest Price", sortBy: "price", sortOrder: "ASC" },
        { label: "Highest Price", sortBy: "price", sortOrder: "DESC" },        
    ];        

    return (
        <Dropdown  className="relative dropdown" >
            <Dropdown.Trigger   href="#!" className="min-w-[186px] bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown">
                <span className="2xl:inline-block">Sort by:</span>
                <b className="font-medium ml-1">{props.t(selectedSort.label)}</b>
                <ChevronDown className="inline-block size-4 ml-1" />
            </Dropdown.Trigger>

            <Dropdown.Content   className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[186px]" aria-labelledby="dropdownMenuButton">
                <span className="px-4 font-semibold">Price</span>
                {sortOptions.slice(0, 2).map(({ label, sortBy, sortOrder }) => (                    
                    <span 
                    key={`${sortBy}-${sortOrder}`}
                    className="cursor-pointer block px-6 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500"
                    onClick={() => {
                        dispatch(setSortBy({label, sortBy, sortOrder}))
                        navigate(`?page=1&sortby=${sortBy}&sortorder=${sortOrder}&search=${search}`)                            
                    }}
                >
                    {props.t(label)}
                </span>
                ))}                
            </Dropdown.Content>
        </Dropdown>
    );
};

export default withTranslation()(SortBy);
