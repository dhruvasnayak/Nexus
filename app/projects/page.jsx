"use client";
import React, { useState } from "react";
import ProjectContainer from "../../components/ProjectContainer";
import { projectData } from "../../components/data";
import {
	AnimatePresence,
	motion,
} from "framer-motion";

const ProjectPage = () => {
	const [selectedId, setSelectedId] =
		useState(null);

	return (
		<div>
			<div>
				<h1 className="font-bold text-4xl font-montserrat pt-8 pb-4">
					Explore our
					<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
						Projects
					</span>
				</h1>

				{projectData.map(
					(project) => (
						<motion.div
							key={
								project.id
							}
							onClick={() => {
								setSelectedId(
									project.id
								);
							}}
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
							}}
							className="w-1/4"
						>
							<ProjectContainer
								{...project}
							/>
						</motion.div>
					)
				)}
			</div>

			<AnimatePresence>
				{selectedId && (
					<motion.div
						layoutId={
							selectedId
						}
						onClick={() => {
							setSelectedId(
								null
							);
						}}
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black  bg-opacity-50"
					>
						<div className="bg-background p-4 rounded-lg shadow-lg z-100">
							<h5>
								{
									projectData[
										selectedId -
											1
									]
										.projectName
								}
							</h5>

							<h2>
								{
									projectData[
										selectedId -
											1
									]
										.summary
								}
							</h2>
							<button
								onClick={() =>
									setSelectedId(
										null
									)
								}
								className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
							>
								Close
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ProjectPage;
