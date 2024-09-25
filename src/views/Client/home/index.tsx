import React from "react";
import ShopProfileInfo from "./profile";
import Tab from "@/common/components/Tab/Tab";
import { Nav } from "@/common/components/Tab/Nav";
import NavItemCustom from "@/common/components/Tab/NavItemCustom";
import Store from "./tabs-components/store";
import { LayoutPublic } from "@/common/layout_2";
import { withTranslation } from "react-i18next";
import Authorization from "@/common/security/Authorization";
import { ProfileInfo } from "./tabs-components/profile-info";
import { Integration } from "./tabs-components/integration";
import useFetchProducts from "@/features/product/infrastructure/driving-adapter/hooks/useFetchProducts";

const ShopView = (props: any) => {
    useFetchProducts()
    return (
        <LayoutPublic>
            <React.Fragment>
                <Tab.Container defaultActiveKey="store-tab">
                    <div className="mt-0 rounded-t-none card">
                        <ShopProfileInfo  className="card-body !px-2.5" />
                        <div className="card-body !px-2.5 !py-0">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs items-center justify-center">
                                <NavItemCustom label={props.t("Store")} eventKey={'store-tab'}/>  
                                <Authorization onlyAdmin={true}>
                                    <NavItemCustom label={props.t("Profile")} eventKey="info-tab" />  
                                    <NavItemCustom label={props.t("Integrations")} eventKey="integration-tab" />  
                                </Authorization> 
                            </Nav>
                        </div>
                    </div>
                    <Tab.Content className="tab-content">
                        <Tab.Pane eventKey="store-tab" id="store-tab">                            
                            <Store />
                        </Tab.Pane>
                        <Authorization onlyAdmin={true}>
                            <Tab.Pane eventKey="info-tab" id="info-tab">                            
                                <ProfileInfo />
                            </Tab.Pane>
                            <Tab.Pane eventKey="integration-tab" id="integration-tab">                            
                                <Integration />
                            </Tab.Pane>                    
                        </Authorization>
                    </Tab.Content>
                </Tab.Container>
            </React.Fragment>
        </LayoutPublic>
    );
}

export default withTranslation()(ShopView);