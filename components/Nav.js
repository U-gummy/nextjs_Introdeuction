import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        .active {color:tomato;}
        nav {display:flex;justify-content:space-around;width:500px;height:60px;margin:0 auto;box-shadow:0px 0px 20px #ccc;align-items:center;}
        a {font-size:20px;}
      `}</style>
    </nav>
  );
}
