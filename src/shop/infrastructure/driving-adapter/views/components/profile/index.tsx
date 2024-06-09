import React from 'react';
import { BadgeCheck, ImagePlus, MapPin, UserCircle } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import { UseQueryResult } from '@tanstack/react-query';
import { ProductItemEntity, ShopEntity } from '@/shop/domain/entities';
import { ProfileInfoHelper } from './helper';

const ShopProfileInfo = (
    { className, query_shop_profile, query_product_list } : 
    { className: string, query_shop_profile: UseQueryResult<ShopEntity>, query_product_list: UseQueryResult<ProductItemEntity[]>}
) => {
    
    const helper = ProfileInfoHelper({ query_shop_profile })

    return (
        <React.Fragment>
            <div className={className}>
                <div className='grid grid-cols-1 place-items-center'>
                    <div className='lg:col-span-2 2xl:col-span-1 inline-block'>
                        <div className='relative inline-block size-28 rounded-full shadow-md bg-slate-100 profile-user'>
                            <img src={query_shop_profile.isLoading ? '#' : helper.selectedImage ? helper.selectedImage : query_shop_profile.data!.image.url} alt='' className='object-cover border-0 rounded-full img-thumbnail user-profile-image' />
                            <div className="shadow-md absolute bottom-0 flex items-center justify-center size-8 rounded-full right-0 profile-photo-edit border-0">
                                <input id="profile-img-file-input" type="file"
                                    className="hidden profile-img-file-input"
                                    onChange={helper.handleImageChange} />
                                <label htmlFor="profile-img-file-input" className="flex items-center justify-center size-8 bg-gray-50 rounded-full shadow-lg cursor-pointer profile-photo-edit">
                                    <ImagePlus className="size-4 text-custom-500 fill-slate-50 "></ImagePlus>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-10 2xl:col-span-9 text-center'>
                        <h5 className='mb-1 gap-2'>                            
                            {query_shop_profile.isLoading ? <Skeleton /> :  query_shop_profile.data!.name }
                            <BadgeCheck className='ml-1 inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20' />
                        </h5>
                        <div className='flex gap-3 mb-4'>
                            <p className='text-slate-500 dark:text-zink-200'><UserCircle className='inline-block size-4 mr-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500'></UserCircle>                                
                                {query_shop_profile.isLoading ? <Skeleton /> : query_shop_profile.data!.description}                                
                            </p>
                            <p className='text-slate-500 dark:text-zink-200'><MapPin className='inline-block size-4 mr-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500'></MapPin>
                                {query_shop_profile.isLoading ? <Skeleton /> : query_shop_profile.data!.city}
                            </p>
                        </div>
                        <ul className='flex flex-wrap gap-3 mt-4 text-center items-center justify-center divide-x divide-slate-200 dark:divide-zink-500'>
                            <li className='px-5'>
                                <h5>{query_product_list.isLoading ? <Skeleton /> : query_product_list.data!.length}+</h5>
                                <p className='text-slate-500 dark:text-zink-200'>Sales</p>
                            </li>
                            <li className='px-5'>
                                <h5>{query_product_list.isLoading ? <Skeleton /> : query_product_list.data!.length}+</h5>
                                <p className='text-slate-500 dark:text-zink-200'>Products</p>
                            </li>
                        </ul>
                        <div className='flex gap-2 mt-4  items-center justify-center'>
                            <a href={query_shop_profile.isLoading ? "#" : query_shop_profile.data!.social_media?.tiktok} target='_blank' className='text-lg flex items-center justify-center text-[#37C5BB] transition-all duration-200 ease-linear bg-[#C0F2EF] rounded size-9 hover:bg-[#9CE9E5]'>                                                        
                                <i className='ri-tiktok-line'></i>
                            </a>
                            <a href={query_shop_profile.isLoading ? "#" : query_shop_profile.data!.social_media?.instagram} target='_blank' className='text-lg flex items-center justify-center text-pink-500 transition-all duration-200 ease-linear bg-pink-100 rounded size-9 hover:bg-pink-200'>                            
                                <i className='ri-instagram-line'></i>
                            </a>
                            <a href={query_shop_profile.isLoading ? "#" : query_shop_profile.data!.social_media?.facebook} target='_blank' className='text-lg flex items-center justify-center transition-all duration-200 ease-linear rounded size-9 text-sky-500 bg-sky-100 hover:bg-sky-200'>
                                <i className='ri-facebook-fill'></i>
                            </a>                            
                            {/* <a href={query_shop_profile.isLoading ? "#" : query_shop_profile.data!.social_media?.youtube} target='_blank' className='text-lg flex items-center justify-center text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded size-9 hover:bg-red-200'>
                                <i className='ri-youtube-line'></i>
                            </a> */}
                        </div>
                    </div>
                   
                </div>
            </div>

        </React.Fragment>
    );
}

export default ShopProfileInfo;