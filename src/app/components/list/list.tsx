import { Product } from "../product/product";
import "./list.scss";
import Waffle from "../../../../public/waffle/image-waffle-mobile.jpg";
import Creme from "../../../../public/creme_brulee/image-creme-brulee-mobile.jpg";
import Macaron from "../../../../public/macaron/image-macaron-mobile.jpg";
import Tiramisu from "../../../../public/tiramisu/image-tiramisu-mobile.jpg";
import Baklava from "../../../../public/baklava/image-baklava-mobile.jpg";
import Pie from "../../../../public/pie/image-meringue-mobile.jpg";
import Cake from "../../../../public/cake/image-cake-mobile.jpg";
import Brownie from "../../../../public/brownie/image-brownie-mobile.jpg";
import Panna_Cotta from "../../../../public/panna_cotta/image-panna-cotta-mobile.jpg";

export function ProductList() {
    return (
        <div className="box-grid">
            <h1>Desserts</h1>
            <div className="list-grid">
                <Product image={Waffle} productType={"Waffle"} productName={"Waffle with Berries"} productPrice={"6.50"} />
            {/* <Product image={Creme} productType={"Crème Brûlée"} productName={"Vanilla Bean Crème Brûlée"} productPrice={"7.00"} />
                <Product image={Macaron} productType={"Macaron"} productName={"Macaron Mix of Five"} productPrice={"8.00"} />
                <Product image={Tiramisu} productType={"Tiramisu"} productName={"Classic Tiramisu"} productPrice={"5.50"} />
                <Product image={Baklava} productType={"Baklava"} productName={"Pistachio Baklava"} productPrice={"4.00"} />
                <Product image={Pie} productType={"Pie"} productName={"Lemon Meringue Pie"} productPrice={"5.00"} />
                <Product image={Cake} productType={"Cake"} productName={"Red Velvet Cake"} productPrice={"4.50"} />
                <Product image={Brownie} productType={"Brownie"} productName={"Salted Caramel Brownie"} productPrice={"5.50"} />
                <Product image={Panna_Cotta} productType={"Panna Cotta"} productName={"Vanilla Panna Cotta"} productPrice={"6.50"} /> */}
            </div>
        </div>
    )
}