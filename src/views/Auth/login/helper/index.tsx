
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { UserEntity } from "@/features/user/domain/entities";
import { toast } from "sonner";
import { useUser } from "@/features/user/infrastructure/driving-adapter/hooks/useUser";

export const LoginHelper  = () => {

    const navigate = useNavigate()
    const { init, login } = useUser()
 
    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: async (values: UserEntity) => {
            try {
                login(values.email!, values.password!)
                init()
                navigate('/')
            }catch(e:any) {
                toast.error("Error de Credenciales")
            }
        }
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        validation.handleSubmit()      
        return false;
    }


    return {
        handleSubmit,
        validation,

    }
}