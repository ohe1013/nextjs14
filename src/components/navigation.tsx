"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navigation() {
  const [count, setCount] = useState(0);
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home {path === "/" && "(current)"}</Link>
        </li>
        <li>
          <Link href={"/about-us"}>
            AboutUS {path === "/about-us" && "(current)"}
          </Link>
        </li>
        <li>
          <button id="count" onClick={() => setCount(count + 1)}>
            {count}
          </button>
        </li>
      </ul>
    </nav>
  );
}
