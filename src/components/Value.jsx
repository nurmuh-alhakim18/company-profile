export default function Value({ value }) {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold text-amber-600">{ value.value }</h1>
      <p className="text-justify font-thin mt-2">{ value.description.content[0].content[0].value }</p>
    </div>
  )
}