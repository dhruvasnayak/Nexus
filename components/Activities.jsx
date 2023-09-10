"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";

const Activities = () => {
	return (
		<div>
			<h2>Activities</h2>

			<ActivityContainer />
		</div>
	);
};

export default Activities;

const ActivityContainer = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{cards_desc.map((item, i) => (
					<div
						className="flex flex-col gap-y-1 justify-center items-center border-white/20 border-[1px] rounded-md p-2"
						key={i}
					>
						<Carousel
							withIndicators
							className="w-full aspect-video z-30 text-white"
							loop
							dragFree
						>
							{item.image.map((item, id) => (
								<Carousel.Slide
									key={id}
									className="w-full"
								>
									<Image
										src={item}
										height={400}
										width={600}
										alt={`${item.event}-image-${id}`}
										className="z-20 object-cover rounded-md overflow-hidden w-full aspect-video"
									/>
								</Carousel.Slide>
							))}
						</Carousel>

						<div className="flex items-center justify-between w-full mt-2">
							<div className="">
								<h1 className="font-montserrat bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text font-bold text-lg">
									{item.event}
								</h1>
								<h3 className="font-montserrat text-xs font-medium tracking-wider">
									{item.date.toLocaleDateString("en-GB")}
								</h3>
							</div>
							<div className="h-full flex items-center gap-3">
								<h1 className="font-montserrat font-medium md:font-semibold text-sm md:text-md">
									{item.likes}
								</h1>
								<div className="border-[1px] h-[2rem] w-[2rem] border-white/20 rounded-md flex items-center justify-center">
									<Image
										src="/images/icons/blue-heart.svg"
										height={20}
										width={20}
										alt="blue heart"
										className=""
									/>
								</div>
							</div>
						</div>
						<p className="font-montserrat my-1 text-[14px] md:text-xs text-white/70">
							{item.desc}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export const cards_desc = [
	{
		id: 1,
		image: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 2,
		event: "NexHunt",
		heart: "/images/icons/blue-heart.svg",
	},
	{
		id: 2,
		image: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 3,
		event: "NeuroNex",
		heart: "/images/icons/blue-heart.svg",
	},
	{
		id: 3,
		image: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 9,
		event: "NexHunt",
		heart: "/images/icons/blue-heart.svg",
	},
	{
		id: 4,
		image: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 9,
		event: "NeuroNex",
		heart: "/images/icons/blue-heart.svg",
	},
	{
		id: 5,
		image: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 4,
		event: "NexHunt",
		heart: "/images/icons/blue-heart.svg",
	},
	{
		id: 6,
		image: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 2,
		event: "NeuroNex",
		heart: "/images/icons/blue-heart.svg",
	},
];
