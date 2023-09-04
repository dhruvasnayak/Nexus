import React from "react";
import { Button } from "@/components/Button";
import Mentors from "@/components/Mentors";
import Goals from "@/components/Goals";
import Faq from "@/components/Faq";
import AboutHero from "@/components/AboutHero";
import Discover from "@/components/Discover";

const About = () => {
	return (
		<div>
			About
			<AboutHero />	
			<Discover />
			<Button size="sm">Sarang</Button>
			<Button>Sarang</Button>
			<Button size="lg">Sarang</Button>
			<Button size="lg" variant="outline" className='w-full' href="www.google.com">Sarang</Button>
			<Button size="lg" variant="ghost" className='w-full' href="www.google.com">Sarang</Button>

			<Mentors />
			<Goals />
			<Faq />
		</div> 
	);
};

export default About;
