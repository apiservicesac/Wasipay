import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { HeaderLayout } from "./header";
import CartComponent from "../cart";
import { WhatsAppIcon } from "../wsp_icon";

const Layout = ({ children }: any) => {

    document.title = "Web";

    const cart_products = useAppSelector((state) => state.carttReducer.products)

    const [show, setShow] = React.useState<boolean>(false);
    const handleDrawer = () => setShow(!show);
    
    React.useEffect(() => {
        document.documentElement.classList.add("scroll-smooth", "group");
        document.body.classList.add('text-base', 'bg-body-bg', 'text-body', 'font-public', 'dark:text-zink-100', 'dark:bg-zink-800', 'group-data-[skin=bordered]:bg-body-bordered', 'group-data-[skin=bordered]:dark:bg-zink-700');
        return () => {
          document.documentElement.classList.remove("scroll-smooth", "group");
          document.body.classList.remove('text-base', 'bg-body-bg', 'text-body', 'font-public', 'dark:text-zink-100', 'dark:bg-zink-800', 'group-data-[skin=bordered]:bg-body-bordered', 'group-data-[skin=bordered]:dark:bg-zink-700');
        };
    }, []);

    return (        
        <div className="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
            <HeaderLayout cart_products={cart_products} handleDrawer={handleDrawer} />
        
        <div className='relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm'>
            <div className="group-data-[sidebar-size=lg]:md:mr-vertical-menu group-data-[sidebar-size=md]:mr-vertical-menu-md group-data-[sidebar-size=sm]:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.8)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
                <div className='container-fluid xl:mx-40 lg:mx-32 md:mx-10 sm:mx-20'>
                    {children}
                </div>
            </div>
        </div>

        <CartComponent show={show} handleDrawer={handleDrawer} />
        
        <WhatsAppIcon />
        
    </div>
    );
}

export default Layout;