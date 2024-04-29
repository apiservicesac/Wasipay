import { Eye, FileEdit, Heart, MoreHorizontal, Plus, Search, ShoppingCart, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "@/common/components/Dropdown";
import Layout from "@/common/Layout";
import Flatpickr from 'react-flatpickr';


const dataTest = [
    {
        "id": 1,
        "productName": "Producto Prueba",
        "img": "/img-05.030c93e0d3fa35148d18.png",
        "price": "S/. 674.12",
        "delPrice": "784.99",
        "rating": "4.5",
        "ratingNumber": "198",
        "isFav": true
    },
    {
        "id": 2,
        "productName": "Producto Prueba",
        "img": "/img-05.030c93e0d3fa35148d18.png",
        "price": "S/. 674.12",
        "delPrice": "784.99",
        "rating": "4.5",
        "ratingNumber": "198",
        "isFav": true
    },
    {
        "id": 3,
        "productName": "Producto Prueba",
        "img": "/img-05.030c93e0d3fa35148d18.png",
        "price": "S/. 674.12",
        "delPrice": "784.99",
        "rating": "4.5",
        "ratingNumber": "198",
        "isFav": true
    },
    {
        "id": 4,
        "productName": "Producto Prueba",
        "img": "/img-05.030c93e0d3fa35148d18.png",
        "price": "S/. 674.12",
        "delPrice": "784.99",
        "rating": "4.5",
        "ratingNumber": "198",
        "isFav": true
    },

]

const Admin = () => {
    const [data, setData] = React.useState<any>([]);

    
    React.useEffect(() => {
        setData(dataTest)
    }, [])


    return (

        <Layout>
            
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

            <div className={`grid grid-cols-1 mt-5 md:grid-cols-2 [&.gridView]:grid-cols-1 xl:grid-cols-4 group [&.gridView]:xl:grid-cols-1 gap-x-5 ${!false && "gridView"}`} id="cardGridView">

                {(data || []).map((item: any, key: number) => (
                    <div className="card md:group-[.gridView]:flex relative" key={key}>
                        <div className="relative group-[.gridView]:static p-8 group-[.gridView]:p-5">
                            <Link to="#!" className={`absolute group/item toggle-button top-6 right-6 ${item.isFav && "active"}`} onClick={(e) => {

                            }}>
                                <Heart className="size-5 text-slate-400 fill-slate-200 transition-all duration-150 ease-linear dark:text-zink-200 dark:fill-zink-600 group-[.active]/item:text-red-500 dark:group-[.active]/item:text-red-500 group-[.active]/item:fill-red-200 dark:group-[.active]/item:fill-red-500/20 group-hover/item:text-red-500 dark:group-hover/item:text-red-500 group-hover/item:fill-red-200 dark:group-hover/item:fill-red-500/20" />
                            </Link>
                            <div className="group-[.gridView]:p-3 group-[.gridView]:bg-slate-100 dark:group-[.gridView]:bg-zink-600 group-[.gridView]:inline-block rounded-md">
                                <img src={item.img} alt="" className="group-[.gridView]:h-16" />
                            </div>
                        </div>
                        <div className="card-body !pt-0 md:group-[.gridView]:flex group-[.gridView]:!p-5 group-[.gridView]:gap-3 group-[.gridView]:grow">
                            <div className="group-[.gridView]:grow">
                                <h6 className="mb-1 truncate transition-all duration-200 ease-linear text-15 hover:text-custom-500"><Link to="/apps-ecommerce-product-overview">{item.productName}</Link></h6>

                                <div className="flex items-center text-slate-500 dark:text-zink-200">
                                    <div className="mr-1 text-yellow-500 shrink-0 text-15">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-line"></i>
                                    </div>
                                    ({item.ratingNumber})
                                </div>
                                <h5 className="mt-4 text-16">{item.price} <small className="font-normal line-through text-slate-500 dark:text-zink-200">{item.delPrice}</small></h5>
                            </div>

                            <div className="flex items-center gap-2 mt-4 group-[.gridView]:mt-0 group-[.gridView]:self-end">
                                <button type="button" className="w-full bg-white border-dashed text-slate-500 btn border-slate-500 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-600 focus:text-slate-600 focus:bg-slate-50 focus:border-slate-600 active:text-slate-600 active:bg-slate-50 active:border-slate-600 dark:bg-zink-700 dark:text-zink-200 dark:border-zink-400 dark:ring-zink-400/20 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:focus:bg-zink-600 dark:focus:text-zink-100 dark:active:bg-zink-600 dark:active:text-zink-100"><ShoppingCart className="inline-block size-3 leading-none" /> <span className="align-middle">Add to Cart</span></button>
                                <Dropdown className="relative float-right dropdown">
                                    <Dropdown.Trigger className="flex items-center justify-center w-[38.39px] h-[38.39px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="productList1" data-bs-toggle="dropdown">
                                        <MoreHorizontal className="size-3" />
                                    </Dropdown.Trigger>
                                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="productList1">
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-product-overview"><Eye className="inline-block size-3 mr-1" /> <span className="align-middle">Overview</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-ecommerce-product-create"><FileEdit className="inline-block size-3 mr-1 " /> <span className="align-middle">Edit</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {

                                            }}><Trash2 className="inline-block size-3 mr-1" /> <span className="align-middle">Delete</span></Link>
                                        </li>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
        
        
    );
}

export default Admin;