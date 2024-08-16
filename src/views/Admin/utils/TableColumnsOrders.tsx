import { Dropdown } from "@/common/components/Dropdown";
import { formatCurrency } from "@/common/utils/format";
import { Eye, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const statusClasses : any = {
    PENDING: "bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20",
    PROCESSING: "bg-blue-100 border-blue-200 text-blue-500 dark:bg-blue-500/20 dark:border-blue-500/20",
    NEW: "bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20",
    SHIPPED: "bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20",
    DELIVERED: "bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20",
    CANCELLED: "bg-red-100 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/20"
};

export const ColumnsOrders = [
    {
        header: "#",
        accessorKey: "",
        enableColumnFilter: false,
        enableSorting: true,
    },
    {
        header: "Order Id",
        accessorKey: "order_code",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
            <>
                <Link to="#" className='text-custom-500'>#{cell.row.original.order_code}</Link>
            </>
        ),
    },
    {
        header: "Customer Name",
        accessorKey: "customer.first_name",
        enableColumnFilter: false,
        enableSorting: true,
    },
    {
        header: "Location",
        accessorKey: "billing_address.city",
        enableColumnFilter: false,
        enableSorting: true,
    },
    {
        header: "Order Date",
        accessorKey: "order_date",
        enableColumnFilter: false,
        enableSorting: true,
    },
    {
        header: "Payments",
        accessorKey: "payment.payment_method.payment_method.name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => {
            const paymentMethod = cell.row.original?.payment?.payment_method?.payment_method?.name;
            return paymentMethod ? paymentMethod : "N/A";
        },
    },
    {
        header: "Total Amount",
        accessorKey: "total_amount",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => {
            return formatCurrency.format(cell.row.original?.total_amount)
        }
    },
    {
        header: "Status",
        accessorKey: "status",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => {
            const status = cell.row.original.status;
            const statusClass = statusClasses[status] || "bg-gray-100 border-gray-200 text-gray-500 dark:bg-gray-500/20 dark:border-gray-500/20";
            
            return (
                <span className={`delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border ${statusClass}`}>
                    {status}
                </span>
            );
        }
    },
    {
        header: "Action",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
            <>
                <Dropdown className="relative">
                    <Dropdown.Trigger id="orderAction5" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                        <MoreHorizontal className="size-3"></MoreHorizontal></Dropdown.Trigger>
                    <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"}  className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="orderAction5">
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-order-overview"><Eye className="inline-block size-3 mr-1 "/> <span className="align-middle">Overview</span></Link>
                        </li>
                    </Dropdown.Content>
                </Dropdown>

            </>
        ),
    }
]