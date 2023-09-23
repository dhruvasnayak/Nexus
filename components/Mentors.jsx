import Image from "next/image";
import React from "react";

const Mentors = () => {
  return (
    <div>
      <h2 className=" text-4xl text-center md:text-left font-semibold my-4">
        Our <span className=" text-primary font-montserrat">Mentors</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2  w-3/4 mx-auto ">
        <ProfilePicture
          name="Firstname Lastname"
          role="ROLE"
          imageUrl="/images/member/profile1.png"
        />
        <ProfilePicture
          name="Firstname Lastname"
          role="ROLE"
          imageUrl="/images/member/profile1.png"
        />
        <ProfilePicture
          name="Firstname Lastname"
          role="ROLE"
          imageUrl="/images/member/profile1.png"
        />
        <ProfilePicture
          name="Firstname Lastname"
          role="ROLE"
          imageUrl="/images/member/profile1.png"
        />
        <ProfilePicture
          name="Firstname Lastname"
          role="ROLE"
          imageUrl="/images/member/profile1.png"
        />
        <ProfilePicture
          name="Firstname Lastname"
          role="ROLE"
          imageUrl="/images/member/profile1.png"
        />
      </div>
    </div>
  );
};

export default Mentors;

const ProfilePicture = ({ name, role, imageUrl }) => {
  return (
    <div className="p-1 font-montserrat flex flex-col justify-center hover:scale-110 ">
      <Image
        height={268}
        width={268}
        alt={`${name}-${role}`}
        src={imageUrl}
        className="rounded-lg mx-auto h-48 "
      />
      <div className="px-2 my-2  flex justify-between items-center ">
        <div className=" text-xs font-medium flex">{name}</div>
        <div className=" text-[0.75rem] md:text-[0.6rem] text-secondary flex flex-row-reverse border-[0.05rem] border-primary py-[0.25rem] px-2 rounded-xl">
          {role}
        </div>
      </div>
    </div>
  );
};
