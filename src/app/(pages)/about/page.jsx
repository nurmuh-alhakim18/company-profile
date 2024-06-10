import RenderMilestones from "@/components/RenderMilestone"
import RenderTeams from "@/components/RenderTeams"
// import TeamCard from "@/components/TeamCard"
import Image from "next/image"

export default function Page() {

  return (
    <>
      <header className="flex gap-40 items-center text-amber-600">
        <Image src="/images/our-story.jpg" height={500} width={500} alt="Our story"/>
        <div className="max-w-md flex flex-col gap-6">
          <h3 className="text-2xl font-light">About Doffy Puffy</h3>
          <h1 className="text-7xl font-semibold">Our Story</h1>
          <p className="text-3xl font-thin">Come get to know our team from the store, the environment, and the people we work with!</p>
        </div>
      </header>

      <main>
        <div className="flex justify-evenly items-center pt-32">
          <div className="text-amber-600 w-1/4">
            <h3 className="text-2xl font-light mb-8">Our History</h3>
            <h1 className="text-7xl font-semibold">Grind The Essentials</h1>
          </div>
          <div className="flex flex-col justify-evenly text-xl font-thin w-1/3 text-justify gap-10">
              <p>
                Founded in 2020, <span className="text-amber-600 font-semibold">Doffy Puffy</span>  is a pastry startup that aspires to make the best special pastries for customers. 
                Started in Indonesia and has spread our wings in 10 countries with more than 300 stores. 
                We are committed to bringing incredibly delicious pastries to the community.
              </p>
              <p>
                With network and experience, we use the latest technology to produce the best pastry. 
                High quality ingredients are processed and baked to perfection by us, and taught to Our competent <em>patissier</em>, with the passion to serve pastries of happiness just for you.
              </p>
            </div>
        </div>
        
        <div className="flex flex-row-reverse justify-evenly items-center py-32">
          <div className="text-amber-600 w-1/4">
            <h3 className="text-2xl font-light mb-8">Our Product</h3>
            <h1 className="text-7xl font-semibold">Halal Certified</h1>
          </div>
          <div className="flex flex-col justify-evenly text-xl font-thin w-1/3 text-justify gap-10">
              <p>
                <span className="text-amber-600 font-semibold">Doffy Puffy</span> certified Halal Grade A by MUI with LPPOM number-**************. 
                We uphold high standards in the manufacture and presentation of products using 100% Halal ingredients.
              </p>
            </div>
        </div>

        <div>
          <h1 className="text-7xl text-center font-semibold text-amber-600 mb-10">Our Founding Members</h1>
          <RenderTeams />
        </div>

        <div>
          <h1 className="text-7xl text-center font-semibold text-amber-600 mb-10">Milestone</h1>
          <RenderMilestones />
        </div>
      </main>
    </>
  ) 
}