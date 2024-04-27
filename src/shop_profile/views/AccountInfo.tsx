import React, { ChangeEvent } from "react";
import { BadgeCheck, ImagePlus, MapPin, UserCircle } from "lucide-react";

const AccountInfo = ({ className }: any) => {

    const [selectedImage, setSelectedImage] = React.useState<string | ArrayBuffer | null>("avatar1");

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <React.Fragment>
            <div className={className}>
                <div className="grid grid-cols-1 place-items-center">
                    <div className="lg:col-span-2 2xl:col-span-1 inline-block">
                        <div className="relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
                            <img src={"https://aws.amazon.com/startups/upload/4418d4f8-8041-707f-0d8f-a8d3bf2b96ee/6fec953e-e5f9-4e9c-b849-e89557b81445.jpg"} alt="" className="object-cover border-0 rounded-full img-thumbnail user-profile-image" />
                            {/* <div className="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                                <input id="profile-img-file-input" type="file"
                                    className="hidden profile-img-file-input"
                                    onChange={handleImageChange} />
                                <label htmlFor="profile-img-file-input" className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit">
                                    <ImagePlus className="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></ImagePlus>
                                </label>
                            </div> */}
                        </div>
                    </div>
                    <div className="lg:col-span-10 2xl:col-span-9 text-center">
                        <h5 className="mb-1">RedShop <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20"></BadgeCheck></h5>
                        <div className="flex gap-3 mb-4">
                            <p className="text-slate-500 dark:text-zink-200"><UserCircle className="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></UserCircle> Accesorios</p>
                            <p className="text-slate-500 dark:text-zink-200"><MapPin className="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></MapPin> Santa Anita, Lima</p>
                        </div>
                        <ul className="flex flex-wrap gap-3 mt-4 text-center items-center justify-center divide-x divide-slate-200 dark:divide-zink-500 rtl:divide-x-reverse">
                            <li className="px-5">
                                <h5>100+</h5>
                                <p className="text-slate-500 dark:text-zink-200">Sales</p>
                            </li>
                            <li className="px-5">
                                <h5>115+</h5>
                                <p className="text-slate-500 dark:text-zink-200">Products</p>
                            </li>
                        </ul>
                        <div className="flex gap-2 mt-4  items-center justify-center">
                            <a href="#!" className="text-lg flex items-center justify-center text-[#37C5BB] transition-all duration-200 ease-linear bg-[#C0F2EF] rounded size-9 hover:bg-[#9CE9E5] dark:bg-red-500/20 dark:hover:bg-red-500/30">                                                        
                                <i className="ri-tiktok-line"></i>
                            </a>
                            <a href="#!" className="text-lg flex items-center justify-center text-pink-500 transition-all duration-200 ease-linear bg-pink-100 rounded size-9 hover:bg-pink-200 dark:bg-pink-500/20 dark:hover:bg-pink-500/30">                            
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#!" className="text-lg flex items-center justify-center transition-all duration-200 ease-linear rounded size-9 text-sky-500 bg-sky-100 hover:bg-sky-200 dark:bg-sky-500/20 dark:hover:bg-sky-500/30">
                                <i className="ri-facebook-fill"></i>
                            </a>                            
                            <a href="#!" className="text-lg flex items-center justify-center text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded size-9 hover:bg-red-200 dark:bg-red-500/20 dark:hover:bg-red-500/30">                            
                                <i className="ri-youtube-line"></i>
                            </a>
                        </div>
                    </div>
                   
                </div>
            </div>

        </React.Fragment>
    );
}

export default AccountInfo;