import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PaginationComponent = () => {
    return (
        <div className="flex flex-col items-center mb-5 md:flex-row">
            <div className="mb-4 grow md:mb-0">
                <p className="text-slate-500">Showing <b>0</b> of <b>0</b> Results</p>
            </div>
            <ul className="flex flex-wrap items-center gap-2 shrink-0">
                <li>
                    <Link to="#!" className="inline-flex items-center justify-center bg-white h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 [&.active]:text-white [&.active]:bg-custom-500 [&.active]:border-custom-500 [&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto">
                        <ChevronLeft className="size-4 mr-1 rotate-180" /> 
                        <span className="hidden md:flex">Prev</span>
                    </Link>
                </li>
                <li>
                    <Link to="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 [&.active]:text-white [&.active]:bg-custom-500 [&.active]:border-custom-500 [&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto active">1</Link>
                </li>
                <li>
                    <Link to="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 [&.active]:text-white [&.active]:bg-custom-500 [&.active]:border-custom-500 [&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto">2</Link>
                </li>
                <li>
                    <Link to="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 [&.active]:text-white [&.active]:bg-custom-500 [&.active]:border-custom-500 [&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto">3</Link>
                </li>
                <li>
                    <Link to="#!" className="inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 [&.active]:text-white [&.active]:bg-custom-500 [&.active]:border-custom-500 [&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto">4</Link>
                </li>
                <li>
                    <Link to="#!" className="inline-flex items-center justify-center bg-white h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 [&.active]:text-white [&.active]:bg-custom-500 [&.active]:border-custom-500 [&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto">
                        <span className="hidden md:flex">Next</span>
                        <ChevronRight className="size-4 ml-1 rotate-180" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
