import React from 'react';
import { BadgeCheck, ImagePlus, MapPin, UserCircle } from 'lucide-react';
import { ProfileInfoHelper } from './helper';
import Skeleton from 'react-loading-skeleton';
// import Authorization from '@/common/security/Authorization';

const ShopProfileInfo = ({ className }: { className: string }) => {
    const helper = ProfileInfoHelper();

    return (
        <React.Fragment>
            <div className={className}>
                <div className='grid grid-cols-1 place-items-center'>
                    <div className='lg:col-span-2 2xl:col-span-1 inline-block'>
                        <div className='relative inline-block size-28 rounded-full shadow-md bg-slate-100 profile-user'>
                            <img
                                // src={
                                //     helper.query_shop_profile
                                //         ? helper.query_shop_profile.image.url
                                //         : '#'
                                // }
                                src="https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/210160439_10158898569073961_7752065790766107881_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEiBEa1lJddN40LflVmaWoQPqgB7aeKrs8-qAHtp4quz6Z5UsAVd6aK8hZ34TdX9cegAC0xiwTPwh9gb97DqlM8&_nc_ohc=KMRdET9UbPEQ7kNvgErrb_V&_nc_ht=scontent.flim28-1.fna&_nc_gid=AhqiLKPM8OEGAQO_HqCG5bG&oh=00_AYDmtvfpYHXt_aByRjkPjGlcDelYsBl52_xFWe8oCv5PeA&oe=66DD356A"
                                alt=''
                                className='object-cover border-0 rounded-full img-thumbnail user-profile-image'
                            />                            
                        </div>
                    </div>
                    <div className='lg:col-span-10 2xl:col-span-9 text-center'>
                        <h5 className='mb-1 gap-2'>
                            {/* {helper.query_shop_profile ? (
                                helper.query_shop_profile.name
                            ) : (
                                <Skeleton />
                            )} */}
                            RIPLEY
                            <BadgeCheck className='ml-1 inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20' />
                        </h5>
                        <div className='flex gap-3 mb-4'>                            
                            <p className='text-slate-500 dark:text-zink-200'>
                                <MapPin className='inline-block size-4 mr-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500' />
                                {/* {helper.query_shop_profile ? (
                                    "helper.query_shop_profile.city"
                                ) : (
                                    <Skeleton />
                                )} */}
                                Lima, Perú
                            </p>
                        </div>
                        <ul className='flex flex-wrap gap-3 mt-4 text-center items-center justify-center divide-x divide-slate-200 dark:divide-zink-500'>
                            <li className='px-5'>
                                <h5>
                                    {helper.query_product_list ? (
                                        helper.query_product_list.length
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
                        {/* <div className='flex gap-2 mt-4 items-center justify-center'>
                            <a
                                href={
                                    helper.query_shop_profile && helper.query_shop_profile.social_media
                                        ? helper.query_shop_profile.social_media.tiktok
                                        : '#'
                                }
                                target='_blank'
                                className='text-lg flex items-center justify-center text-[#37C5BB] transition-all duration-200 ease-linear bg-[#C0F2EF] rounded size-9 hover:bg-[#9CE9E5]'
                            >
                                <i className='ri-tiktok-line'></i>
                            </a>
                            <a
                                href={
                                    helper.query_shop_profile && helper.query_shop_profile.social_media
                                        ? helper.query_shop_profile.social_media.instagram
                                        : '#'
                                }
                                target='_blank'
                                className='text-lg flex items-center justify-center text-pink-500 transition-all duration-200 ease-linear bg-pink-100 rounded size-9 hover:bg-pink-200'
                            >
                                <i className='ri-instagram-line'></i>
                            </a>
                            <a
                                href={
                                    helper.query_shop_profile && helper.query_shop_profile.social_media
                                        ? helper.query_shop_profile.social_media.facebook
                                        : '#'
                                }
                                target='_blank'
                                className='text-lg flex items-center justify-center transition-all duration-200 ease-linear rounded size-9 text-sky-500 bg-sky-100 hover:bg-sky-200'
                            >
                                <i className='ri-facebook-fill'></i>
                            </a>
                            <a href={helper.query_shop_profile ? "#" : helper.query_shop_profile!.social_media?.youtube} target='_blank' className='text-lg flex items-center justify-center text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded size-9 hover:bg-red-200'>
                                <i className='ri-youtube-line'></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ShopProfileInfo;
