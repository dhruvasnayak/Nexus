import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Comments from "../components/Comments";
import Hero from "../components/Hero";
import FromHeads from "../components/FromHeads"

export default function Home() {
	return (
		<main className="">
			<Navbar />

			<Carousel />

			<Hero />

			<Activities />

			<Projects />

			<Comments />

			<FromHeads/>
		</main>
	);
}
