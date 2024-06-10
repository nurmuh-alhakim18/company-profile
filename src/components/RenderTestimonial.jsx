"use client"

import { useSelector } from "react-redux"
import Testimonial from "./Testimonial"

export default function RenderProduct() {
  const customers = useSelector((state) => state.customers)
  const toRender = customers.slice(0, 3)

  return (
    <div className="flex justify-between">
      {
        toRender.map(customer => {
          return <Testimonial key={customer.id} customer={customer} />
        })    
      }
    </div>
  ) 
}