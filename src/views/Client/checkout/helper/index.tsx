import { useFormik } from "formik"
import * as Yup from "yup";
import { UseLocalContext } from "@/core/context/UseLocalContext"
import { CartHelper } from "@/common/components/cart/helper"
import { useNavigate } from "react-router-dom"
import React from "react"
import { toast } from "sonner"
import { ShopEntity } from "@/features/shop/domain/entities";
import { useAddress } from "@/features/address/infrastructure/driving-adapter/hooks/useAddress";
import { OrderStatus } from "@/features/order/domain/enums";
import { OrderEntity, OrderLineEntity, OrderPaymentEntity } from "@/features/order/domain/entities";
import { useShop } from "@/features/shop/infrastructure/driving-adapter/hooks/useShop";
import { useOrder } from "@/features/order/infrastructure/driving-adapter/hooks/useOrder";
import { useAppSelector } from "@/core/redux/hooks";
import { ProductItemEntity } from "@/features/product/domain/entities";

export const CheckoutHelper = () => {
    const { stateUser } = UseLocalContext()
    const { resetProductsCart } = CartHelper()

    const [paymentMethod, setPaymentMethod] = React.useState<string | null >(null)

    const { create: createAddress } = useAddress();

    const { getShop } = useShop();
    const shop_profile : ShopEntity = getShop()

    const cart_products = useAppSelector((state) => state.productReducer.products)

    const filter_product_cart = cart_products?.filter((product: ProductItemEntity) => product.in_cart === true)

    const { create } = useOrder()

    const cart_price = useAppSelector((state) => state.cartReducer)
    const navigate = useNavigate()

    const validation :any = useFormik({
        initialValues: {            
            first_name:  "",
            last_name:  "",
            phone_number:  "",
            email:  "",
            street: "",
            city: "",
            state: "",
            postal_code: "",
            country: "Peru",
        },
        validationSchema: Yup.object().shape({            
            first_name: Yup.string().required("First Name is required."), 
            last_name: Yup.string().required("Last Name is required."), 
            phone_number: Yup.string().required("Phone Number is required."), 
            email: Yup.string().required("Address is required."), 
            street: Yup.string().required("Street is required."), 
            city: Yup.string().required("City is required."), 
            state: Yup.string().required("State is required."), 
            postal_code: Yup.string(),            
            country: Yup.string().required("Status is required"),
        }),
        onSubmit: () => {            
        },
    });

    const onHandleSubmitOrder = async (event: any) => {
        event.preventDefault();        
        await validation.handleSubmit(event);
        if(Object.keys(await validation.validateForm()).length === 0){            
            if(paymentMethod !== null){
                await createOrder();
            }else {
                toast.error("Debe seleccionar un metodo de pago.")                
            }        
        }else {
            toast.error("Debe rellenar todo el formulario correctament.")
        }
    }


    const createOrder = async () => {
        
        const address = await createAddress(validation.values)!

        const orderLines : OrderLineEntity[] = filter_product_cart?.map((line: ProductItemEntity) => {
            return {
                product_id: line.product?.id,
                quantity: line.quantity,
                unit_price: line.product?.price,
                total_price: line.total_price                
            } as OrderLineEntity
        })!

        const orderPayment : OrderPaymentEntity = {
            image: null,
            payment_method: paymentMethod!
        }
                    
        const newOrder: OrderEntity = {            
            customer: stateUser?.id,
            order_date: new Date(),
            status: OrderStatus.PENDING,
            total_amount: cart_price.total_price,
            shipping_address: address ? address.id as string : undefined,
            billing_address: address ? address.id as string : undefined,
            order_lines: orderLines,
            payment: orderPayment,
        }
        create(newOrder)
        resetProductsCart()
        navigate("/")
        toast.success("Su orden fue recibida Correctamente.")
    }

    return {
        filter_product_cart,
        cart_price,
        validation,
        onHandleSubmitOrder,
        shop_profile,
        setPaymentMethod,
    }
}