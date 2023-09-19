"use client"
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectDetail = () => {
  return(			
  <div className="grid grid-cols-1">
  {project_data.map((project) => (
    <ProjectContainer
      key={project.id}
      {...project}  
    />
  ))}
</div>)
}
const ProjectContainer = ({
	id,
	projectImage,
	projectName,
	projectThumbnail,
	domain,
	summary,
	links,
}) => {
	const [openDesc, setOpenDesc] = useState(false); 
	return (
    <div>
      <div className='text-8xl italic font-extrabold flex justify-center'>
					{projectName}
			</div>
      <div>
        {summary}
      </div>
    </div>
	);
};

const project_data = [
	{
		id: 1,
		projectThumbnail: "/images/project-icon/notevault-thumbnail.png",
		projectName: "NoteVault",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/projects/note-vault-preview.png",
		summary:
			"NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.",
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
		projectThumbnail: "/images/project-icon/nexus-website-thumbnail.png",
		projectName: "Nexus Website",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/projects/nexus-website-preview.png",
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

export default ProjectDetail