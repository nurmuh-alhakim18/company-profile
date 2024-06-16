import Value from "./Value";
import { createClient } from "contentful";

export async function getTestimonials() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const res = await client.getEntries({ content_type: "value" })
    return res.items
  } catch (e) {
    console.error(e)
  }
}

export default async function RenderValues() {
  const values = await getTestimonials()

  return (
    <div className="flex flex-col mx-auto my-10 w-1/2">
      {
        values.map(value => {
          return <Value key={value.sys.id} value={value.fields} />
        })    
      }
    </div>
  )
}