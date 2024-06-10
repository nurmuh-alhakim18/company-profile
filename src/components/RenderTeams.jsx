"use client"

import axios from "axios"
import { useEffect, useState } from "react"

import TeamCard from "@/components/TeamCard"

export default function RenderTeams() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("https://randomuser.me/api/?results=3&gender=male&nat=us")
        setData(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchData()
  }, [])
  
  const position = [
    "CEO", "COO", "CMO"
  ]

  const exp = [
    "Founded Doffy Puffy in 2020. With his formal training from Le Cordon Bleu and years of experience in Michelin-starred kitchens, He crafted exquisite pastries that quickly gained a loyal following.",
    "As the COO, he oversees the day-to-day operations of Doffy Puffy. He is responsible for ensuring that the company runs smoothly and efficiently. He is also in charge of managing the company's finances and human resources.",
    "As the CMO, he is responsible for overseeing the marketing efforts of Doffy Puffy. He is in charge of developing marketing strategies to promote the company's products and services. He also manages the company's branding and public relations."
  ]
      
  return (
    <div className="flex justify-around mb-12">
      {
        data.map((person ,i) => {
          return <TeamCard key={ person.login.uuid } person={ person } pos={position[i]} exp={exp[i]} />
        })
      }
    </div>
  )
}