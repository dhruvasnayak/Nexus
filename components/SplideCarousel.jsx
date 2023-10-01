import React from "react";
import {
	Splide,
	SplideSlide,
} from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

const SplideCarousel = ({
	projects,
}) => {
	const splideOptions = {
		type: "fade",
		padding: "5rem",
		perMove: 1,
		rewind: true,
	};

	return (
		<div className="flex h-full w-full">
			<Splide
				options={splideOptions}
				className="flex items-center w-full justify-center"
			>
				{projects.map(
					(project) => (
						<SplideSlide
							key={
								project.id
							}
							className="flex items-center justify-center flex-col gap-6"
						>
							<div
								className="bg-cover w-full h-[500px] flex p-4 items-center justify-center bg-center"
								style={{
									backgroundImage: `url(${project.projectImage})`,
								}}
							></div>
							<div className="text-center flex flex-col justify-center items-center gap-2">
								{
									project
										.summary
										.short
								}
								<Link
									href={`/projects/${project.id}`}
									className="bg-secondary max-w-fit p-2 rounded-lg"
								>
									Learn
									More
								</Link>
							</div>
						</SplideSlide>
					)
				)}
			</Splide>
		</div>
	);
};
export default SplideCarousel;
