import React from "react";
import Image from "next/image";
const Activities = () => {
  return (
    <div>
      <h2>Activities</h2>

      <ActivityContainer />
      {/* <ActivityContainer /> */}
    </div>
  );
};

export default Activities;

const ActivityContainer = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {cards_desc.map((items) => (
          <div className="flex flex-col justify-center items-center border-white/20 border-[1px] rounded-md px-3 py-2">
            <Image
              src={items.image}
              height={540}
              width={600}
              className="rounded-md overflow-hidden aspect-video w-full"
            />
            <div className="flex items-center justify-between w-full">
              <div className="">
                <h1 className="font-montserrat text-secondary font-bold text-lg">
                  {items.event}
                </h1>
                <h3 className="font-montserrat text-[10px] font-medium">
                  {items.date}
                </h3>
              </div>
              <div className="h-full p-4 flex items-center gap-3">
                <h1 className="font-montserrat font-medium md:font-semibold text-sm md:text-md">
                  {items.likes}
                </h1>
                <div className="border-[1px] h-[2rem] w-[2rem] border-white/20 rounded-md flex items-center justify-center">
                  <Image
                    src="/images/icons/blue-heart.svg"
                    height={16}
                    width={18}
                    alt="blue heart"
                    className=""
                  />
                </div>
              </div>
            </div>
             <h1 className="font-montserrat my-1 text-[14px] md:text-xs text-white/70">
                {items.desc}
              </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export const cards_desc = [
  {
    id: 1,
    image: "/images/events/unsplash_-HIiNFXcbtQ.png",
    date: "Fri,27 Dec,2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
    likes: 2,
    event: "NexHunt",
    heart: "/images/icons/blue-heart.svg",
  },
  {
    id: 2,
    image: "/images/events/unsplash_fT49QnFucQ8.png",
    date: "Fri,22 Dec,2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
    likes: 3,
    event: "NeuroNex",
    heart: "/images/icons/blue-heart.svg",
  },
  {
    id: 3,
    image: "/images/events/unsplash_fT49QnFucQ8.png",
    date: "Fri,29 Dec,2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
    likes: 9,
    event: "NexHunt",
    heart: "/images/icons/blue-heart.svg",
  },
  {
    id: 4,
    image: "/images/events/unsplash_l5Tzv1alcps.png",
    date: "Fri,28 Apr,2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
    likes: 9,
    event: "NeuroNex",
    heart: "/images/icons/blue-heart.svg",
  },
  {
    id: 5,
    image: "/images/events/unsplash_Wa9ilX9XYOI.png",
    date: "Fri,27 Dec,2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
    likes: 4,
    event: "NexHunt",
    heart: "/images/icons/blue-heart.svg",
  },
  {
    id: 1,
    image: "/images/events/unsplash_XtUd5SiX464.png",
    date: "Fri,27 Dec,2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
    likes: 2,
    event: "NeuroNex",
    heart: "/images/icons/blue-heart.svg",
  },
];
