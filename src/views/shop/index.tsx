import React from "react";
import Tab from "@/common/components/Tab/Tab";
import { Nav } from "@/common/components/Tab/Nav";
import NavItemCustom from "@/common/components/Tab/NavItemCustom";
import Store from "./components/tabs-components/store";
import { LayoutPublic } from "@/common/header/layout";
import { withTranslation } from "react-i18next";
import ShopProfileInfo from "./components/profile";
import useFetchProducts from "@/features/product/infrastructure/driving-adapter/hooks/useFetchProducts";

const ShopView = (props: any) => {
    useFetchProducts()
    return (
        <LayoutPublic>
            <React.Fragment>
                <Tab.Container defaultActiveKey="store-tab">
                    <div className="mt-0 rounded-t-none card" id="container-profile">
                        <ShopProfileInfo className="card-body !px-2.5" />
                        <div className="card-body !px-2.5 !py-0">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs items-center justify-center">
                                <NavItemCustom label={props.t("Shop")} eventKey={'store-tab'} />                                   
                            </Nav>
                        </div>
                    </div>
                    <Tab.Content className="tab-content">
                        <Tab.Pane eventKey="store-tab" id="store-tab">                            
                            <Store />
                        </Tab.Pane>                        
                    </Tab.Content>
                </Tab.Container>
            </React.Fragment>
        </LayoutPublic>
    );
};

export default withTranslation()(ShopView);
