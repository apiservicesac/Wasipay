import { useTabContext } from "@/common/components/Tab/TabContext";
import { UseLocalContext } from "@/core/context/UseLocalContext";
import { ProductEntity } from "@/features/product/domain/entities";
import React from "react";


export const ProductImagesHelper = () => {

    const { changeTab } = useTabContext();

    const { productCreate, setStateProduct } = UseLocalContext()
    const [selectedFiles, setSelectedFiles] = React.useState<any>([])

    const handleAcceptedFiles = (files: any) => {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setSelectedFiles(files)
    }
    /**
     * Formats the size
     */
    const formatBytes = (bytes: any, decimals = 2) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }

    const nextPage = () => {        
        const newProduct : ProductEntity = {
            ...productCreate,
            images: selectedFiles,
            // Types of property 'publish_date_time' are incompatible.
            // Assert type to Date
            publish_date_time: productCreate?.publish_date_time as Date,            
        }
        setStateProduct(newProduct)
        changeTab("completed")
    }

    return {
        nextPage,
        handleAcceptedFiles,    
        selectedFiles, setSelectedFiles
    }
}