import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
	return (
		<div>
			Projects
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{project_data.map((project) => (
					<ProjectContainer
						key={project.id}
						{...project}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;

const ProjectContainer = ({
	id,
	projectImage,
	projectName,
	projectThumbnail,
	domain,
	summary,
	links,
}) => {
	return (
		<div className="flex flex-col gap-y-3 justify-center items-center border-white/20 border-[1px] rounded-md p-3">
			<div className="flex justify-between items-center w-full px-0 md:px-1">
				<div className="flex items-center gap-x-2 sm:gap-x-4">
					<Image
						src={projectThumbnail}
						height={150}
						width={150}
						alt="Project 1"
						className="w-10 h-10 md:w-12 md:h-12 object-cover"
					/>
					<h1 className="font-montserrat font-extrabold italic text-xl">
						{projectName}
					</h1>
				</div>
				<div className="flex font-montserrat gap-x-2">
					<span className="uppercase text-[10px]">{`<`}</span>
					<span className="text-[10px] whitespace-nowrap uppercase">
						{domain.short}
					</span>
					<span className="uppercase text-[10px]">{`>`}</span>
				</div>
			</div>

			<Image
				src={projectImage}
				height={400}
				width={600}
				alt={projectName}
				className="z-20 object-cover rounded-md overflow-hidden w-full aspect-video"
			/>
			<p className="font-montserrat my-1 text-[14px] md:text-xs text-white/70">
				{summary}
			</p>
			<div className="flex items-center justify-between w-full sm:mx-2">
				<span className="border-white/10 border-[1px] font-montserrat hover:bg-gray-800/50 group rounded-md transition-all py-1 px-2">
					<Link
						className="group flex gap-x-3 hover:gap-x-4 items-center"
						href={`/preojects/${id}`}
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
				<div className="flex gap-x-1.5 items-center">
					{links.map((link, i) => (
						<a
							href="/"
							key={link.link}
							className="p-1.5 hover:bg-gray-900 rounded font-montserrat text-[10px] font-medium tracking-wider"
						>
							<Image
								src={link.linkImage}
								width={20}
								height={20}
								alt="github"
							/>
							<span className="sr-only">{link.name} link</span>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

const project_data = [
	{
		id: 1,
		projectThumbnail: "/images/project-icon/OFAAX40 1.png",
		projectName: "NoteVault",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 2,
		projectThumbnail: "/images/project-icon/OFAAX40 11.png",
		projectName: "Nexus Website",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/Nexus",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://nexus-pes.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 3,
		projectThumbnail: "/images/project-icon/OFAAX40 12.png",
		projectName: "Project name",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 4,
		projectThumbnail: "/images/project-icon/OFAAX40 1.png",
		projectName: "Project name",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
];
