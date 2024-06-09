// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ShopEntity } from "@/shop/domain/entities";
import { useQueryClient } from "@tanstack/react-query";

import { ImplementationAxios as AxiosShop } from "@/shop/infrastructure/implementation/axios/shop";
import { UpdateUseCase } from "@/shop/application/use_cases/shop";
import { toast } from "sonner";


export const ShopProfileTabHelper = () => {

    const queryClient =  useQueryClient()

    // Loaded Data Product  
    const shopRepository = new AxiosShop()
    const shopUseCase = new UpdateUseCase(shopRepository)   

    const shop : ShopEntity | undefined = queryClient.getQueryData(['shop_profile'])

    const validation = useFormik({      
        initialValues: {
            name: "",
            description: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            country: 'Perú',
            social_media: {}
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            description: Yup.string().required("Please Enter Your Description"),
            phone: Yup.string().required("Please Enter Your Phone"),
            email: Yup.string().required("Please Enter Your Email").email("Invalid email format"),
            // address: Yup.string().required("Please Enter Your Address"),
            city: Yup.string().required("Please Enter Your City"),
        }),
        onSubmit: async (values: ShopEntity) => {            
            try {
                const response = await shopUseCase.run(shop?.id!,values)
                queryClient.cancelQueries({ queryKey: ['shop_profile'] })
                queryClient.setQueryData(['shop_profile'], response)                 
                toast.success("Datos Actualizados Correctamente.")                
            }catch(e:any) {
                toast.error("Error al actualizar.")
            }
        }
    });

    const handleSubmit = (event: any) => {        
        event.preventDefault();
        validation.handleSubmit()
        return false;
    }

    const UpdateStateFormData = () => {
        validation.setValues({
            ...validation.initialValues,
            name: shop?.name!,
            description: shop?.description!,
            phone: shop?.phone!,
            email: shop?.email!,
            address: shop?.address!,
            city: shop?.city!,
        });
    }

    return {
        shop,
        validation,
        handleSubmit,
        UpdateStateFormData,
    }
}