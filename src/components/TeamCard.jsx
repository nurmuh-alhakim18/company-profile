"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

export default function TeamCard({ person, pos, exp }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col items-center border border-solid rounded-3xl ring-offset-slate-50 w-96">
      <Image className="rounded-full mt-5" src={ person.picture.large } width={200} height={200} alt="Profile" />
      <div className="px-10 pt-10 pb-5 flex flex-col gap-1 text-center">
        <h2 className="text-xl text-amber-600 font-semibold mt-4">{ `${person.name.first}  ${person.name.last}` }</h2>
        {
          pathname === "/teams" && (
            <p className="text-gray-500">{person.email}</p>
          )
        }
        <p className="font-medium">{ pos }</p>
        <p className="font-thin">{ exp }</p>
      </div>
    </div>
  )
}