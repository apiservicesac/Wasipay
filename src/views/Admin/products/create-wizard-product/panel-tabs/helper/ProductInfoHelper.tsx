import { useTabContext } from "@/common/components/Tab/TabContext";
import { UseLocalContext } from "@/core/context/UseLocalContext";
import { ProductEntity } from "@/features/product/domain/entities";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useProduct } from "@/features/product/infrastructure/driving-adapter/hooks/useProduct";
import { useParams } from "react-router-dom";


export const ProductInfoHelper = () => {

    const { id: product_id } = useParams()
    
    const { nextCodeProduct, getById } = useProduct();

    const edit_product = getById(product_id!)

    const { changeTab } = useTabContext();

    const { setStateProduct } = UseLocalContext();

    
    const productCategoryOptions = [
        { value: '', label: 'Select Category' },
        { value: 'Mobiles, Computers', label: 'Mobiles, Computers' },
        { value: 'TV, Appliances, Electronics', label: 'TV, Appliances, Electronics' },
        { value: "Men's Fashion", label: "Men's Fashion" },
        { value: "Women's Fashion", label: "Women's Fashion" },
        { value: 'Home, Kitchen, Pets', label: 'Home, Kitchen, Pets' },
        { value: 'Beauty, Health, Grocery', label: 'Beauty, Health, Grocery' },
        { value: 'Books', label: 'Books' },
    ];
    
    const productTypeOptions = [
        { value: '', label: 'Select Type' },
        { value: 'SINGLE', label: 'Single' },
        { value: 'UNIT', label: 'Unit' },
        { value: 'BOX', label: 'Boxed' },
    ];
    
    
    const validation :any = useFormik({
        initialValues: {
            name: edit_product ? edit_product.product?.name : "",
            product_code: edit_product ? edit_product.product?.product_code : "",
            product_category: edit_product ? edit_product.product?.product_category : "",
            product_type: edit_product ? edit_product.product?.product_type : "",
            description: edit_product ? edit_product.product?.description : "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Product Title is required"),
            product_code: Yup.string().required("Code Product is required"),
            product_category: Yup.string().required("Product Category is required."),
            product_type: Yup.string().required("Product Type is required."),
            description: Yup.string().required("Description is required."),      
        }),
        onSubmit: (values: any) => {
            setStateProduct(values as ProductEntity)
        },
    });

    const handleProductCategoryChange = (selectedOption: any) => {
        validation.setFieldValue('product_category', selectedOption ? selectedOption.value : '');
    };

    const handleProductTypeChange = (selectedOption: any) => {
        validation.setFieldValue('product_type', selectedOption ? selectedOption.value : '');
    };

    const onHandleSubmitForm = async (event: any) => {
        event.preventDefault();
        validation.handleSubmit()
        if(Object.keys(validation.errors).length === 0){            
            changeTab("product-details")
        }
    }

    const handleEditorDescriptionChange = (_: any, editor: any) => {
        const data = editor.getData();
        validation.setFieldValue('description', data);
    };

    const getNextCodeProduct = async () => {        
        const product_code = await nextCodeProduct();
        validation.setFieldValue('product_code', product_code);    
    }

    React.useEffect(() => {
        if(!edit_product) {
            getNextCodeProduct()
        }
    }, [])

    return {
        validation,
        onHandleSubmitForm,
        productCategoryOptions, productTypeOptions,
        handleProductCategoryChange, handleProductTypeChange,
        handleEditorDescriptionChange,
    }
}