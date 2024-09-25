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
            if (isEdit) {                
                updated(isEdit?.id!, values)
            } else {
                created(values)
            }
            toggleOptions();
        },
    });

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

        // Delete Modal
        openModalDelete,
        deleteModal,
        deleteToggle,
    }
}