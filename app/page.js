import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import FromHeads from "../components/FromHeads";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="mx-2 sm:mx-14 md:mx-28 flex flex-col gap-y-8 md:gap-y-14">
				<Carousel />
				<Hero />
				<Projects />
				<Activities />
				<FromHeads />
			</main>
		</>
	);
}
