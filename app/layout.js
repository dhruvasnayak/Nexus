import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Nexus",
	description: "Official Website of NEXUS PES",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-background text-text-primary font-inter`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
