import { useAppSelector } from "@/core/redux/hooks"
import { AddressEntity, OrderEntity, OrderLineEntity, ProductItemEntity } from "@/shop/domain/entities"
import { OrderStatus } from "@/shop/domain/enums"
import { useQueryClient } from "@tanstack/react-query"
import { useFormik } from "formik"
import * as Yup from "yup";
import { ImplementationAxios as AxiosOrder } from "@/shop/infrastructure/implementation/axios/order";
import { GetNextCodeUseCase } from "@/shop/application/use_cases/order";

export const CheckoutHelper = () => {
    const shop_id = `${import.meta.env.VITE_SHOP_ID}`

    const queryClient =  useQueryClient()
    const cart_products : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])
    const filter_product_cart = cart_products?.filter((product) => product.in_cart === true)
    const cart_price = useAppSelector((state) => state.cartReducer)


    const validation :any = useFormik({
        initialValues: {            
            first_name:  "",
            last_name:  "",
            phone_number:  "",
            email:  "",
            customer_id:  "123456789",
            street: "",
            city: "",
            state: "",
            postal_code: "123456789",
            coordinates: {
                latitude:  0, longitude: 0
            },
            country: "Peru",
        },
        validationSchema: Yup.object().shape({            
            first_name: Yup.string().required("First Name is required."), 
            last_name: Yup.string().required("Last Name is required."), 
            phone_number: Yup.string().required("Phone Number is required."), 
            email: Yup.string().required("Address is required."), 
            // customer_id: Yup.string(),
            street: Yup.string().required("Street is required."), 
            city: Yup.string().required("City is required."), 
            state: Yup.string().required("State is required."), 
            postal_code: Yup.string(),            
            // coordinates: Yup.string(),
            country: Yup.string().required("Status is required"),
        }),
        onSubmit: () => {            
            
        },
    });

    const onHandleSubmitOrder = async (event: any) => {
        event.preventDefault();        
        await validation.handleSubmit(event);
        if(Object.keys(validation.errors).length === 0){
            await createOrder();
        }    
    }


    const createOrder = async () => {
        

        const newAddress : AddressEntity = {                    
            ...validation.values,
        }

        const orderLines : OrderLineEntity[] = filter_product_cart?.map((line) => {
            return {
                product_id: line.product?.id,
                quantity: line.quantity,
                unit_price: line.product?.price,
                total_price: line.total_price
                
            } as OrderLineEntity
        })!
        
        const orderRepository = new AxiosOrder()
        const getNextCode = new GetNextCodeUseCase(orderRepository)   
        const order_code = await getNextCode.run(shop_id)
        const newOrder: OrderEntity = {
            order_code,
            shop_id: shop_id,
            customer_id: "",
            order_date: new Date(),
            status: OrderStatus.PENDING,
            total_amount: cart_price.total_price,
            shipping_address: newAddress,
            billing_address: newAddress,
            order_lines: orderLines

        }

        console.log(newOrder)

    }

    return {
        filter_product_cart,
        cart_price,
        validation,
        onHandleSubmitOrder,
    }
}