import { Nav } from "@/common/components/Tab/Nav";
import Tab from "@/common/components/Tab/Tab";
import React from "react";
import { AccountInfo } from "./components/AccountInfo";
import { ProfileInfoHelper } from "./helper";
import OverviewTabs from "./components/OverviewTabs";

export const ProfileInfoView = () => {
    const { stateUser } = ProfileInfoHelper()
    return ( 
        <React.Fragment>
            <Tab.Container defaultActiveKey="overviewTabs">
                <div className="mt-1 -ml-3 -mr-3 rounded-none card">
                    <AccountInfo  className="card-body !px-2.5" user={stateUser!}/>
                    <div className="card-body !px-2.5 !py-0">
                        <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs">
                            <Nav.Item eventKey="overviewTabs" className="group">
                                <a href="#!" data-tab-toggle data-target="overviewTabs" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 dark:group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]">Overview</a>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="overviewTabs" id="overviewTabs">
                        <OverviewTabs />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </React.Fragment>
    );
}