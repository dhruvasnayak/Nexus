import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import FromHeads from "../components/FromHeads"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-2 sm:mx-10 md:mx-20">
        <Carousel />

        <Hero />

        <Activities />

        <Projects />

			

			<FromHeads/>
		</main>
    </>
	);
}
