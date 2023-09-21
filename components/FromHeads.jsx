import Image from "next/image";
import React from "react";

const head_data = [
	{
		imageUrl: "/images/member/thumbnail/img1.png",
		name: "John Doe",
		domain: "EVM 1",
		role: "domain head",
		message:
			"I'm passionate about exploring the latest developments in EVM technology and how it's reshaping the future. Join me in discussing its impact on various industries.",
	},
	{
		imageUrl: "/images/member/thumbnail/img2.png",
		name: "Jane Smith",
		domain: "EVM 2",
		role: "core",
		message:
			"Let's delve into the world of decentralized finance and its role in transforming traditional financial systems. Your insights on EVM 2 are highly valued.",
	},
	{
		imageUrl: "/images/member/thumbnail/img1.png",
		name: "Alice Johnson",
		role: "core",
		domain: "EVM 3",
		message:
			"Exploring the potential of blockchain technology beyond cryptocurrencies is my passion. EVM 3 is the place to share ideas and innovations.",
	},
	{
		imageUrl: "/images/member/thumbnail/img4.png",
		name: "Bob Wilson",
		domain: "EVM 4",
		role: "domain head",
		message:
			"Let's discuss the real-world applications of EVM 4 in supply chain management. Your expertise will contribute to a lively conversation.",
	},
	{
		imageUrl: "/images/member/thumbnail/img3.png",
		name: "Emily Davis",
		domain: "EVM 5",
		role: "domain head",
		message:
			"EVM 5 is your gateway to understanding the intersection of art and technology. Join me in exploring how EVM is transforming the creative industries.",
	},
	{
		imageUrl: "/images/member/thumbnail/img4.png",
		name: "Michael Brown",
		domain: "EVM 6",
		role: "core",
		message:
			"Let's unravel the mysteries of smart contracts and their potential in EVM 6. Your insights could pave the way for groundbreaking innovations.",
	},
	{
		imageUrl: "/images/member/thumbnail/img2.png",
		name: "Olivia Wilson",
		domain: "EVM 7",
		role: "domain head",
		message:
			"I'm fascinated by the environmental implications of EVM 7. Join the discussion on sustainable blockchain solutions and their impact on the planet.",
	},
	{
		imageUrl: "/images/member/thumbnail/img1.png",
		name: "Daniel Lee",
		domain: "EVM 8",
		role: "core",
		message:
			"EVM 8 is where we explore the future of finance. Share your thoughts on DeFi, NFTs, and more as we shape the financial landscape together.",
	},
	{
		imageUrl: "/images/member/thumbnail/img1.png",
		name: "Sophia Clark",
		domain: "EVM 9",
		role: "domain head",
		message:
			"Join EVM 9 to discuss the latest trends in blockchain security. Your expertise will help us navigate the evolving landscape of digital trust.",
	},
	{
		imageUrl: "/images/member/thumbnail/img1.png",
		name: "William Adams",
		domain: "EVM 10",
		role: "volunteer",
		message:
			"EVM 10 is your hub for exploring the role of blockchain in healthcare. Let's envision a healthier future together through innovative solutions.",
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
	let role_icon;
	if (props.role === "domain head") {
		role_icon = { url: "/images/icons/star.svg", alt: "star" };
	} else if (props.role === "core") {
		role_icon = { url: "/images/icons/thunder.svg", alt: "thunder" };
	} else {
		role_icon = { url: "/images/icons/user.svg", alt: "user" };
	}
	return (
		<article className="transition-colors break-inside-avoid border-white/10 border-[1px] rounded-md p-6 hover:bg-white/10">
			<div className="flex gap-4">
				<span className="relative">
					<Image
						height={120}
						width={120}
						src={props.imageUrl}
						alt={`${props.name}-thumbnail`}
						className="h-10 w-10"
					/>
					<Image
						className="absolute -right-1 bottom-0 w-4 h-4 p-1 rounded-full bg-primary text-white"
						src={role_icon.url}
						width={50}
						height={50}
						alt={role_icon.alt}
					/>
				</span>
				<article className="flex flex-col">
					<h2 className="text-base font-semibold font-bricolage">
						{props.name}
					</h2>
					<p className="text-xs font-medium tracking-wide font-inter text-text-secondary">
						{props.domain}
					</p>
				</article>
			</div>
			<div className="md:text-sm text-xs mt-4 font-inter">
				<p>{props.message}</p>
			</div>
		</article>
	);
};
