import { Dropdown } from "@/common/components/Dropdown"
// import { useProduct } from "@/shop/infrastructure/driving-adapter/hooks/useProduct";
import { ChevronDown } from "lucide-react"
import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom"

interface SortByProps extends WithTranslation {

}

const SortBy: React.FC<SortByProps> = () => {

    const [value, setValue] = React.useState<string>('')
    // const { sortBy } = useProduct()

    return (
        <Dropdown className="relative dropdown">
            <Dropdown.Trigger href="#!" className="min-w-[186px] bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown">
                <span className="2xl:inline-block">Sort by:</span> 
                <b className="font-medium">{value}</b>
                <ChevronDown className="inline-block size-4 ml-1" />
            </Dropdown.Trigger>

            <Dropdown.Content className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[186px]" aria-labelledby="dropdownMenuButton">
                <li>
                    <Link type="button" onClick={() => {
                        setValue("Lowest Price")
                        // sortBy(true)
                    }} className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!">Lowest Price</Link>
                </li>
                <li>
                    <Link type="button" onClick={() => {
                        setValue("Highest Price")
                        // sortBy(false)
                    }} className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" to="#!">Highest Price</Link>
                </li>
            </Dropdown.Content>
        </Dropdown>
    )
}

export default withTranslation()(SortBy)