import Image from "next/image";
import React from "react";

const Mentors = () => {
	return (
		<div>
			<h2>Mentors</h2>

			<ProfilePicture
				name="Name"
				role="Role name"
				imageUrl="/images/member/profile1.png"
			/>
			<ProfilePicture
				name="Name"
				role="Role name"
				imageUrl="/images/member/profile1.png"
			/>
		</div>
	);
};

export default Mentors;

const ProfilePicture = ({ name, role, imageUrl }) => {
	return (
		<div>
			<Image
				height={268}
				width={268}
				alt={`${name}-${role}`}
				src={imageUrl}
			/>
		</div>
	);
};
