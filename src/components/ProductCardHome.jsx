"use client"

import Image from "next/image"
import Link from "next/link"

export default function ProductCardHome({ product }) {
  return (
    <>
      <Link href="/products">
        <div className="flex flex-col items-center border border-solid rounded-3xl ring-offset-slate-50 w-96 max-h-96 hover:scale-110">
          <div className="">
            <Image src={ product.img } width={ 200 } height={ 300 } alt={ product.name } />
          </div>
          <div className="p-10 text-justify flex flex-col justify-between">
            <h5 className="text-amber-600 font-semibold text-3xl">{ product.name }</h5>
            <p className="font-thin">{ product.briefDesc }</p>
          </div>
        </div>
      </Link>
    </>
  )
}