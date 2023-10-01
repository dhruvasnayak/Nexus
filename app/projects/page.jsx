"use client";
import React, { useState } from "react";
import SplideCarousel from "../../components/SplideCarousel";
import { projectData } from "../../components/data";
import "@splidejs/react-splide/css";

const ProjectPage = () => {
	return (
		<div className="flex flex-col h-screen w-full">
			<div>
				<h1 className="font-bold text-5xl font-montserrat pt-8 text-center">
					Explore our
					<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
						Projects
					</span>
				</h1>
			</div>
			<SplideCarousel
				projects={projectData}
				className="flex h-full"
			/>
		</div>
	);
};

export default ProjectPage;
