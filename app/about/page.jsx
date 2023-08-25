import React from "react";
import { Button } from "../components/Button";

const About = () => {
	return (
		<div>
			About
			<Button>Sarang</Button>
			<Button size="sm">Sarang</Button>
			<Button size="lg">Sarang</Button>
			<Button size="lg" variant="outline" className='w-full'>Sarang</Button>
		</div>
	);
};

export default About;
