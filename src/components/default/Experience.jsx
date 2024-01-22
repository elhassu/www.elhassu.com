import { getExperience } from "@/lib/Career";
import { getDuration, getMonthYear } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import { isValidElement } from "react";

export default async function Experience({ children }) {
	let experience = await getExperience();
	return (
		<section className="pt-14">
			<h2 className="font-title text-3xl font-bold uppercase tracking-tight text-daintree-900 sm:text-4xl dark:text-celeste-200">
				Experience
			</h2>
			<ul
				role="list"
				className="mx-auto grid grid-cols-1 gap-2 rounded-2xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-8 xl:grid-cols-3"
			>
				{experience.map((entry) => (
					<li
						key={entry.name}
						className="rounded-2xl p-5 transition hover:scale-105 hover:shadow-lg dark:hover:bg-daintree-800 dark:hover:bg-opacity-10"
					>
						<div className="rounded-t-lg bg-daintree-900 dark:bg-transparent">
							<Link href="/experience/buddy-hr">
								<Image
									aria-hidden="true"
									className={`mx-auto h-40 ${
										entry.rounded ? "rounded-full " : ""
									}object-contain p-10 md:h-48`}
									src={entry.logo}
									alt={`${entry.name} Logo`}
								/>
							</Link>
						</div>
						<div className="flex justify-between border-t-1 border-daintree-900 py-2 dark:border-celeste-400">
							<h3 className="w-min whitespace-nowrap text-lg font-semibold leading-7 tracking-tight text-daintree-950 dark:text-celeste-50">
								{entry.name}
							</h3>
							<ul
								role="list"
								className="flex w-min"
							>
								{entry.links?.map((social) => (
									<li key={social.title}>
										<a
											href={social.url}
											target="_blank"
											className="text-gray-400 hover:text-gray-300"
										>
											<span className="sr-only">{social.title}</span>
											{(() => {
												if (isValidElement(social.icon)) {
													return social.icon;
												} else if (social.icon) {
													return (
														<social.icon
															title={social.title}
															aria-label={social.title}
															className="h-6 w-6 text-daintree-800 hover:opacity-80 dark:text-celeste-500 dark:opacity-60 dark:hover:opacity-100"
														/>
													);
												} else return null;
											})()}
										</a>
									</li>
								))}
							</ul>
						</div>
						<p className="text-base leading-6 text-daintree-900 dark:text-celeste-200">{entry.role}</p>
						<p className="flex justify-between text-xs text-celeste-800 dark:text-celeste-300">
							<span className="w-min whitespace-nowrap text-left">
								<time dateTime={entry.start}>{getMonthYear(entry.start)}</time> -{" "}
								<time dateTime={entry.end}>{entry.current ? "Present" : getMonthYear(entry.end)}</time>
							</span>
							<span className="w-min whitespace-nowrap text-right">
								{getDuration(entry.start, entry.end)}
							</span>
						</p>
						<ul
							role="list"
							className="flex justify-center gap-2"
						>
							{entry.stacks?.map((stack) => (
								<li
									title={stack.title}
									aria-label={stack.title}
									key={stack.title}
								>
									<span className="sr-only">{stack.title}</span>
									{stack.icon && (
										<stack.icon className="h-6 w-6 text-daintree-800 dark:text-celeste-500" />
									)}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}
