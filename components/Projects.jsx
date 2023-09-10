import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
	return (
		<div>
			{/* TODO */}
			{/* Write the heading + make boxes */}
			Projects
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<ProjectContainer />
			</div>
		</div>
	);
};

export default Projects;

const ProjectContainer = () => {
	return (
		<div className="flex flex-col gap-y-3 justify-center items-center border-white/20 border-[1px] rounded-md p-3">
			<div className="flex justify-between items-center w-full px-0 md:px-1">
				<div className="flex items-center gap-x-2 sm:gap-x-4">
					<Image
						src="/images/project-icon/OFAAX40 1.png"
						height={150}
						width={150}
						alt="Project 1"
						className="w-10 h-10 md:w-12 md:h-12 object-cover"
					/>
					<h1 className="font-montserrat font-extrabold italic text-xl">
						Project name
					</h1>
				</div>
				<div className="flex font-montserrat gap-x-2">
					<span className="uppercase text-[10px]">{`<`}</span>
					<span className="uppercase text-[10px] whitespace-nowrap">
						Web dev
					</span>
					<span className="uppercase text-[10px]">{`>`}</span>
				</div>
			</div>

			<Image
				src={"/images/events/unsplash_-HIiNFXcbtQ.png"}
				height={400}
				width={600}
				alt={``}
				className="z-20 object-cover rounded-md overflow-hidden w-full aspect-video"
			/>
			<p className="font-montserrat my-1 text-[14px] md:text-xs text-white/70">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
				sapiente consectetur nemo aliquam nostrum autem vitae,
				cupiditate quia pariatur qui
			</p>
			<div className="flex items-center justify-between w-full sm:mx-2">
				<span className="border-white/10 border-[1px] font-montserrat hover:bg-gray-800/50 group rounded-md transition-all py-1 px-2">
					<Link
						className="group flex gap-x-3 hover:gap-x-4 items-center"
						href="/preojects/1"
					>
						<span className="text-[12px]">Learn More</span>
						<Image
							src="/images/icons/right-arrow.svg"
							width={30}
							height={2}
							alt="learn more arrow"
							className="w-3 h-4 sm:w-4 sm:h-5"
						/>
					</Link>
				</span>
				<div className="p-1.5 hover:bg-gray-900 rounded font-montserrat text-[10px] font-medium tracking-wider">
					<a href="/">
						<Image
							src="/images/icons/social-media/github.svg"
							width={20}
							height={20}
							alt="github"
						/>
						<span className="sr-only">Github link</span>
					</a>
				</div>
			</div>
		</div>
	);
};
