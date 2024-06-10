"use client"

import Image from "next/image"

export default function Testimonial({ customer }) {
  return (
    <div className="flex flex-col items-center border border-solid rounded-3xl ring-offset-slate-50 w-96">
      <div>
        <Image className="rounded-full mt-5" src={ customer.img } width={ 200 } height={ 300 } alt={ customer.name } />
      </div>
      <div className="p-10 text-center flex flex-col justify-between">
        <h5 className="text-amber-600 font-semibold text-3xl">{ customer.name }</h5>
        <p>{ customer.description }</p>
      </div>
    </div>
  )
}