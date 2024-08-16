import React from "react";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";
import { PaymentMethodShopEntity as Entity } from "@/features/payment_method_shop/domain/entities";
import { ShopEntity } from "@/features/shop/domain/entities";
import { toast } from "sonner";
import { useShop } from "@/features/shop/infrastructure/driving-adapter/hooks/useShop";
import { usePaymentMethodShop } from "@/features/payment_method_shop/infrastructure/driving-adapter/hooks/usePaymentMethodShop";

export const PaymentMethodHelper = () => {

    const { getShop } = useShop()
    const { created, updated, deleted } = usePaymentMethodShop()

    const shop_profile : ShopEntity = getShop()
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
            deleted(isEdit?.id!)
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
                updated(isEdit?.id!, formData)
            } else {
                created(formData)
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