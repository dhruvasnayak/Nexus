import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";

export const metadata = {
	title: "Nexus",
	description: "Official Website of NEXUS PES",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="first-line:font-inter bg-background text-text-primary">
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
