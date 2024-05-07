import { ChevronDown, ChevronUp, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FilterCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="flex items-center gap-3">
                    <h6 className="text-15 grow">Filter</h6>
                    <div className="shrink-0">
                        <Link to="#!" className="underline transition-all duration-200 ease-linear hover:text-custom-500">Clear All</Link>
                    </div>
                </div>

                <div className="relative mt-4">
                    <input type="text" className="pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" />
                    <Search className="inline-block size-4 absolute right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                </div>

                {/* <div className="mt-4 collapsible">
                    <button className="flex items-center w-full text-left collapsible-header group">
                        <h6 className="underline grow">Color</h6>
                        <div className="shrink-0 text-slate-500 dark:text-zink-200">
                            <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                            <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                        </div>
                    </button>
                    <div className="mt-4 collapsible-content">
                        <div className="flex flex-wrap items-center gap-2">
                            <input id="color1" className="size-5 border rounded-sm appearance-none cursor-pointer border-custom-500 bg-custom-500 checked:bg-custom-500 checked:border-custom-500" type="checkbox" value="" />
                            <input id="color2" className="size-5 bg-red-300 border border-red-300 rounded-sm appearance-none cursor-pointer checked:bg-red-300 checked:border-red-300" type="checkbox" value="" />
                            <input id="color3" className="size-5 bg-green-300 border border-green-300 rounded-sm appearance-none cursor-pointer checked:bg-green-300 checked:border-green-300" type="checkbox" value="" />
                            <input id="color4" className="size-5 border rounded-sm appearance-none cursor-pointer border-slate-500 bg-slate-500 checked:bg-slate-500 checked:border-slate-500" type="checkbox" value="" />
                            <input id="color5" className="size-5 bg-purple-500 border border-purple-500 rounded-sm appearance-none cursor-pointer checked:bg-purple-500 checked:border-purple-500" type="checkbox" value="" />
                            <input id="color6" className="size-5 border rounded-sm appearance-none cursor-pointer bg-sky-500 border-sky-500 checked:bg-sky-500 checked:border-sky-500" type="checkbox" value="" />
                            <input id="color7" className="size-5 bg-yellow-500 border border-yellow-500 rounded-sm appearance-none cursor-pointer checked:bg-yellow-500 checked:border-yellow-500" type="checkbox" value="" />
                            <input id="color7" className="size-5 bg-green-500 border border-green-500 rounded-sm appearance-none cursor-pointer checked:bg-green-500 checked:border-green-500" type="checkbox" value="" />
                            <input id="color8" className="size-5 border rounded-sm appearance-none cursor-pointer bg-slate-800 border-slate-800 checked:bg-slate-800 checked:border-slate-800" type="checkbox" value="" />
                            <input id="color9" className="size-5 border rounded-sm appearance-none cursor-pointer bg-slate-200 border-slate-200 checked:bg-slate-200 checked:border-slate-200" type="checkbox" value="" />
                            <input id="color10" className="size-5 border rounded-sm appearance-none cursor-pointer bg-emerald-300 border-embg-emerald-300 checked:bg-emerald-300 checked:border-embg-emerald-300" type="checkbox" value="" />
                        </div>
                    </div>
                </div> */}


                {/* <div className="mt-4 collapsible">
                    <button className="flex items-center w-full text-left collapsible-header group">
                        <h6 className="underline grow">Price</h6>
                        <div className="shrink-0 text-slate-500 dark:text-zink-200">
                            <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                            <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                        </div>
                    </button>
                    <div className="mt-4 collapsible-content">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input id="priceAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="priceAll" className="align-middle cursor-pointer">
                                    All
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="price1" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="price1" className="align-middle cursor-pointer">
                                    $0.00 – $110.00
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="price2" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="price2" className="align-middle cursor-pointer">
                                    $110.00 – $220.00
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="price3" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="price3" className="align-middle cursor-pointer">
                                    $220 - $330
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="price4" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="price4" className="align-middle cursor-pointer">
                                    $330 - $550
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="price5" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="price5" className="align-middle cursor-pointer">
                                    $550+
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="price6" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="price6" className="align-middle cursor-pointer">
                                    Low to High
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="price6" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="price6" className="align-middle cursor-pointer">
                                    High to Low
                                </label>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <div className="mt-4 collapsible">
                    <button className="flex items-center w-full text-left collapsible-header group">
                        <h6 className="underline grow">Product Category</h6>
                        <div className="shrink-0 text-slate-500 dark:text-zink-200">
                            <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                            <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                        </div>
                    </button>
                    <div className="mt-4 collapsible-content">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input id="categoryAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="categoryAll" className="align-middle cursor-pointer">
                                    All
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="category1" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="category1" className="align-middle cursor-pointer">
                                    Mobiles, Computers
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="category2" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="category2" className="align-middle cursor-pointer">
                                    TV, Appliances, Electronics
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="category3" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="category3" className="align-middle cursor-pointer">
                                    Men's Fashion
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="category4" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="category4" className="align-middle cursor-pointer">
                                    Women's Fashion
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="category5" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="category5" className="align-middle cursor-pointer">
                                    Home, Kitchen, Pets
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="category6" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="category6" className="align-middle cursor-pointer">
                                    Beauty, Health, Grocery
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="category7" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="category7" className="align-middle cursor-pointer">
                                    Books
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-4 collapsible">
                    <button className="flex items-center w-full text-left collapsible-header group">
                        <h6 className="underline grow">Rating</h6>
                        <div className="shrink-0 text-slate-500 dark:text-zink-200">
                            <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                            <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                        </div>
                    </button>
                    <div className="mt-4 collapsible-content">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input id="ratingAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="ratingAll" className="align-middle cursor-pointer">
                                    All
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="rating5" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="rating5" className="align-middle cursor-pointer">
                                    <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">5 Rating</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="rating4" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="rating4" className="align-middle cursor-pointer">
                                    <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">4 Rating and Up</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="rating3" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="rating3" className="align-middle cursor-pointer">
                                    <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">3 Rating and Up</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="rating2" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="rating2" className="align-middle cursor-pointer">
                                    <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">2 Rating and Up</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="rating1" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="rating1" className="align-middle cursor-pointer">
                                    <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">1 Rating and Up</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="rating0" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="rating0" className="align-middle cursor-pointer">
                                    <Star className="inline-block size-4 ml-1 text-yellow-500 align-middle" /> <span className="align-middle">0 Rating</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div> */}
                 
                {/* <div className="mt-4 collapsible">
                    <button className="flex items-center w-full text-left collapsible-header group show">
                        <h6 className="underline grow">Gender</h6>
                        <div className="ml-2 shrink-0">
                            <ChevronDown className="hidden size-4 group-[.show]:inline-block" />
                            <ChevronUp className="inline-block size-4 group-[.show]:hidden" />
                        </div>
                    </button>
                    <div className="mt-4 collapsible-content">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input id="genderAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="genderAll" className="align-middle cursor-pointer">
                                    All
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="gendermal" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="gendermal" className="align-middle cursor-pointer">
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="genderFemal" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="genderFemal" className="align-middle cursor-pointer">
                                    Female
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input id="genderOthers" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" value="" />
                                <label htmlFor="genderOthers" className="align-middle cursor-pointer">
                                    Others
                                </label>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default FilterCard;