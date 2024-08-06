import Image from "next/image";
import { ProductList } from "./components/list/list";
import { ProductCart } from "./components/cart/cart";

export default function Home() {
  return (
    <main className="container">
      <ProductList />
      <ProductCart />
    </main>
  );
}
