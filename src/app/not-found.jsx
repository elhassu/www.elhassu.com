import { ButtonSolid } from "@/components/Buttons";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center pt-32">
			<p className="text-lg font-bold text-daintree-800 dark:text-celeste-500">404</p>
			<h1 className="mt-4 text-4xl font-bold tracking-tight text-daintree-800 sm:text-5xl dark:text-celeste-100">
				Page not found
			</h1>
			<p className="mt-4 text-base text-daintree-700 dark:text-celeste-400">
				Sorry, we couldn't find the page you're looking for.
			</p>
			<div className="pt-10">
				<ButtonSolid
					as={Link}
					href="/"
				>
					Go Home
				</ButtonSolid>
			</div>
		</div>
	);
}
