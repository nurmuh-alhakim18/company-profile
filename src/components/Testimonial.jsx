import Image from "next/image"

export default function Testimonial({ testimonial }) {
  console.log(testimonial)

  return (
    <div className="flex flex-col items-center border border-solid rounded-3xl ring-offset-slate-50 w-96">
      <div>
        <Image className="rounded-full mt-5" src={ `http:${testimonial.userImage.fields.file.url}` } width={ 200 } height={ 300 } alt={ testimonial.name } />
      </div>
      <div className="p-10 text-center flex flex-col justify-between">
        <h5 className="text-amber-600 font-semibold text-3xl">{ testimonial.name }</h5>
        <p>{ testimonial.description }</p>
      </div>
    </div>
  )
}