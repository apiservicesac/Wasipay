import React from "react";
import { useAppSelector } from "@/core/redux/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const PaginationComponent = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const products: any = useAppSelector((state) => state.productReducer);
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = products.totalPages;
    const maxVisiblePages = 4;

    React.useEffect(() => {
        setCurrentPage(products.page)
    }, [products.page])
 
    // Función para obtener las páginas a mostrar
    const getVisiblePages = () => {
        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    // Funciones para manejar el cambio de página
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);            
            navigate(`?page=${page}&sortby=${products.sortBy}&sortorder=${products.sortOrder}&search=${search}`)
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);            
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    };    

    return (
        <div className="flex flex-col items-center mb-5 md:flex-row">
            <div className="mb-4 grow md:mb-0">
                <p className="text-slate-500">Showing <b>{products.pageSize}</b> of <b>{products.total}</b> Results</p>
            </div>
            <ul className="flex flex-wrap items-center gap-2 shrink-0">
                <li>
                    <button 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        className="inline-flex items-center justify-center bg-white h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 disabled:text-slate-400 disabled:cursor-auto"
                    >
                        <ChevronLeft className="size-4 mr-1 rotate-180" /> 
                        <span className="hidden md:flex">Prev</span>
                    </button>
                </li>
                
                {getVisiblePages().map((page: number) => (
                    <li key={page}>
                        <span
                            onClick={() => goToPage(page)}
                            className={`cursor-pointer inline-flex items-center justify-center bg-white size-8 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 [&.active]:text-white [&.active]:bg-custom-500 [&.active]:border-custom-500 [&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 [&.disabled]:cursor-auto ${currentPage === page ? "active" : ""}`}
                        >
                        {page}
                        </span>
                    </li>
                ))}

                <li>
                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages}
                        className="inline-flex items-center justify-center bg-white h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-custom-500 hover:bg-custom-100 focus:bg-custom-50 focus:text-custom-500 disabled:text-slate-400 disabled:cursor-auto"
                    >
                        <span className="hidden md:flex">Next</span>
                        <ChevronRight className="size-4 ml-1 rotate-180" />
                    </button>
                </li>
            </ul>
        </div>
    );
}
