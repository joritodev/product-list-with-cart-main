import Image from "next/image";
import { AddToCart } from "../icons/add-to-cart";
import "./product.scss";
import { DecrementIcon } from "../icons/decrement-icon";
import { IncrementIcon } from "../icons/increment-icon";

interface ProductProps {
    image: string;
    productType: string;
    productName?: string;
    productPrice?: string;
}
export function Product({ image, productType, productName, productPrice }: ProductProps) {
    return (
        <div className="box">
            <div className="img"></div>
            <div className="cart">
                <a className="addcart">
                    <DecrementIcon />
                    <AddToCart />
                    <span>Add to Cart</span>
                    <IncrementIcon />
                </a>
            </div>
            <div className="productName-price">
                <span>{productType}</span>
                <h3 className="name">{productName}</h3>
                <h3 className="price">${productPrice}</h3>
            </div>
        </div>
    )
}