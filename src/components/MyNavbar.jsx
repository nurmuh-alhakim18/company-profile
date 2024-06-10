"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MyNavbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white text-amber-600 flex justify-between items-center px-6 py-3">
      <div className="font-semibold font-burtons flex min-w-[340px] justify-start items-center gap-4">
        <Image src="/images/logo.png" width={40} height={40} alt="Our company" />
        <h1 className="text-2xl text-amber-600">Doffy Puffy</h1>
      </div>
      <ul className="font-medium flex w-[340px] justify-between">
        <li className="hover:text-amber-300">
          <Link href="/" className={ pathname === "/" ? "active" : "" }>Home</Link>
        </li>
        <li className="hover:text-amber-400">
          <Link href="/about" className={ pathname === "/about" ? "active" : "" }>About Us</Link>
        </li>
        <li className="hover:text-amber-400">
          <Link href="/products" className={ pathname === "/products" ? "active" : "" }>Products</Link>
        </li>
        <li className="hover:text-amber-400">
          <Link href="/teams" className={ pathname === "/teams" ? "active" : "" }>Teams</Link>
        </li>
      </ul>
    </nav>
  )
}