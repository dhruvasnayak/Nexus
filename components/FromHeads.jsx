import Image from "next/image";
import React from "react";

const head_data = [
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 2",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 3",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 4",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 5",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, q Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 6",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 7",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1 8",
		domain: "EVM 8",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 9",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Name 1",
		domain: "EVM 9",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaq orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu",
	},
];

export default function FromHeads() {
	return (
		<div className="phone:p-1 my-6 p-[0.5]">
			<p className="text-2xl font-semibold font-montserrat  text-white text-transparent">
				From Our
				<span className="text-2xl  font-semibold font-montserrat my-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
					{" "}Heads
				</span>
			</p>

			<div className="xl:columns-4 lg:columns-3 columns-1 sm:columns-2 gap-4 mx-auto space-y-3 pb-28">
				{/* <div className="bg-gray-200 break-inside-avoi"></div> */}
				{head_data.map((head) => (
					<Heads
						key={head.domain}
						{...head}
					/>
				))}
			</div>
		</div>
	);
}

const Heads = (props) => {
	return (
		<article className="transition-colors break-inside-avoid  border-white/10 border-[1px] rounded-md p-4 hover:border-primary">
			<div className="flex gap-2 bg bg-background font-montserrat">
				<Image
					height={100}
					width={100}
					src={props.imageUrl}
					alt="Profile Pic"
					className="h-12 w-12"
				/>
				<article className="hidden md:flex flex-col">
					<h2 className="text-base font-bold md:text-lg font-poppins">{props.name}</h2>
					<p className="text-xs font-medium tracking-wide font-poppins text-text-secondary">
						{props.domain}
					</p>
				</article>
			</div>
			<div className="bg bg-shaded text-sm mt-4">
				<p>{props.message}</p>
			</div>
		</article>
	);
};
