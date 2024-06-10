"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductCard({ product }) {
  const [readMore, setReadMore] = useState(false)
  let readComponent = product.description
  let button = ""

  function handleReadMore() {
    setReadMore(!readMore)
  }

  if (readMore) {
    button = <button className="text-amber-600 font-semibold hover:text-amber-800" onClick={handleReadMore}>Read Less</button>
  } else {
    readComponent = product.description.substring(0, 100)
    button = <button className="text-amber-600 font-semibold hover:text-amber-800" onClick={handleReadMore}>Read More</button>
  }

  return (
    <div className={readMore ? "no-read" : ""}>
      <div className="flex flex-col items-center border border-solid rounded-3xl ring-offset-slate-50 w-96 no-read:max-w-96">
        <div className="">
          <Image src={ product.img } width={ 200 } height={ 300 } alt={ product.name } />
        </div>
        <div className="px-10 pt-10 pb-5 text-justify flex flex-col justify-between">
          <h5 className="text-amber-600 font-semibold text-3xl">{ product.name }</h5>
          <h5 className="text-amber-600 font-light text-xl">Rp. { product.price }</h5>
          <p className="font-thin">{ readComponent }</p>
          { button }
        </div>
      </div>
    </div>
  )
}