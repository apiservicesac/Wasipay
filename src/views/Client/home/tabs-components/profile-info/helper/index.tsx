// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "sonner";
import { useShop } from "@/features/shop/infrastructure/driving-adapter/hooks/useShop";
import { ShopEntity } from "@/features/shop/domain/entities";


export const ShopProfileTabHelper = () => {

    const { getShop, update } = useShop();
    const shop : ShopEntity | undefined = getShop()

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
                update(values)                           
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
            name: shop?.name!,
            description: shop?.description!,
            phone: shop?.phone!,
            email: shop?.email!,
            address: shop?.address!,
            city: shop?.city!,
            country: 'Perú',
            social_media: shop?.social_media!,
        });
    }

    return {
        shop,
        validation,
        handleSubmit,
        UpdateStateFormData,
    }
}