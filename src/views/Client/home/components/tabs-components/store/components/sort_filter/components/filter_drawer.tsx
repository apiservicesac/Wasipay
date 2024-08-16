import Collapse from "@/common/components/Collapse/Collapse";
import Drawer from "@/common/components/Drawer";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export const FilterDrawer = ({drawerFilter, drawerEndToggle}: {drawerFilter:any, drawerEndToggle:any}) => {

    return (
        <Drawer show={drawerFilter} onHide={drawerEndToggle} id="drawerEnd" drawer-end="true" className="fixed inset-y-0 flex flex-col w-3/4 transition-transform duration-300 ease-in-out transform bg-white shadow right-0 md:w-80 z-drawer dark:bg-zink-600">
            <Drawer.Header className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
                closeButtonClass="lucide lucide-x size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50">
                <Drawer.Title className="text-15">Filtered by:</Drawer.Title>
                <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
            </Drawer.Header>
            <Drawer.Body className="h-full overflow-y-auto">
                <div className="card-body">                    
                    <Collapse>
                        <Collapse.Trigger className="flex items-center w-full px-4 py-2 text-left collapsible-header group/item border-b">
                            <h6 className="text-15">Category</h6>
                            <div className="ml-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content px-4 border-b">
                            Category Content
                        </Collapse.Content>
                    </Collapse>

                    <Collapse>
                        <Collapse.Trigger className="flex items-center w-full px-4 py-2 text-left collapsible-header group/item border-b">
                            <h6 className="text-15">Brand</h6>
                            <div className="ml-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content px-4 border-b">
                            Brand Content
                        </Collapse.Content>
                    </Collapse>

                    <Collapse>
                        <Collapse.Trigger className="flex items-center w-full px-4 py-2 text-left collapsible-header group/item border-b">
                            <h6 className="text-15">Price</h6>
                            <div className="ml-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content px-4 border-b">
                            Price Content
                        </Collapse.Content>
                    </Collapse>

                    <Collapse>
                        <Collapse.Trigger className="flex items-center w-full px-4 py-2 text-left collapsible-header group/item border-b">
                            <h6 className="text-15">Product Rating</h6>
                            <div className="ml-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content px-4 border-b">
                            Product Rating Content
                        </Collapse.Content>
                    </Collapse>
                </div>
            </Drawer.Body>           
        </Drawer>
    );
}