"use client"

import { useSelector } from "react-redux"
import { usePathname } from "next/navigation"
import ProductCardHome from "@/components/ProductCardHome"
import ProductCard from "@/components/ProductCard"

export default function RenderProduct() {
  const products = useSelector((state) => state.products)
  const pathname = usePathname()
  
  return (
    <div className="flex justify-between">
      {
        pathname === "/products" 
          ? products.map(product => {
            return <ProductCard key={product.id} product={product} />
          })
          : products.map(product => {
            return <ProductCardHome key={product.id} product={product} />
          })    
      }
    </div>
  ) 
}