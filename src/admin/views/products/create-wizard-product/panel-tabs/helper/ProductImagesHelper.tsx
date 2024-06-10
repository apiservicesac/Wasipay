import { useTabContext } from "@/common/components/Tab/TabContext";
import React from "react";


export const ProductImagesHelper = () => {

    const { changeTab } = useTabContext();

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




    const nextPage = async () => {
        changeTab("completed")
    }

    return {
        nextPage,
        handleAcceptedFiles,    
        selectedFiles, setSelectedFiles
    }
}