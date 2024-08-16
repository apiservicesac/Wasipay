import { ProductEntity } from "@/features/product/domain/entities";

export const formatCurrency = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
});


export const formatDiscountPrice = (product: ProductEntity) => {
    const price = product?.price ?? 0;
    const discount = product?.discount ?? 0;
    const discountedPrice = price - (price * discount / 100);
    return formatCurrency.format(discountedPrice)
}