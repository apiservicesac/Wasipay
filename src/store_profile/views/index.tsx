import React from "react";
import ProfileInfo from "./profile_info";
import Tab from "@/common/components/Tab/Tab";
import { Nav } from "@/common/components/Tab/Nav";
import Layout from "@/common/Layout";
import NavItemCustom from "@/common/components/Tab/NavItemCustom";
import Catalog from "./catalog";

const StoreProfile = () => {

    return (
        <Layout>
            <React.Fragment>
                <Tab.Container defaultActiveKey="overviewTabs">
                    <div className="mt-1 -ml-3 -mr-3 rounded-none card">
                        <ProfileInfo  className="card-body !px-2.5"/>
                        <div className="card-body !px-2.5 !py-0">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs items-center justify-center">
                                <NavItemCustom label="Store"/>  
                            </Nav>
                        </div>
                    </div>
                    <Tab.Content className="tab-content">
                        <Tab.Pane eventKey="overviewTabs" id="overviewTabs">                            
                            <Catalog />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </React.Fragment>
        </Layout>
    );
}

export default StoreProfile;