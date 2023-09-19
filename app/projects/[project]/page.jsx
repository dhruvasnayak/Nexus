"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	useRouter,
	usePathname,
} from "next/navigation";

const ProjectDetail = ({ params }) => {
	const projectID = params;
	const router = useRouter();
	const pathName = usePathname();
	const projectIdValue = Number(
		projectID["project"]
	);
	// console.log(projectIdValue);
	// console.log(pathName);

	const project = project_data.find(
		(item) =>
			item.id === projectIdValue
	);

	// console.log(project);


	if (!project) {
		return (
			<div className=" text-3xl h-screen flex justify-center items-center">
				Sorry, but the project you are looking for does not exist yet
			</div>
		)
	}

	return (
		<div className="w-screen h-screen">
			<div className="flex flex-col justify-between">
				<div>
					{
						project.projectName
					}
				</div>
				<Image
					src={
						project.projectImage
					}
					alt="project-image"
					width={50}
					height={50}
				/>
				<div>
					Domain:{" "}
					{
						project.domain
							.long
					}
				</div>
				<div>
					Github:{" "}
					<Link href={project.links[0].link}>
						{project.projectName}
					</Link>
				</div>
				<div>
					Deployed Site:{" "}
					<Link href={project.links[1].link}>
					{project.projectName}
					</Link>
				</div>
				<div>
					{project.summary}
				</div>
			</div>
		</div>
	);
};

const project_data = [
	{
		id: 1,
		projectThumbnail:
			"/images/projects/note-vault-preview.png",
		projectName: "NoteVault",
		domain: {
			short: "Web dev",
			long: "Web Development",
		},
		projectImage:
			"/images/projects/note-vault-preview.png",
		summary:
			"NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage:
					"/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage:
					"/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 2,
		projectThumbnail:
			"/images/project-icon/nexus-website-thumbnail.png",
		projectName: "Nexus Website",
		domain: {
			short: "Web dev",
			long: "Web Development",
		},
		projectImage:
			"/images/projects/nexus-website-preview.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/Nexus",
				linkImage:
					"/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://nexus-pes.vercel.app/",
				linkImage:
					"/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 3,
		projectThumbnail:
			"/images/project-icon/OFAAX40 12.png",
		projectName: "Project name",
		domain: {
			short: "Web dev",
			long: "Web Development",
		},
		projectImage:
			"/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage:
					"/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage:
					"/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 4,
		projectThumbnail:
			"/images/project-icon/OFAAX40 1.png",
		projectName: "Project name",
		domain: {
			short: "Web dev",
			long: "Web Development",
		},
		projectImage:
			"/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage:
					"/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage:
					"/images/icons/social-media/anchor.svg",
			},
		],
	},
];

export default ProjectDetail;
