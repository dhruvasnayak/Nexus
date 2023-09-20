import Image from "next/image";
import React from "react";

const head_data = [
    {
        imageUrl: "/images/member/thumbnail/img1.png",
        name: "John Doe",
        domain: "EVM 1",
        message: "I'm passionate about exploring the latest developments in EVM technology and how it's reshaping the future. Join me in discussing its impact on various industries."
    },
    {
        imageUrl: "/images/member/thumbnail/img2.png",
        name: "Jane Smith",
        domain: "EVM 2",
        message: "Let's delve into the world of decentralized finance and its role in transforming traditional financial systems. Your insights on EVM 2 are highly valued."
    },
    {
        imageUrl: "/images/member/thumbnail/img1.png",
        name: "Alice Johnson",
        domain: "EVM 3",
        message: "Exploring the potential of blockchain technology beyond cryptocurrencies is my passion. EVM 3 is the place to share ideas and innovations."
    },
    {
        imageUrl: "/images/member/thumbnail/img4.png",
        name: "Bob Wilson",
        domain: "EVM 4",
        message: "Let's discuss the real-world applications of EVM 4 in supply chain management. Your expertise will contribute to a lively conversation."
    },
    {
        imageUrl: "/images/member/thumbnail/img3.png",
        name: "Emily Davis",
        domain: "EVM 5",
        message: "EVM 5 is your gateway to understanding the intersection of art and technology. Join me in exploring how EVM is transforming the creative industries."
    },
    {
        imageUrl: "/images/member/thumbnail/img4.png",
        name: "Michael Brown",
        domain: "EVM 6",
        message: "Let's unravel the mysteries of smart contracts and their potential in EVM 6. Your insights could pave the way for groundbreaking innovations."
    },
    {
        imageUrl: "/images/member/thumbnail/img2.png",
        name: "Olivia Wilson",
        domain: "EVM 7",
        message: "I'm fascinated by the environmental implications of EVM 7. Join the discussion on sustainable blockchain solutions and their impact on the planet."
    },
    {
        imageUrl: "/images/member/thumbnail/img1.png",
        name: "Daniel Lee",
        domain: "EVM 8",
        message: "EVM 8 is where we explore the future of finance. Share your thoughts on DeFi, NFTs, and more as we shape the financial landscape together."
    },
    {
        imageUrl: "/images/member/thumbnail/img1.png",
        name: "Sophia Clark",
        domain: "EVM 9",
        message: "Join EVM 9 to discuss the latest trends in blockchain security. Your expertise will help us navigate the evolving landscape of digital trust."
    },
    {
        imageUrl: "/images/member/thumbnail/img1.png",
        name: "William Adams",
        domain: "EVM 10",
        message: "EVM 10 is your hub for exploring the role of blockchain in healthcare. Let's envision a healthier future together through innovative solutions."
    }
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
		<article className="transition-colors break-inside-avoid border-white/10 border-[1px] rounded-md p-6 hover:border-primary">
			<div className="flex gap-4 bg-background ">
				<Image
					height={120}
					width={120}
					src={props.imageUrl}
					alt={`${props.name}-thumbnail`}
					className="h-10 w-10"
				/>
				<article className="flex flex-col">
					<h2 className="text-base font-bold font-poppins">
						{props.name}
					</h2>
					<p className="text-xs font-medium tracking-wide font-poppins text-text-secondary font-montserrat">
						{props.domain}
					</p>
				</article>
			</div>
			<div className="bg-shaded md:text-sm text-xs mt-4 font-poppins">
				<p>{props.message}</p>
			</div>
		</article>
	);
};
