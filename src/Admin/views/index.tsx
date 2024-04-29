import { Search } from "lucide-react";
import React from "react";
import TableContainer from "@/common/TableContainer";
import LayoutAuth from "@/common/LayoutAuth";
import ActionCard from "./components/action";
import { Helpers } from "./helpers";


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

    const { columns } = Helpers();
    
    React.useEffect(() => {
        setData(dataTest)
    }, [])    


    return (

        <LayoutAuth>
            
            <ActionCard />
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
                                PaginationClassName="flex flex-col items-center gap-4 px-4 mt-4 md:flex-row"/>
                            :(
                                <div className="noresult">
                                    <div className="py-6 text-center">
                                        <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                                        <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                        <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 199+ product We did not find any product for you search.</p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
           
        </LayoutAuth>
        
        
    );
}

export default Admin;