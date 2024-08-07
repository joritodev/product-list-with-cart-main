import { ProductList } from "./components/list/list";
import { ProductCart } from "./components/cart/cart";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <ProductList />
      <ProductCart />
    </main>
  );
}
