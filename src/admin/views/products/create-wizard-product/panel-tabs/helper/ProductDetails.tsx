import { useTabContext } from "@/common/components/Tab/TabContext";
import { useFormik } from "formik";
import * as Yup from "yup";


export const ProductDetailsHelper = () => {

    const { changeTab } = useTabContext();

    const taxAplicableOptions = [
        { value: 'INCLUDE_PRICE', label: 'Included in Price' },
        { value: 'NOT_INCLUDE_PRICE', label: 'Not Included in Price' },
    ]

    const statusProductOptions = [
        { value: 'AVAILABLE', label: 'Available' },
        { value: 'SOLD_OUT', label: 'Sold out' },
        { value: 'OUT_OF_STOCK', label: 'out of stock' },
    ]

    const visibilityProductOptions = [
        { value: 'DRAFT', label: 'Draft' },
        { value: 'PUBLISHED', label: 'Published' },        
        { value: 'SCHEDULED', label: 'Scheduled' },
        { value: 'HIDDEN', label: 'Hidden' },        
    ]

    const validation :any = useFormik({
        initialValues: {            
            quantity:  1,
            sku: "",
            brand: "",
            price: 0,
            discount: 0,
            tax: "INCLUDE_PRICE",
            publish_date_time: new Date(),
            status: "AVAILABLE",
            visibility: "DRAFT",
            tags: ""
        },
        validationSchema: Yup.object().shape({            
            quantity: Yup.number()
                .positive("A quantity can't start with a minus")
                .integer("A quantity can't include a decimal point")
                .required('A quantity is required'),
            sku: Yup.string().required("SKU is required."),
            brand: Yup.string().required("Brand is required."), 
            price: Yup.number()
                .positive("A price can't start with a minus")
                .integer("A price can't include a decimal point")
                .required('A price is required'),
            discount: Yup.number()
                .integer("A discount can't include a decimal point")
                .required('A discount is required'),
            tax: Yup.string().required("Tax is required"),            
            publish_date_time: Yup.string().required("publish_date_time is required"),            
            status: Yup.string().required("Status is required"),            
            visibility: Yup.string().required("Visibility is required"),            
            tags: Yup.string().required("Tags is required"),          
        }),
        onSubmit: (values: any) => {
            console.log(values);
        },
    });

    const handleTaxAplicableOptionsChange = (selectedOption: any) => {
        validation.setFieldValue('tax', selectedOption ? selectedOption.value : '');
    };

    const handleStatusProductOptionsChange = (selectedOption: any) => {
        validation.setFieldValue('status', selectedOption ? selectedOption.value : '');
    };

    const handleVisibilityProductOptionsChange = (selectedOption: any) => {
        validation.setFieldValue('visibility', selectedOption ? selectedOption.value : '');
    };

    const handlePublishDateTimeOptionsChange = (target: any) => {
        console.log(target)

        // validation.setFieldValue('publish_date_time', selectedOption ? selectedOption.value : '');
    };

    const onHandleSubmitForm = async (event: any) => {
        event.preventDefault();
        validation.handleSubmit()
        if(Object.keys(validation.errors).length === 0){
            changeTab("product-images")
        }
    }

    return {
        validation,
        onHandleSubmitForm,
        taxAplicableOptions, handleTaxAplicableOptionsChange,
        statusProductOptions, handleStatusProductOptionsChange,
        visibilityProductOptions, handleVisibilityProductOptionsChange, 
        handlePublishDateTimeOptionsChange,
    }
}