"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectData from "../../../components/project_data";

const ProjectDetail = ({ params }) => {
  const projectID = params;
  const projectIdValue = Number(projectID["project"]);
  // console.log(projectIdValue);
  // console.log(pathName);

  const project = projectData.find((item) => item.id === projectIdValue);

  // console.log(project);

  if (!project) {
    return (
      <div className=" text-3xl h-screen flex justify-center items-center">
        Sorry, but the project you are looking for does not exist yet
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col justify-between items-center  ">
        <div className="sm:text-8xl font-montserrat font-extrabold border-b-2 w-full flex justify-between p-4">
          <Image
            src={project.projectThumbnail}
            className="w-8 sm:w-24 rounded-lg"
            alt="thumbnail"
            width={100}
            height={50}
          />
          {project.projectName}
        </div>
        <div className="m-8">
          <Image
            src={project.projectImage}
            alt="project-image"
            className="rounded-xl w-full border-double border-2 hover:shadow-lg  "
            width={1050}
            height={150}
          />
        </div>
        <div className="m-8 font-montserrat text-lg">{project.summary}</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-2 p-5 m-8 rounded-md">
        <div className="font-montserrat font-bold border-2 m-4 p-4 rounded-md hover:bg-primary hover:text-black">
          Domain: <div>{project.domain.long}</div>
        </div>
        <Link href={project.links[0].link}>
          <div className="font-montserrat font-bold border-2 m-4 p-4 rounded-md hover:bg-primary hover:text-black">
            Github: <div>{project.projectName}</div>
          </div>
        </Link>
        <Link href={project.links[1].link}>
          <div className="font-montserrat font-bold border-2 m-4 p-4 rounded-md hover:bg-primary hover:text-black">
            Deployed Site:
            <div>{project.projectName}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const project_data = [
  {
    id: 1,
    projectThumbnail: "/images/project-icon/notevault-thumbnail.png",
    projectName: "NoteVault",
    domain: {
      short: "Web dev",
      long: "Web Development",
    },
    projectImage: "/images/projects/note-vault-preview.png",
    summary:
      "NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.",
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
    domain: {
      short: "Web dev",
      long: "Web Development",
    },
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
    domain: {
      short: "Web dev",
      long: "Web Development",
    },
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
    domain: {
      short: "Web dev",
      long: "Web Development",
    },
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

export default ProjectDetail;
