import Image from "next/image"
import Link from "next/link"
import RenderProduct from "@/components/RenderProduct"
import RenderTestimonial from "@/components/RenderTestimonial"

export default function Page() {
  return (
    <>
      <header className="min-w-screen min-h-screen bg-center bg-cover bg-background-image">
        <div className="text-center flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-50 py-12 md:justify-end md:items-end md:text-right">
          <div className="max-w-4xl mx-10 flex flex-col items-end gap-4">
            <Image src="/images/logo.png" width={200} height={200} alt="Our Logo"/>
            <h1 className="text-5xl font-bold text-amber-600 lg:text-6xl">Dedication in Serving Quality Pastries</h1>
            <p className="max-w-2xl mb-10 text-lg font-semibold text-amber-300">
              We ensure the deliciousness of our cream puffs by using the best and highest quality ingredients, delicious to the last bite.
            </p>
          </div>
        </div>
      </header>
    
      <main>
        
        <div className="m-10">
          <h2 className="mb-6 text-5xl font-thin text-amber-600">OUR STORY</h2>
          <div className="flex gap-10 text-justify text-2xl font-thin tracking-wide leading-relaxed">
            <Image src="/images/our-story.jpg" height={800} width={400} alt="Our story" className="rounded-3xl"/>
            <div className="flex flex-col justify-evenly">
              <p>
                Founded in 2020, <span className="text-amber-600 font-semibold">Doffy Puffy</span>  is a pastry startup that aspires to make the best special pastries for customers. 
                Started in Indonesia and has spread our wings in 10 countries with more than 300 stores. 
                We are committed to bringing incredibly delicious pastries to the community.
              </p>
              <p>
                With network and experience, we use the latest technology to produce the best pastry. 
                High quality ingredients are processed and baked to perfection by us, and taught to Our competent <em>patissier</em>, with the passion to serve pastries of happiness just for you.
              </p>
              <button className="self-start rounded-2xl bg-amber-600 text-white text-xl font-normal px-6 py-3 hover:scale-110"><Link href="/about">Selengkapnya</Link></button>
            </div>
          </div>
        </div>

        <div className="m-10">
          <h2 className="mb-6 text-5xl font-thin text-amber-600">AVAILABLE FLAVORS & DESSERTS</h2>
          <RenderProduct />
        </div>

        <div className="m-10">
          <h2 className="mb-6 text-5xl font-thin text-amber-600">OUR SATISFIED CUSTOMERS</h2>
          <RenderTestimonial />
        </div>
      </main>
    </>
  ) 
}