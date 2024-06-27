import React from 'react';
import { Package, Truck, View, Wallet2 } from 'lucide-react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const Widgets = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                        <Wallet2 />
                    </div>
                    <h5 className="mt-4 mb-2">S/.
                        <CountUp end={100} decimals={2} className="counter-value" />
                    </h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Revenue</p>
                </div>
            </div>
            <Link to={'/dashboard/order'} className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">                        
                        <Truck />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={13461} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Orders</p>
                </div>
            </Link>
            <Link to={'/dashboard/product'} className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
                        <Package />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={10} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Products</p>
                </div>
            </Link>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
                        <View />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={3519} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Views</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
