import { Nav } from "./Nav";

export const overviewTabs = `
inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 dark:group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]
`

const NavItemCustom = ({ label, eventKey } : { label: string, eventKey: string }) => {

    return (
        <Nav.Item eventKey={eventKey}  className="group">
            <a href="#!" data-tab-toggle data-target={eventKey} className={overviewTabs}>{label}</a>
        </Nav.Item>  
    );
}

export default NavItemCustom