import React from "react";

import { Cable, Edit2 } from "lucide-react";
import { CardData } from "@/shop/domain/entities";
import { Link } from "react-router-dom";
import { IntegrationTabHelper } from "./helper";

export const Integration = () => {

    const helper = IntegrationTabHelper()

    React.useEffect(() => {
        helper.onLoadCardData()
    }, [helper.shop])

    return (
        <React.Fragment>
            <h6 className="mb-4 text-15">Connected Apps</h6>
            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 xl:grid-cols-4">
                {
                    (helper.cardData || [])?.map((item: CardData, index: number) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <div className="flex gap-3 mb-5">
                                    <div className="grow size-6 text-2xl">
                                        <div className={`text-2xl flex items-center justify-center transition-all duration-200 ease-linear rounded size-9 ${item.logo.style}`}>                                                        
                                            <i className={item.logo.icon}></i>
                                        </div>
                                    </div>
                                    <div className="shrink-1 flex gap-2">
                                        <button onClick={() => helper.onEditModeInput(item.id)} type="button" className="px-2 py-1.5 text-xs bg-custom-50 text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-100 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600">
                                            <Edit2 className="inline-block size-3 mr-1"></Edit2>
                                            {item.editable ? 'OK' : 'Edit'}
                                        </button>
                                        <Link to={item.user_name} target="_blank" type="button" className="px-2 py-1.5 text-xs bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600">
                                            <Cable className="inline-block size-3 mr-1"></Cable>
                                            View
                                        </Link>
                                    </div>
                                </div>

                                <h6 className="mb-2 text-16">{item.title}</h6>
                                <div className="">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your email address"
                                    value={item.user_name || ""}    
                                    disabled={!item.editable}                                
                                    onChange={(event) => helper.onChangeInput(event, item.id) }
                                    // onBlur={helper.validation.handleBlur}
                                />
                                {/* {helper.validation.touched.email && helper.validation.errors.email ? (
                                    <div id="email-error" className="mt-1 text-sm text-red-500">{helper.validation.errors.email}</div>
                                ) : null} */}
                            </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </React.Fragment>
    );
}