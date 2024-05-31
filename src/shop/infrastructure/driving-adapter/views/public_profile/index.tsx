import React from "react";
import ShopProfileInfo from "./components/profile";
import Tab from "@/common/components/Tab/Tab";
import { Nav } from "@/common/components/Tab/Nav";
import NavItemCustom from "@/common/components/Tab/NavItemCustom";
import Catalog from "./components/catalog";
import Layout from "./components/layout";
import { ProfileInfo } from "./components/profile-info";

const ShopComponent = () => {

    return (
        <Layout>
            <React.Fragment>
                <Tab.Container defaultActiveKey="store-tab">
                    <div className="mt-0 rounded-t-none card">
                        <ShopProfileInfo  className="card-body !px-2.5"/>
                        <div className="card-body !px-2.5 !py-0">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs items-center justify-center">
                                <NavItemCustom label="Store" eventKey={'store-tab'}/>  
                                <NavItemCustom label="Profile" eventKey={'profile-tab'}/>  
                            </Nav>
                        </div>
                    </div>
                    <Tab.Content className="tab-content">
                        <Tab.Pane eventKey="store-tab" id="store-tab">                            
                            <Catalog />
                        </Tab.Pane>
                        <Tab.Pane eventKey="profile-tab" id="profile-tab">                            
                            <ProfileInfo />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </React.Fragment>
        </Layout>
    );
}

export default ShopComponent;