export default function Milestone({ milestone }) {
  return (
    <div className="flex justify-between items-center mx-64 my-10">
      <h1 className="text-3xl text-amber-600 font-semibold">{milestone.year} - {milestone.event}</h1>
      <p className="text-2xl font-thin max-w-96">{milestone.desc}</p>
    </div>
  )
}