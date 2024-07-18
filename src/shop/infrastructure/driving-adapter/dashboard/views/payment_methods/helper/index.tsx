import React from "react";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";
import { useQueryClient } from "@tanstack/react-query";
import { PaymentMethodShopEntity as Entity, ShopEntity } from "@/shop/domain/entities";

import { ImplementationAxios as Axios } from "@/shop/infrastructure/implementation/axios/payment_methods_shop";
import { CreateUseCase, DeleteUseCase, UpdateUseCase } from "@/shop/application/use_cases/payment_methods_shop";
import { toast } from "sonner";

export const PaymentMethodHelper = () => {


    const repository = new Axios()
 


    const queryClient =  useQueryClient()
    const shop_profile : ShopEntity | undefined = queryClient.getQueryData(['shop_profile'])
    const data = shop_profile?.payment_method

    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [isEdit, setIsEdit] = React.useState<Entity | null>(null);

    // Delete Modal
    const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    const openModalDelete = (item: Entity) => {
        setIsEdit(item)
        setDeleteModal(true);
    };

    const handleDeleteClick = async () => {
        try {
            const deleteUseCase = new DeleteUseCase(repository)
            await deleteUseCase.run(import.meta.env.VITE_SHOP_ID, isEdit?.id!)            
        }catch {
            toast.error("Error al eliminar el metodo de pago")            
        }finally {
            setDeleteModal(false);
        }
    }

    // Update Data
    const handleUpdateClick = (item: Entity) => {        
        if(item.image) {
            setSelectfiles({priview: item.image.url, name: item.image.nam})
        }
        setIsEdit(item);
        setShowModal(true);
    };

    // validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            payment_method: isEdit ? (isEdit.payment_method as Entity).id : "",
            account_number: isEdit ? isEdit.account_number : "",
            interbank_account_number: isEdit ? isEdit.interbank_account_number : "",
            currency_type: isEdit ? isEdit.currency_type : "",            
        },
        validationSchema: Yup.object({
            payment_method: Yup.string().required("Payment Method is required"),
            account_number: Yup.string().required("Account Number is required"),
            currency_type: Yup.string().required("Currency Type is required"),
        }),

        onSubmit: async (values: any) => {
            const formData = new FormData();
            console.log(values)
            Object.keys(values).forEach(key => {
                if (values[key]) {
                    formData.append(key, values[key]);
                }
            });

            if(selectfiles && selectfiles.type) {                
                formData.append("images", selectfiles)
                if(isEdit && isEdit.image){
                    formData.append("image_delete_id", isEdit.image.id)
                }
            }

            if (isEdit) {                
                formData.append("shop_id", import.meta.env.VITE_SHOP_ID)
                const updateUseCase = new UpdateUseCase(repository)
                await updateUseCase.run(isEdit.id!, formData)         
            } else {
                const createUseCase = new CreateUseCase(repository)                
                await createUseCase.run(import.meta.env.VITE_SHOP_ID, formData)                
            }
            toggleOptions();
        },
    });

    // Dropzone
    const [selectfiles, setSelectfiles] = React.useState<any>();
    const handleAcceptfiles = (files: any) => {
        const newImages = files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
            });
        });
        setSelectfiles(newImages[0]);
    };


    const handleOpenSelectFileClick = (e: any) => {
        e.stopPropagation();
    };

    // Open Toggle Options
    const toggleOptions = () => {
        if (showModal) {
            setShowModal(false);
            setIsEdit(null);
        } else {
            setShowModal(true);            
            validation.resetForm();
        }
    };

    return {
        data,
        handleUpdateClick,
        handleDeleteClick,
        toggleOptions,

        validation,

        // Modal
        showModal,
        isEdit,

        // Dropzone
        handleAcceptfiles,
        selectfiles,
        setSelectfiles,
        handleOpenSelectFileClick,

        // Delete Modal
        openModalDelete,
        deleteModal,
        deleteToggle,
    }
}