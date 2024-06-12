import Testimonial from "./Testimonial"
import { createClient } from "contentful"

export async function getTestimonials() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const res = await client.getEntries({ content_type: "productReview" })

    return res.items
  } catch (e) {
    console.error(e)
  }
}

export default async function RenderProduct() {
  const testimonials = await getTestimonials()
  
  return (
    <div className="flex justify-between">
      {
        testimonials.map(testimonial => {
          return <Testimonial key={testimonial.sys.id} testimonial={testimonial.fields} />
        })    
      }
    </div>
  ) 
}