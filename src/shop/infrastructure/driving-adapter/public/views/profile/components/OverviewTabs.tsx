import React from "react";

interface TableData { label: string; value?: string; link?: boolean }
interface Transaction { date: string; amount: string; status: string; description: string; text: string }

const tableData: TableData[] = [
    { label: "Designation", value: "CEO & Founder" },
    { label: "Phone No", value: "617 219 6245" },
    { label: "Birth of Date", value: "15 Dec, 1998" },
    { label: "Website", link: true },
    { label: "Email", value: "paula@themesdesign.com" },
    { label: "Location", value: "Los Angeles, California" },
    { label: "Joining Date", value: "01 July 2023" },
];

const transactions: Transaction[] = [
    { date: "2 April, 2023", amount: "$321.00", status: "Paid", description: "Subscription", text: "text-green-500" },
    { date: "8 June, 2023", amount: "$184.00", status: "Pending", description: "April Autofile", text: "text-yellow-500" },
    { date: "15 July, 2023", amount: "$325.00", status: "Pending", description: "Subscription", text: "text-yellow-500" },
    { date: "29 July, 2023", amount: "$321.00", status: "Paid", description: "Prepaid Bill", text: "text-green-500" },
    { date: "12 Aug, 2023", amount: "$189.99", status: "Paid", description: "Subscription", text: "text-green-500" },
];

const OverviewTabs = () => {
    return (
        <React.Fragment>          
            <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2 2xl:grid-cols-3">
            <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Personal Information</h6>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <tbody>
                                        {
                                            (tableData || [])?.map((item: TableData, index: number) => (
                                                <tr key={index}>
                                                    <th className="py-2 font-semibold ps-0" scope="row">{item.label}</th>
                                                    <td className="py-2 text-right text-slate-500 dark:text-zink-200">
                                                        {item.link ? <a href="http://themesdesign.in/" rel="noopener"className="text-custom-500">www.themesdesign.in</a> : item.value}
                                                    </td>
                                                </tr>

                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>                    

                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-3 text-15">Payment History</h6>
                        <div className="overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <thead className="text-left">
                                    <tr>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Date</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Amount</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Status</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">Description</th>
                                        <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">PDF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (transactions || [])?.map((item: Transaction, index: number) => (
                                            <tr key={index}>
                                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">{item.date}</td>
                                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">{item.amount}</td>
                                                <td className={`px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500 ${item.text}`}>{item.status}</td>
                                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">{item.description}</td>
                                                <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"><a href="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600"><i className="ri-download-2-line"></i></a></td>
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="flex items-center mb-3">
                            <h6 className="grow text-15">Plan Details</h6>
                            <a href="#!" className="underline text-custom-500">Change Plan</a>
                        </div>
                        <div className="grid grid-cols-1 gap-5 mb-3 md:grid-cols-3">
                            <div>
                                <p className="mb-1 text-slate-500 dark:text-zink-200">Plan Type</p>
                                <h6>Regular Plan</h6>
                            </div>
                            <div>
                                <p className="mb-1 text-slate-500 dark:text-zink-200">Monthly Limit</p>
                                <h6>2 Download</h6>
                            </div>
                            <div>
                                <p className="mb-1 text-slate-500 dark:text-zink-200">Cost</p>
                                <h6>$26/Monthly</h6>
                            </div>
                        </div>
                        <div className="px-4 py-3 mb-2 text-sm rounded-md text-slate-500 dark:text-zink-200 bg-slate-50 dark:bg-zink-600">
                            <h6 className="mb-1">Our discounted pricing is available until August 16, 2023.</h6>
                            <p>After this date, our pricing will transition to $22. For more details, click <a href="#!" className="font-semibold text-slate-700 dark:text-zink-50">Learn More</a></p>
                        </div>
                        <p className="mb-2 text-slate-500 dark:text-zink-200">Plan Benefits</p>
                        <ul className="flex flex-col gap-1 list-disc list-inside">
                            <li>Build with TailwindCSS & Vite</li>
                            <li>Multiple Layouts</li>
                            <li>Easy to Customize</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OverviewTabs;