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
			
			

			
			 <div className=" grid grid-cols-1 grid-flow-row-dense gap-4 my-4 phone:grid-cols-3 ">	
			 {/* <div className=" grid grid-cols-1 grid-flow-row-dense gap-4 my-4"> */}
			 
				 {
					data.map((item,index) => (
					<span className="border-[1px] border-white/20 rounded-2xl phone:p-6 p-3 hover:border-blue-700">
						<li key={item.index} className="list-none ">
						<span className="flex gap-4">
							<Image
							height={100}
							width={100}
							src={item.img}
							alt="Profile Pic"
            				className="h-12 w-12"
							/>

						<span className="flex flex-col">
							<p className="text-md font-bold md:text-lg">
							{item.name}
							</p>
							<p className="text-sm font-extralight text-text-secondary">
							{item.domain}
							</p>
						</span> 
						</span>
						<div className="bg bg-shaded text-sm mt-4">
						<p>{item.msg}</p>
						</div> 

						</li>
					</span>
				
			))
		}				 
			</div> 
		</div> 
	);
}


	const data = [
		{
		  index: 1,
		  img:"/images/project-icon/OFAAX40 11.png",
						name:"Wade Warren",
						domain:"Head",
						msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! "
		},
		{
		  index: 2,
		  img:"/images/project-icon/OFAAX40 12.png",
						name:"Cameron Williamson",
						domain:"Operation Head",
						msg:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel est velit odit!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! `
		},
		{
			index:"3",
						img:"/images/project-icon/OFAAX40 1.png",
						name:"Guy Hawkins",
						domain:"web Dev Head",
						msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
		},
		{
			index:"4",
						img:"/images/project-icon/OFAAX40 11.png",
						name:"Esther Howard",
						domain:"Design HEad",
						msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
		},
		{
			index:"5",
						img:"/images/project-icon/OFAAX40 12.png",
						name:"ROnald Richards",
						domain:"Logistic Head",
						msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
		},
		{
			index:"6",
						img:"/images/project-icon/OFAAX40 1.png",
						name:"Esther Howard",
						domain:"PR Head",
						msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibusdam assumenda enim eius vel, est velit odit!"
		},
		{
			index:"7",
						img:"/images/project-icon/OFAAX40 11.png",
						name:"Savannah Nguyen",
						domain:"Technical Head",
						msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque "
		},
		{
			index:"8",
						img:"/images/project-icon/OFAAX40 12.png",
						name:"Robert Fox",
						domain:"Finance Head",
						msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ab veniam saepe repellendus eaque at voluptas molestiae praesentium porro nulla rem, quibu"
		}

	  ];
