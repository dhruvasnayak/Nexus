"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";

const Activities = () => {
	return (
		<div>
			<h1 className="font-bold text-2xl font-montserrat my-3">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Activities
				</span>
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{activity_data.map((activity) => (
					<ActivityContainer
						key={activity.i}
						{...activity}
					/>
				))}
			</div>
		</div>
	);
};

export default Activities;

const ActivityContainer = ({ id, images, date, summary, eventName, likes }) => {
	const [openDesc, setOpenDesc] = useState(false);
	return (
		<div className="flex flex-col gap-y-2 sm:gap-y-3 justify-center items-center border-white/10 border-[1px] rounded-md p-2 sm:p-3">
			<div className="flex items-center justify-between w-full mt-2 mb-1 sm:mt-2.5 sm:mb-1.5">
				<div>
					<h1 className="font-montserrat bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text font-bold text-lg md:text-xl">
						{eventName}
					</h1>
					<h3 className="font-montserrat text-xs font-medium tracking-wider">
						{date.toLocaleDateString("en-GB")}
					</h3>
				</div>
			</div>
			<Carousel
				withIndicators
				className="w-full aspect-video z-30 text-white"
				loop
				dragFree
			>
				{images.map((image, id) => (
					<Carousel.Slide
						key={id}
						className="w-full"
					>
						<Image
							src={image}
							height={400}
							width={600}
							alt={`${eventName}-image-${id}`}
							className="z-20 object-cover rounded-md overflow-hidden w-full aspect-video"
						/>
					</Carousel.Slide>
				))}
			</Carousel>

			<div className="flex items-center justify-between w-full sm:mx-2">
				<span className="border-white/10 border-[1px] font-montserrat hover:bg-gray-800/50 group rounded-md transition-all py-1 px-2">
					<Link
						className="group flex gap-x-3 hover:gap-x-4 items-center"
						href={`/events/${id}`}
					>
						<span className="text-[12px]">Learn More</span>
						<Image
							src="/images/icons/right-arrow.svg"
							width={30}
							height={20}
							alt="learn more arrow"
							className="w-3 h-4 sm:w-4 sm:h-5"
						/>
					</Link>
				</span>

				<div className="h-full flex items-center gap-3">
					{/* <span className="font-montserrat font-medium md:font-semibold text-sm md:text-md">
						{likes}
					</span> */}
					<div className="border-[1px] h-[2rem] w-[2rem] border-white/20 rounded-md flex items-center justify-center">
						<Image
							src="/images/icons/blue-heart.svg"
							height={20}
							width={20}
							alt="blue heart"
							className=""
						/>
					</div>
					<button
						className="p-1.5 border-[1px] border-white/20 hover:bg-gray-900 rounded font-montserrat text-[10px] font-medium tracking-wider"
						onClick={() => setOpenDesc((prev) => !prev)}
					>
						<Image
							src="/images/icons/cross.svg"
							width={16}
							height={16}
							alt="open description"
							className={`transition-all ${
								openDesc ? "rotate-45" : ""
							} transform `}
						/>
					</button>
				</div>
			</div>

			{openDesc && (
				<p
					className={`${
						openDesc ? "text-white/70" : "text-transparent"
					} duration-1000 transition-all font-montserrat my-1 text-xs sm:text-sm md:text-sm line-clamp-3`}
				>
					{summary}
				</p>
			)}
		</div>
	);
};

export const activity_data = [
	{
		id: 1,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 2,
		eventName: "NexHunt",
	},
	{
		id: 2,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 3,
		eventName: "NeuroNex",
	},
	{
		id: 3,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 9,
		eventName: "NexHunt",
	},
	{
		id: 4,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 9,
		eventName: "NeuroNex",
	},
	{
		id: 5,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 4,
		eventName: "NexHunt",
	},
	{
		id: 6,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 2,
		eventName: "NeuroNex",
	},
];
