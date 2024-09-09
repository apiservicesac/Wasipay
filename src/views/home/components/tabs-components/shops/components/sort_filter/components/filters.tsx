import { Link } from "react-router-dom";

export const FilterComponent = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="flex items-center gap-3">
                    <h6 className="text-15 grow">Filter</h6>
                    <div className="shrink-0">
                        <Link to="#!" className="underline transition-all duration-200 ease-linear hover:text-custom-500">Clear All</Link>
                    </div>
                </div>                               
            </div>
        </div>
    );
}