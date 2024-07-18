import React from "react";

// icons
import { Plus, MoreHorizontal, FileEdit, Trash2, UploadCloud, Smartphone } from 'lucide-react';
import { Link } from "react-router-dom";

import Dropzone from "react-dropzone";
import DeleteModal from "@/common/DeleteModal";
import BreadCrumb from "@/common/BreadCrumb";
import { Dropdown } from "@/common/components/Dropdown";
import Modal from "@/common/components/Modal";
import { PaymentMethodHelper } from "./helper";

export const PaymentMehtodsView = () => {    

    const helper = PaymentMethodHelper()

    return (
        <React.Fragment>
            <BreadCrumb title='Payment Methods' pageTitle='Dashbaord' />
            <DeleteModal show={helper.deleteModal} onHide={helper.deleteToggle} onDelete={helper.handleDeleteClick} />
            <form action="#!" className="mb-5">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">                    
                    <div className="lg:text-right lg:col-span-3 lg:col-start-10">
                        <button data-modal-target="addSellerModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={helper.toggleOptions}>
                            <Plus className="inline-block size-4" /> <span className="align-middle">Add Seller</span>
                        </button>
                    </div>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-12 gap-x-5">
                {(helper.data || []).map((item: any, key: number) => (<div className="2xl:col-span-3" key={key}>
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="grow">
                                    <button className={`group/item toggle-button active`}>
                                        <Smartphone className="size-5 text-slate-500 dark:text-zink-200 fill-slate-200 dark:fill-zink-500 transition-all duration-150 ease-linear group-[.active]/item:text-yellow-500 dark:group-[.active]/item:text-yellow-500 group-[.active]/item:fill-yellow-200 dark:group-[.active]/item:fill-yellow-500/20 group-hover/item:text-yellow-500 dark:group-hover/item:text-yellow-500 group-hover/item:fill-yellow-200 dark:group-hover/item:fill-yellow-500/20" />
                                    </button>
                                </div>
                                <Dropdown className="relative dropdown shrink-0">
                                    <Dropdown.Trigger id="sellersAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                                        <MoreHorizontal className="size-3" />
                                    </Dropdown.Trigger>
                                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="sellersAction1">                                    
                                        <li>
                                            <Link data-modal-target="addSellerModal" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => {
                                                helper.handleUpdateClick(item);
                                            }}>
                                                <FileEdit className="inline-block size-3 mr-1" /> <span className="align-middle">Edit</span></Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => helper.openModalDelete(item)}><Trash2 className="inline-block size-3 mr-1" /> <span className="align-middle">Delete</span></Link>
                                        </li>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                            <div className="flex items-center justify-center size-16 mx-auto rounded-full bg-slate-100 outline outline-slate-100 outline-offset-1 dark:bg-zink-600 dark:outline-zink-600">
                                <img src={item.logo} alt="" className="h-10 rounded-full" />
                            </div>

                            <div className="mt-4 mb-6 text-center">
                                <h6 className="text-16"><Link to="#!">{item.payment_method.name}</Link></h6>
                                <p className="text-slate-500 dark:text-zink-200">{item.payment_method.description}</p>
                            </div>                            
                        </div>
                    </div>
                </div>))}
            </div>
            {/* Seller Modal */}
            <Modal show={helper.showModal} onHide={helper.toggleOptions} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-5 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!helper.isEdit ? "Edit Seller" : "Add Seller"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form action="#!" onSubmit={(e) => {
                        e.preventDefault();
                        helper.validation.handleSubmit();
                        return false;
                    }}>
                        <div className="mb-3">
                            <label htmlFor="companyLogo" className="inline-block mb-2 text-base font-medium">Company Logo</label>
                            {!helper.selectfiles && (
                                <Dropzone
                                    onDrop={(acceptedFiles) => {
                                        helper.handleAcceptfiles(acceptedFiles);
                                    }}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <div
                                            className="flex items-center justify-center bg-white border border-dashed rounded-md cursor-pointer dropzone border-slate-200 dropzone2 dark:bg-zinc-600 dark:border-zinc-500"
                                            onClick={helper.handleOpenSelectFileClick}
                                            {...getRootProps()}
                                        >
                                            <input id="fileInput" {...getInputProps()} style={{ display: 'none' }} />
                                            <div className="w-full py-5 text-lg text-center dz-message needsclick">
                                                <div className="mb-3">
                                                    <UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zinc-200 dark:fill-zinc-500" />
                                                </div>
                                                <h5 className="mb-0 font-normal text-slate-500 dark:text-zinc-200 text-15">
                                                    Drag and drop your logo or <Link to="#!">browse</Link> your logo
                                                </h5>
                                            </div>
                                        </div>
                                    )}
                                </Dropzone>
                            )}                           

                            <ul className="flex flex-wrap mb-0 gap-x-5" id="dropzone-preview2">
                                {
                                    helper.selectfiles && (
                                        <li className="mt-5" id="dropzone-preview-list2">
                                            <div className="border rounded border-slate-200 dark:border-zink-500">
                                                <div className="p-2 text-center">
                                                    <div>
                                                        <div className="p-2 mx-auto rounded-md size-14 bg-slate-100 dark:bg-zink-600">
                                                            <img className="block w-full h-full rounded-md" src={helper.selectfiles.priview} alt={helper.selectfiles.name} />
                                                        </div>
                                                    </div>                                                    
                                                    <div className="mt-2">
                                                        <button data-dz-remove className="px-2 py-1.5 text-xs text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20" onClick={() => {
                                                            helper.setSelectfiles('');                                                            
                                                        }}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeInput" className="inline-block mb-2 text-base font-medium">Payment Method</label>
                            <input type="text" id="typeInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Payment Method"
                                name="payment_method"
                                onChange={helper.validation.handleChange}
                                value={helper.validation.values.payment_method || ""}
                            />
                            {helper.validation.touched.payment_method && helper.validation.errors.payment_method ? (
                                <p className="text-red-400">{helper.validation.errors.payment_method}</p>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ownerName" className="inline-block mb-2 text-base font-medium">Account Number</label>
                            <input type="text" id="ownerName" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Account Number"
                                name="account_number"
                                onChange={helper.validation.handleChange}
                                value={helper.validation.values.account_number || ""}
                            />
                            {helper.validation.touched.account_number && helper.validation.errors.account_number ? (
                                <p className="text-red-400">{helper.validation.errors.account_number}</p>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ownerName" className="inline-block mb-2 text-base font-medium">Interbank Number</label>
                            <input type="text" id="ownerName" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Interbank Number"
                                name="interbank_account_number"
                                onChange={helper.validation.handleChange}
                                value={helper.validation.values.interbank_account_number || ""}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ownerName" className="inline-block mb-2 text-base font-medium">Currency</label>
                            <input type="text" id="ownerName" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Currency"
                                name="currency_type"
                                onChange={helper.validation.handleChange}
                                value={helper.validation.values.currency_type || ""}
                            />
                            {helper.validation.touched.currency_type && helper.validation.errors.currency_type ? (
                                <p className="text-red-400">{helper.validation.errors.currency_type}</p>
                            ) : null}
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" data-modal-close="addSellerModal" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={helper.toggleOptions}>Cancel</button>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                {!!helper.isEdit ? "Update" : "Add Seller"}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};