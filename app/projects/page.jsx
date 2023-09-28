import React from "react";
import ProjectContainer from "../../components/ProjectContainer";
import { projectData } from "../../components/data";
const ProjectPage = () => {
	return (
		<div>
			<h1 className="font-bold text-4xl font-montserrat my-3">
				Explore our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Projects
				</span>
			</h1>
			<br></br>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{projectData.map((project) => (
					<ProjectContainer
						key={project.id}
						{...project}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectPage;
