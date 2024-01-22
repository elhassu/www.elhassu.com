import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/assets/icons/SocialIcons";
import image1 from "@/assets/images/image-1.jpg";
import image2 from "@/assets/images/image-2.jpg";
import image3 from "@/assets/images/image-3.jpg";
import image4 from "@/assets/images/image-4.jpg";
import image5 from "@/assets/images/image-5.jpg";
import Articles from "@/components/default/Articles";
import Education from "@/components/default/Education";
import Experience from "@/components/default/Experience";
import Projects from "@/components/default/Projects";
// import { Experience as experience } from "@/lib/Career";
import { getDuration, getMonthYear } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

export function SocialLink({ icon: Icon, ...props }) {
	return (
		<Link
			className="group -m-1 p-1"
			{...props}
			target="_blank"
			rel="noreferrer"
		>
			<Icon className="h-6 w-6 text-daintree-800 hover:opacity-80 dark:text-celeste-500 dark:opacity-60 dark:hover:opacity-100" />
		</Link>
	);
}

function Photos() {
	const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

	return (
		<section
			aria-label="Hobby Photos"
			className="mt-16"
		>
			<div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, imageIndex) => (
					<div
						key={image.src}
						className={
							"relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl " +
							rotations[imageIndex % rotations.length]
						}
					>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover shadow-xl"
						/>
					</div>
				))}
			</div>
		</section>
	);
}

export default async function Home() {

	return (
		<>
			<div className="mx-8 md:mx-16">
				<header className="pt-20">
					<h1
						aria-label="Full Name"
						className="uppercase"
					>
						<span className="font-title text-3xl font-semibold leading-snug text-daintree-800 md:text-5xl dark:text-celeste-100">
							Keelan
						</span>
						<br />
						<span className="font-title text-5xl font-bold leading-5 tracking-widest text-daintree-900 md:text-7xl md:leading-10 dark:text-celeste-200">
							Vella
						</span>
					</h1>
					<h2
						aria-label="Role"
						className="font-title text-xl font-bold uppercase leading-relaxed tracking-widest text-daintree-900 md:text-xl dark:text-celeste-300"
					>
						Full Stack Developer
					</h2>
					<p className="mt-6 text-base normal-case text-daintree-800 md:mr-48 md:text-lg dark:text-celeste-50">
						Explore my world of software development, project management, and creative design. Navigate
						through my expertise in Node.js, React.js, and AWS, showcased with attention to detail. Welcome
						to a vibrant gateway of diverse skills and experiences!
					</p>
					<section
						aria-label="Social Media Links"
						className="mt-6 flex gap-6"
					>
						<SocialLink
							href="https://www.instagram.com/keelan_velafa/"
							aria-label="Follow on Instagram"
							title="Follow on Instagram"
							icon={InstagramIcon}
						/>
						<SocialLink
							href="https://github.com/elhassu"
							aria-label="Follow on GitHub"
							title="Follow on GitHub"
							icon={GitHubIcon}
						/>
						<SocialLink
							href="https://www.linkedin.com/in/keelan-vella/"
							aria-label="Follow on LinkedIn"
							title="Follow on LinkedIn"
							icon={LinkedInIcon}
						/>
					</section>
				</header>
			</div>
			<Photos />
			<div className="mx-8 md:mx-16">
				<Experience />
			</div>
			<div className="mx-8 grid grid-cols-1 gap-4 md:mx-16 md:gap-10 xl:grid-cols-2 mt-8">
				<Articles />
				<Education />
				<Projects />
			</div>
		</>
	);
}
