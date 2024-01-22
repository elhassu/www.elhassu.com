"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { AppContext } from "@/app/providers";
import { formatDate } from "@/lib/formatDate";

function ArrowLeftIcon(props) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ArticleLayout({ article, children }) {
	let router = useRouter();
	let { previousPathname } = useContext(AppContext);

	return (
			<div className="xl:relative">
				<div className="mx-auto max-w-2xl">
					{previousPathname && (
						<button
							type="button"
							onClick={() => router.back()}
							aria-label="Go back to articles"
							className="bg-white shadow-zinc-800/5 ring-zinc-900/5 dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 group mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md ring-1 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:ring-0"
						>
							<ArrowLeftIcon className="stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400 h-4 w-4 transition" />
						</button>
					)}
					<article>
						<header className="flex flex-col">
							<h1 className="text-zinc-800 dark:text-zinc-100 mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
								{article.title}
							</h1>
							<time
								dateTime={article.date}
								className="text-zinc-400 dark:text-zinc-500 order-first flex items-center text-base"
							>
								<span className="bg-zinc-200 dark:bg-zinc-500 h-4 w-0.5 rounded-full" />
								<span className="ml-3">{formatDate(article.date)}</span>
							</time>
						</header>
						<div
							className="mt-8"
							data-mdx-content
						>
							{children}
						</div>
					</article>
				</div>
			</div>
	);
}
