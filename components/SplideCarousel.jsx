import React from "react";
import {
	Splide,
	SplideSlide,
} from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

const SplideCarousel = ({projects}) => {
	const splideOptions = {
		type: "loop",
		padding: "5rem",
		perMove: 1,
	};

	return (
		<div>
			<Splide
				options={splideOptions}
				className="flex items-center justify-center"
			>
				{projects.map(
					(project) => (
						<SplideSlide
							key={
								project.id
							}
                            className="w-full flex flex-col p-20"
						>
							<div className="w-[500px] h-[300px] relative grid place-items-center">
							<Image
								src={
									project.projectImage
								}
								alt={`Slide ${project.id}`}
								layout="fill"
								objectFit="cover"
							/>
							</div>

							<p>
								{
									project
										.summary
										.short
								}
                            </p>
                            <Link
                                href={`/projects/${project.id}`}
                                className="rounded-lg bg-secondary text-center p-2"
                            >
                                Learn More
                            </Link>
						</SplideSlide>
					)
				)}
			</Splide>
		</div>
	);
};
export default SplideCarousel;
