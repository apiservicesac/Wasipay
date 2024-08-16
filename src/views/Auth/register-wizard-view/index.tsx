import React from "react";
import BreadCrumb from "@/common/BreadCrumb";
import { MapPin, PartyPopper, Rocket, User2 } from "lucide-react";
import Tab from "@/common/components/Tab/Tab";
import { Nav } from "@/common/components/Tab/Nav";
import { LayoutBasic } from "@/common/layout_0";

import { ShopInfo } from "./panel-tabs/ShopProfile";
import { PersonalInfo } from "./panel-tabs/ProfileInfo";
import { AddressInfo } from "./panel-tabs/AddressInfo";
import { Completed } from "./panel-tabs/Completed";

export const RegisterWizardView = () => {
    return (
        <LayoutBasic>
        <React.Fragment>
            
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Register Wizard" pageTitle="Wizards" />

                <div className="grid grid-cols-1 2xl:grid-cols-12">
                    <div className="col-span-12">
                        <div className="card">
                            <div className="card-body">
                                <Tab.Container defaultActiveKey="shop-info">

                                    <Nav className="grid grid-cols-1 gap-3 lg:grid-cols-4 nav-tabs form-wizard">
                                        <Nav.Item eventKey="shop-info" className="group/item">
                                            <a href="#!" data-target="shop-info" data-tab-id="1" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <Rocket className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">1. Shop Info</span>
                                            </a>
                                        </Nav.Item>
                                        <Nav.Item eventKey="personal-info" className="group/item">
                                            <a href="#!" data-target="personal-info" data-tab-id="2" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <User2 className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">2. Personal Info</span>
                                            </a>
                                        </Nav.Item>
                                        <Nav.Item eventKey="address-info" className="group/item">
                                            <a href="#!" data-target="address-info" data-tab-id="3" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <MapPin className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">3. Address Info</span>
                                            </a>
                                        </Nav.Item>
                                        <Nav.Item eventKey="completed" className="group/item">
                                            <a href="#!" data-target="completed" data-tab-id="4" className="block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50">
                                                <PartyPopper className="block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500" />
                                                <span className="block mt-3 font-medium text-15">4. Completed</span>
                                            </a>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content className="mt-5 tab-content">
                                        <Tab.Pane eventKey="shop-info">
                                            <ShopInfo />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="personal-info">
                                            <PersonalInfo />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="address-info">
                                            <AddressInfo />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="completed">
                                            <Completed />
                                        </Tab.Pane>
                                    </Tab.Content>

                                </Tab.Container>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
        </LayoutBasic>
    );
}