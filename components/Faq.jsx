"use client";
import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
	return (
		<div className="my-8">
			<h1 className="font-bold text-2xl font-montserrat my-4 ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
				FAQ
			</h1>
			<FaqBox />
		</div>
	);
};

const FaqBox = () => {
	const faqData = [
		{
			question: "What is the name of the technical club at PES College?",
			answer: "The technical club at PES College is called Nexus.",
		},
		{
			question: "How can I join the technical club?",
			answer: "To join the technical club, you can [provide information on the joining process].",
		},
		{
			question: "What activities does the technical club organize?",
			answer: "The technical club organizes various activities such as workshops, seminars, coding competitions, and tech talks.",
		},
		{
			question: "Who can join the technical club?",
			answer: "The technical club is open to all students of PES College who have an interest in technology and related fields.",
		},
		{
			question: "When and where are the club meetings held?",
			answer: "Club meetings are typically held [mention frequency, day, and location]. However, please check our official announcements for the most up-to-date information.",
		},
		{
			question: "Is there a membership fee to join the technical club?",
			answer: "Yes, there might be a nominal membership fee to cover club expenses. The exact amount can vary, so please check with the club organizers for the current fee.",
		},
	];

	const FaqBox = ({ question, answer }) => {
		const [toggle, setToggle] = useState(false);

		return (
			<li
				className="px-4 py-5 flex flex-col border-gray-800 border hover:bg-gray-700 rounded font-poppins text-xs cursor-pointer"
				onClick={() => setToggle((prev) => !prev)}
			>
				<div className="flex justify-between text-md font-montserrat items-start gap-x-4">
					<p className="text-white text-sm font-medium leading-tight">
						{question}
					</p>

					<button className="w-6 h-6 p-1.5 rounded hover:bg-gray-900/50">
						<Image
							src="/images/icons/cross.svg"
							width={45}
							height={45}
							alt="open description"
							className={`${toggle && "rotate-45"}
							 transition-all transform`}
						/>
					</button>
				</div>
				{toggle && (
					<p className="mt-3 text-sm font-normal text-gray-100 font-inter">
						{answer}
					</p>
				)}
			</li>
		);
	};

	return (
		<ul className="space-y-2 w-full">
			{faqData.map((item, index) => (
				<FaqBox
					key={index}
					{...item}
				/>
			))}
		</ul>
	);
};

export default Faq;
