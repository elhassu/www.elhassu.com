import { Providers } from "@/app/providers";

import "@/styles/tailwind.css";

export const metadata = {
	title: {
		template: "%s | Keelan Vella",
		default: "Keelan Vella | Full Stack Developer",
	},
	description:
		"Keelan Vella, an Entrepreneur and a Full Stack Developer with a relentless passion for software development.",
	// keywords:
	// "Keelan Vella, Keelan Vella Zerafa, El Hassu, ElHassu, Full Stack Developer, Entrepreneur, Software Developer, Software Engineer",
	alternates: {
		types: {
			"application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
		},
	},
};

export default function RootLayout({ children, articles, education, projects, ...props }) {
	return (
		<html
			lang="en"
			className="h-full antialiased"
			suppressHydrationWarning
		>
			<head></head>
			<body className="flex h-full bg-daintree-950">
				<Providers {...props}>{children}</Providers>
			</body>
		</html>
	);
}
