import React from "react";
import Dropzone from "react-dropzone"
import { MoveLeft, MoveRight, UploadCloud } from "lucide-react";
import { ProductImagesHelper } from "./helper/ProductImagesHelper";


export const ProductImages = () => {


    const helper = ProductImagesHelper()

    return (
        <React.Fragment>
            <h5 className="mb-3">Product Images</h5>

             <div className="card">
                    <div className="card-body">
                        <div className="flex items-center justify-center border rounded-md cursor-pointer bg-slate-100 dropzone border-slate-200 dark:bg-zink-600 dark:border-zink-500 dz-clickable">

                            <Dropzone
                                onDrop={(acceptedFiles: any) => {
                                    helper.handleAcceptedFiles(acceptedFiles)
                                }}
                            >
                                {({ getRootProps, getInputProps }: any) => (
                                    <div
                                        className="w-full py-5 text-lg text-center dz-message needsclick"
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />
                                        <div className="mb-3">
                                            <UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500"></UploadCloud>
                                        </div>

                                        <h5 className="mb-0 font-normal text-slate-500 text-15">Drag and drop your files or <a href="#!">browse</a> your files</h5>
                                    </div>
                                )}
                            </Dropzone>
                        </div>

                        <ul className="mb-0" id="dropzone-preview">
                            {
                                (helper.selectedFiles || [])?.map((f: any, i: any) => {
                                    return (
                                        <li className="mt-2" id="dropzone-preview-list" key={i + "-file"}>
                                            <div className="border rounded border-slate-200 dark:border-zink-500">
                                                <div className="flex p-2">
                                                    <div className="shrink-0 me-3">
                                                        <div className="p-2 rounded-md size-14 bg-slate-100 dark:bg-zink-600">
                                                            <img data-dz-thumbnail className="block w-full h-full rounded-md" src={f.preview} alt={f.name} />
                                                        </div>
                                                    </div>
                                                    <div className="grow">
                                                        <div className="pt-1">
                                                            <h5 className="mb-1 text-15" data-dz-name>{f.name}</h5>
                                                            <p className="mb-0 text-slate-500 dark:text-zink-200" data-dz-size>{f.formattedSize}</p>
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 ms-3">
                                                        <button data-dz-remove
                                                            className="px-2 py-1.5 text-xs text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
                                                            onClick={() => {
                                                                const newImages = [...helper.selectedFiles];
                                                                newImages.splice(i, 1);
                                                                helper.setSelectedFiles(newImages);
                                                            }}
                                                        >Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between gap-2 mt-5">
                    <button type="button" data-action="prev" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"><MoveLeft className="inline-block h-4 mr-1 rtl:rotate-180" /> <span className="align-middle">Previous</span></button>
                    <button type="button" onClick={helper.nextPage} data-action="next" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Next</span> <MoveRight className="inline-block h-4 ml-1 rtl:rotate-180" /></button>
                </div>
            

        </React.Fragment>
    );
}