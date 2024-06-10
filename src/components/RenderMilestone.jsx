"use client"

import { useSelector } from "react-redux";
import { useState } from "react";
import Milestone from "./Milestone";

export default function RenderMilestones() {
  const [showMore, setShowMore] = useState(false);
  let milestones = useSelector((state) => state.milestones);
  let button = ""

  function handleShowMore() {
    setShowMore(!showMore);
  }

  if (showMore) {
    button = <button onClick={handleShowMore} className="text-amber-600 self-center px-10 py-2 mb-10 border border-solid border-amber-600 font-semibold rounded-xl">Show less</button>
  } else {
    milestones = milestones.slice(0, 1);
    button = <button onClick={handleShowMore} className="text-amber-600 self-center px-10 py-2 mb-10 border border-solid border-amber-600 font-semibold rounded-xl">Show more</button>    
  }

  return (
    <div className="flex flex-col justify-center i">
      {
        milestones.map((milestone) => {
          return <Milestone key={milestone.id} milestone={milestone} />;
        })
      }

      {button}
    </div>
  );
}