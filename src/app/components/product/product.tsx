import { AddToCart } from "../icons/add-to-cart";

interface ProductProps {
    image: string | undefined;
    productType: string;
    productName: string;
    productPrice: number;
}
export function Product({ image,productType, productName, productPrice }: ProductProps) {
    return (
        <div className="box">
            <div className="img-addcart">
                <img src={image} alt={productName} />
                <a><AddToCart /> Add to Cart</a>
            </div>
            <div className="productName-price">
                <span>{productType}</span>
                <h3 className="name">{productName}</h3>
                <h3 className="price">${productPrice}</h3>
            </div>
        </div>
    )
}