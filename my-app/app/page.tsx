import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      Home Page
      <Link href="users">Users Page</Link>
     <Link href="anotherPage">Another Example</Link>
    </main>
  );
}
