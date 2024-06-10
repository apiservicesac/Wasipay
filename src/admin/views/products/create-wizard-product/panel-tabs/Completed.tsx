import { CheckCircle } from "lucide-react";
import React from "react";

// Image
import productImg03 from "@/assets/images/product/img-03.png";

export const Completed = () => {



    return (
<React.Fragment>
    <div className="flex justify-center py-4">
        <div className="px-1 mx-auto text-center lg:w-2/5">
            <CheckCircle className="block size-10 mx-auto mb-4 text-green-500 fill-green-100 dark:fill-green-500/20 animate-icons"></CheckCircle>
            <h5 className="mb-2">New Product Preview 🎉</h5>
            <div className="card">
                <div className="card-body">                    
                    <div className="px-5 py-8 rounded-md bg-sky-50 dark:bg-zink-600">
                        <img src={productImg03} alt="" className="block mx-auto h-36" />
                    </div>

                    <div className="mt-3">
                        <h5 className="mb-2">$145.99 <small className="font-normal line-through">299.99</small></h5>
                        <h6 className="mb-1 text-15">Fastcolors Typography Men</h6>
                        <p className="text-slate-500 dark:text-zink-200">Men's Fashion</p>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <button type="button" className="w-full bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">Create Product</button>
                        <button type="button" className="w-full text-white bg-purple-500 border-purple-500 btn hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:text-white focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:ring-purple-400/10">Draft</button>
                    </div>
                </div>
            </div>     
        </div>                           
    </div>                           
</React.Fragment>

    );
}