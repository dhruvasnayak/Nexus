import Image from "next/image";
import React from "react";

export default function FromHeads() {
	return (
		<div className="phone:p-1 my-6 p-[0.5]">
			<p className="text-2xl font-semibold font-montserrat  text-white text-transparent">
				From Our
				<span className="text-2xl  font-semibold font-montserrat my-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
					{" "}Heads
				</span>
			</p>

			<div className="grid grid-cols-1 gap-4 phone:grid-cols-3">
				<div className="phone:row-start-1 phone:row-end-3 phone:col-start-1 phone:col-end-2 ">
					<Heads
						index="1"
						img="/images/project-icon/OFAAX40 11.png"
						name="Wade Warren"
						domain="Head"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! "
					/>
				</div>
				<div className="phone:row-start-1 phone:row-end-4 phone:col-start-2 phone:col-end-3">
					<Heads
						index="2"
						img="/images/project-icon/OFAAX40 12.png"
						name="Cameron Williamson"
						domain="Operation Head"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! "
					/>
				</div>
				<div className="phone:row-start-1 phone:row-end-2 phone:col-start-3 phone:col-end-4">
					<Heads
						index="3"
						img="/images/project-icon/OFAAX40 1.png"
						name="Guy Hawkins"
						domain="web Dev Head"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
					/>
				</div>
				<div className="phone:row-start-3 phone:row-end-4 phone:col-start-1 phone:col-end-2">
					<Heads
						index="4"
						img="/images/project-icon/OFAAX40 11.png"
						name="Esther Howard"
						domain="Design HEad"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
					/>
				</div>
				<div className="phone:row-start-2 phone:row-end-4 phone:col-start-3 phone:col-end-4">
					<Heads
						index="5"
						img="/images/project-icon/OFAAX40 12.png"
						name="ROnald Richards"
						domain="Logistic Head"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
					/>
				</div>
				<div className="phone:row-start-4 phone:row-end-6 phone:col-start-1 phone:col-end-2">
					<Heads
						index="6"
						img="/images/project-icon/OFAAX40 1.png"
						name="Esther Howard"
						domain="PR Head"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
					/>
				</div>
				<div className="phone:row-start-4 phone:row-end-6 phone:col-start-2 phone:col-end-3">
					<Heads
						index="7"
						img="/images/project-icon/OFAAX40 11.png"
						name="Savannah Nguyen"
						domain="Technical Head"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque "
					/>
				</div>
				<div className="phone:row-start-[3.5] phone:row-end-5 phone:col-start-3 phone:col-end-4">
					<Heads
						index="8"
						img="/images/project-icon/OFAAX40 12.png"
						name="Robert Fox"
						domain="Finance Head"
						msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu"
					/>
				</div>
			</div>
		</div>
	);
}

const Heads = (props) => {
	return (
		<>
			<article className="border-2 border-gray-500 rounded-2xl phone:p-6 p-3 hover:border-blue-700">
				<div className="flex gap-2 bg bg-background font-montserrat">
					<Image
						height={100}
						width={100}
						src={props.img}
						alt="Profile Pic"
            className="h-12 w-12"
					/>
					<article className="flex flex-col">
						<p className="text-md font-bold md:text-lg">
							{props.name}
						</p>
						<p className="text-sm font-extralight text-text-secondary">
							{props.domain}
						</p>
					</article>
				</div>
				<div className="bg bg-shaded text-sm mt-4">
					<p>{props.msg}</p>
				</div>
			</article>
		</>
	);
};
