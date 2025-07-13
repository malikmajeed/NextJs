import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";



export default function Home() {
  return (
    <main>
      Home Page
      <Link href="users">Users Page</Link>
     <Link href="anotherPage">Another Example</Link>
     <ProductCard />
     <Users />


    </main>
  );
}
