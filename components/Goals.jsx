import React from "react";

const Goals = () => {
	return (
		<div className="">
			<h1 className="font-bold text-2xl font-montserrat mb-4 mt-12">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Goals
				</span>
			</h1>

			<div className=" flex flex-col ">
				<div className="max-w-[848px]  gap-[10px] p-[10px]">
					<p className="font-semibold text-[26px] font-montserrat w-auto">
						Foster Innovation
					</p>
					<p className="font-normal text-[14px] leading-[20px] font-montserrat text-text-secondary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corrupti quaerat numquam alias animi ab minus facilis
						molestiae sapiente soluta quia. Maxime magnam illo nulla
						architecto quasi porro est repellat quibusdam!
					</p>
				</div>
				<div className="max-w-[848px]  gap-[10px] p-[10px]">
					<p className="font-semibold text-[26px] font-montserrat w-auto ">
						Foster Innovation
					</p>
					<p className="font-normal text-[14px] leading-[20px] font-montserrat text-text-secondary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corrupti quaerat numquam alias animi ab minus facilis
						molestiae sapiente soluta quia. Maxime magnam illo nulla
						architecto quasi porro est repellat quibusdam!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Goals;
