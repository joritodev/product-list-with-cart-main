import { ProductList } from "./components/list/list";
import { Cart } from "./components/cart/cart";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <ProductList />
      <Cart />
    </main>
  );
}
