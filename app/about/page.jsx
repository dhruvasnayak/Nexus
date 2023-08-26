import React from "react";
import { Button } from "../components/Button";

const About = () => {
	return (
		<div>
			About
			<Button size="sm">Sarang</Button>
			<Button>Sarang</Button>
			<Button size="lg">Sarang</Button>
			<Button size="lg" variant="outline" className='w-full' href="www.google.com">Sarang</Button>
			<Button size="lg" variant="ghost" className='w-full' href="www.google.com">Sarang</Button>
		</div> 
	);
};

export default About;
