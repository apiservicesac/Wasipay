import { Eye, FileEdit, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "@/common/components/Dropdown";
import TableContainer from "@/common/TableContainer";
import LayoutAuth from "@/common/LayoutAuth";


const dataTest = [
    {
        "id": 1,
        "productCode": "#TAD-232100071",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Fashion",
        "price": "S/.79.99",
        "stock": 500,        
        "status": "Scheduled"
    },
    {
        "id": 2,
        "productCode": "#TAD-232100072",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Furniture",
        "price": "S/.214.47",
        "stock": 400,        
        "status": "Publish"
    },
    {
        "id": 3,
        "productCode": "#TAD-232100073",
        "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Fashion",
        "price": "S/.119.12",
        "stock": 600,        
        "status": "Inactive"
    },
    {
        "id": 4,
        "productCode": "#TAD-232100074",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Electronics",
        "price": "S/.452.99",
        "stock": 300,        
        "status": "Publish"
    },
    {
        "id": 5,
        "productCode": "#TAD-232100075",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Home Decor",
        "price": "S/.119.99",
        "stock": 240,        
        "status": "Publish"
    },
    {
        "id": 6,
        "productCode": "#TAD-232100076",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Electronics",
        "price": "S/.84.99",
        "stock": 110,        
        "status": "Scheduled"
    },
    {
        "id": 7,
        "productCode": "#TAD-232100077",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Fashion",
        "price": "S/.49.99",
        "stock": 470,        
        "status": "Publish"
    },
    {
        "id": 8,
        "productCode": "#TAD-232100078",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Fashion",
        "price": "S/.129.99",
        "stock": 206,        
        "status": "Inactive"
    },
    {
        "id": 9,
        "productCode": "#TAD-232100079",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Fashion",
        "price": "S/.410.43",
        "stock": 230,        
        "status": "Scheduled"
    },
    {
        "id": 10,
        "productCode": "#TAD-232100080",
         "img": "/img-05.030c93e0d3fa35148d18.png",
        "productName": "Producto Prueba",
        "category": "Fashion",
        "price": "S/.64.70",
        "stock": 150,        
        "status": "Publish"
    },    
]

const Admin = () => {
    const [data, setData] = React.useState<any>([]);

    
    React.useEffect(() => {
        setData(dataTest)
    }, [])

    const Status = ({ item }: any) => {
        switch (item) {
            case "Publish":
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">{item}</span>);
            case "Scheduled":
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent">{item}</span>);
            case "Inactive":
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">{item}</span>);
            default:
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">{item}</span>);
        }
    };


    const columns = React.useMemo(() => [
        {
            header: "Product Code",
            accessorKey: "productCode",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Link to="#" className="transition-all duration-150 ease-linear product_code text-custom-500 hover:text-custom-600">{cell.getValue()}</Link>
            ),
        },
        {
            header: "Product Name",
            accessorKey: "productName",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <Link to="/apps-ecommerce-product-overview" className="flex items-center gap-2">
                    <img src={cell.row.original.img} alt="Product images" className="h-6" />
                    <h6 className="product_name">{cell.getValue()}</h6>
                </Link>
            ),
        },
        {
            header: "Category",
            accessorKey: "category",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <span className="category px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">{cell.getValue()}</span>
            ),
        },
        {
            header: "Price",
            accessorKey: "price",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Stock",
            accessorKey: "stock",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Status",
            accessorKey: "status",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <Status item={cell.getValue()} />
            ),
        },
        {
            header: "Action",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <Dropdown className="relative dropdown">
                    <Dropdown.Trigger className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="productAction1" data-bs-toggle="dropdown">
                        <MoreHorizontal className="size-3" />
                    </Dropdown.Trigger>
                    <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="productAction1">
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-product-overview"><Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span></Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-product-create"><FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                const data = cell.row.original;
                                // onClickDelete(data);
                            }}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                        </li>
                    </Dropdown.Content>
                </Dropdown>
            ),
        }
    ], []
    );


    return (

        <LayoutAuth>
            
            <div className="card card-body p-4 mt-4">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="pl-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => {

                                }} />
                                <Search className="inline-block size-4 absolute left-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                       
                        <div className="lg:col-span-1 lg:text-right xl:col-span-2 xl:col-start-11">
                            <Link to="/apps-ecommerce-product-create" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Plus className="inline-block size-4" /> <span className="align-middle">Add Product</span></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    
                <div className="card-body">
                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={true}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={7}
                            divclassName="overflow-x-auto"
                            tableclassName="w-full whitespace-nowrap"
                            theadclassName="text-left bg-slate-100 dark:bg-zink-600"
                            thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
                            tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                            PaginationClassName="flex flex-col items-center gap-4 px-4 mt-4 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 199+ product We did not find any product for you search.</p>
                            </div>
                        </div>)}
                </div>
                </div>
           
        </LayoutAuth>
        
        
    );
}

export default Admin;