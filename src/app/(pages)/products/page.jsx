import RenderProduct from "@/components/RenderProduct"
import RenderTestimonial from "@/components/RenderTestimonial"

export default function Page() {
  return (
    <div>
      <div className="m-10">
        <h2 className="mb-6 text-5xl font-thin text-amber-600">AVAILABLE FLAVORS & DESSERTS</h2>
        <RenderProduct />
      </div>

      <div className="m-10">
        <h2 className="mb-6 text-5xl font-thin text-amber-600">OUR SATISFIED CUSTOMERS</h2>
        <RenderTestimonial />
      </div>
    </div>
  ) 
}