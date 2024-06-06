
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { ImplementationAxios as AxiosUser } from "@/Auth/infrastructure/implementation/axios";
import { LoginUseCase } from "@/Auth/application/use_cases";
import { UserEntity } from "@/Auth/domain/entities";
import { toast } from "sonner";

export const LoginHelper  = () => {

    
    const navigate = useNavigate()

        
    // Loaded Data Product  
    const userRepository = new AxiosUser()
    const userUseCase = new LoginUseCase(userRepository)   

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
                const response = await userUseCase.run(values.email!, values.password!)
                toast.error(response.message)
                navigate('/')
            }catch(e:any) {
                toast.error(e.message)
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