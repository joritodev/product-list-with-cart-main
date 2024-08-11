import { Product } from "../product/product";
import "./list.scss";
import Data from "../../../data.json";

export function ProductList() {
  return (
    <div className="box-grid">
      <h1>Desserts</h1>
      <div className="list-grid">
        <Product
          image={"../waffle/image-waffle-mobile.jpg"}
          productType={"Waffle"}
          productName={"Waffle with Berries"}
          productPrice={"6.50"}
          amount={0}
        />
        <Product
          image={"../creme_brulee/image-creme-brulee-mobile.jpg"}
          productType={"Crème Brûlée"}
          productName={"Vanilla Bean Crème Brûlée"}
          productPrice={"7.00"}
          amount={0}
        />
        <Product
          image="../macaron/image-macaron-mobile.jpg"
          productType={"Macaron"}
          productName={"Macaron Mix of Five"}
          productPrice={"8.00"}
          amount={0}
        />
        <Product
          image="../tiramisu/image-tiramisu-mobile.jpg"
          productType={"Tiramisu"}
          productName={"Classic Tiramisu"}
          productPrice={"5.50"}
          amount={0}
        />
        <Product
          image="../baklava/image-baklava-mobile.jpg"
          productType={"Baklava"}
          productName={"Pistachio Baklava"}
          productPrice={"4.00"}
          amount={0}
        />
        <Product
          image="../pie/image-meringue-mobile.jpg"
          productType={"Pie"}
          productName={"Lemon Meringue Pie"}
          productPrice={"5.00"}
          amount={0}
        />
        <Product
          image="../cake/image-cake-mobile.jpg"
          productType={"Cake"}
          productName={"Red Velvet Cake"}
          productPrice={"4.50"}
          amount={0}
        />
        <Product
          image="../brownie/image-brownie-mobile.jpg"
          productType={"Brownie"}
          productName={"Salted Caramel Brownie"}
          productPrice={"5.50"}
          amount={0}
        />
        <Product
          image="../panna_cotta/image-panna-cotta-mobile.jpg"
          productType={"Panna Cotta"}
          productName={"Vanilla Panna Cotta"}
          productPrice={"6.50"}
          amount={0}
        />
      </div>
    </div>
  );
}
