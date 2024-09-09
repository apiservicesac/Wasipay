import React from 'react';
import { BadgeCheck } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import { ProfileInfoHelper } from './helper';

const ShopProfileInfo = ({ className }: { className: string }) => {

    const helper = ProfileInfoHelper()

    return (
        <React.Fragment>
            <div className={className}>
                <div className='grid grid-cols-1 place-items-center'>
                    <div className='lg:col-span-2 2xl:col-span-1 inline-block'>
                        <div className='relative inline-block size-28 rounded-full shadow-md bg-slate-100 profile-user'>
                            <img
                                src={
                                    helper.shop_profile
                                        ? helper.shop_profile.image.url
                                        : '#'
                                }
                                alt=''
                                className='object-cover border-0 rounded-full img-thumbnail user-profile-image'
                            />                            
                        </div>
                    </div>
                    <div className='lg:col-span-10 2xl:col-span-9 text-center'>
                        <h5 className='mb-1 gap-2'>
                            {helper.shop_profile ? (
                                helper.shop_profile.name
                            ) : (
                                <Skeleton />
                            )}
                            <BadgeCheck className='ml-1 inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20' />
                        </h5>                        
                        <ul className='flex flex-wrap gap-3 mt-4 text-center items-center justify-center divide-x divide-slate-200 dark:divide-zink-500'>
                            <li className='px-5'>
                                <h5>
                                    {helper.products ? (
                                        helper.products
                                    ) : (
                                        <Skeleton />
                                    )}
                                    +
                                </h5>
                                <p className='text-slate-500 dark:text-zink-200'>
                                    Products
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ShopProfileInfo;
