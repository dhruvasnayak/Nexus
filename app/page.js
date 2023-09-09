import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Comments from "../components/Comments";
import Hero from "../components/Hero";

export default function Home() {
	return (
		<main className="mx-2 sm:mx-10 md:mx-20">
			<Navbar />

			<Carousel />

			<Hero />

			<Activities />

			<Projects />

			<Comments />
		</main>
	);
}
