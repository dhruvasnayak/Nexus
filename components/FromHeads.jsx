import Image from "next/image";
import React from "react";

const head_data = [
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "John Doe",
		domain: "EVM 1",
		message:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tortor ligula. In hac habitasse platea dictumst. Sed scelerisque aliquet arcu a pharetra.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Jane Smith",
		domain: "EVM 2",
		message:
			"Vivamus suscipit nisl vel nibh efficitur, id congue justo feugiat. Sed eget quam a nisl ultricies dignissim. Quisque sit amet purus lorem.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Alice Johnson",
		domain: "EVM 3",
		message:
			"Proin ullamcorper libero vel risus laoreet, a vulputate justo volutpat. Nunc auctor, ante nec bibendum eleifend, lectus augue convallis ex.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Bob Wilson",
		domain: "EVM 4",
		message:
			"Suspendisse a enim eget purus tincidunt elementum. Integer vel eros id purus fringilla posuere. Ut non volutpat justo, id efficitur tortor.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Emily Davis",
		domain: "EVM 5",
		message:
			"Fusce hendrerit facilisis metus, eget dignissim turpis consequat nec. In ac felis eu felis rhoncus posuere. Nullam convallis est id nunc elementum.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Michael Brown",
		domain: "EVM 6",
		message:
			"Maecenas vel quam at ex luctus consequat. Vestibulum id sapien non dui bibendum vehicula in eu metus. Sed ac urna non velit consectetur semper.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Olivia Wilson",
		domain: "EVM 7",
		message:
			"Donec volutpat ante id lectus consectetur euismod. Phasellus ultrices ex at quam eleifend, nec vehicula nisl fringilla. Vestibulum consectetur purus vel nisi.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Daniel Lee",
		domain: "EVM 8",
		message:
			"Pellentesque vel euismod erat, non mattis sapien. Morbi in leo a orci sollicixtudin volutpat. Vivamus auctor metus id quam vehicula, vel semper veli ellentesque vel euismod erat, non mattis sapien. Morbi in leo a orci sollicixtudin volutpat. Vivamus auctor metus id quam vehicula, vel semper velit ellentesque vel euismod erat, non mattis sapien. Morbi in leo a orci sollicixtudin volutpat. Vivamus auctor metus id quam vehicula, vel semper velit.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "Sophia Clark",
		domain: "EVM 9",
		message:
			"Cras et ullamcorper urna. Vivamus bibendum quam nec tortor ultricies, vel iaculis justo efficitur. Curabitur suscipit enim id velit finibus, id dignissim sapien fermentum.",
	},
	{
		imageUrl: "/images/project-icon/OFAAX40 12.png",
		name: "William Adams",
		domain: "EVM 10",
		message:
			"Quisque vitae justo at augue luctus aliquet. Vestibulum sit amet sem vel eros varius dictum. Maecenas at sapien at augue bibendum vehicula.",
	},
];


export default function FromHeads() {
	return (
		<div className="phone:p-1 my-6 p-[0.5]">
				<h1 className="font-bold text-2xl font-montserrat my-3">
				From Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Heads
				</span>
			</h1>

			<div className="xl:columns-4 lg:columns-3 columns-1 sm:columns-2 gap-4 mx-auto space-y-3 pb-28">
				{/* <div className="bg-gray-200 break-inside-avoi"></div> */}
				{head_data.map((head) => (
					<Heads
						key={head.domain}
						{...head}
					/>
				))}
			</div>
		</div>
	);
}

const Heads = (props) => {
	return (
		<article className="transition-colors break-inside-avoid border-white/10 border-[1px] rounded-md p-4 hover:border-primary">
			<div className="flex gap-2 bg-background font-montserrat">
				<Image
					height={100}
					width={100}
					src={props.imageUrl}
					alt={`${props.name}-thumbnail`}
					className="h-12 w-12"
				/>
				<article className="flex flex-col">
					<h2 className="text-base font-bold font-poppins">{props.name}</h2>
					<p className="text-xs font-medium tracking-wide font-poppins text-text-secondary">
						{props.domain}
					</p>
				</article>
			</div>
			<div className="bg bg-shaded text-sm mt-4">
				<p>{props.message}</p>
			</div>
		</article>
	);
};
