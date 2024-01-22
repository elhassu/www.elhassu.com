import { getProjects } from "@/lib/Career";
import Image from "next/image";

function Project({ project }) {
	let startLabel = typeof project.start === "string" ? project.start : project.start.label;
	let startDate = typeof project.start === "string" ? project.start : project.start.dateTime;

	let endLabel = typeof project.end === "string" ? project.end : project.end.label;
	let endDate = typeof project.end === "string" ? project.end : project.end.dateTime;

	return (
		<li className="flex gap-4">
			<div className="relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-celeste-800/5 ring-1 ring-celeste-900/5 dark:border dark:border-celeste-700/50 dark:bg-celeste-100 dark:ring-0">
				{typeof project.logo === "function" ? (
					<project.logo className="h-12 w-12 text-daintree-800 dark:text-celeste-500" />
				) : (
					<Image
						src={project.logo}
						alt={`${project.name} Logo`}
						className="h-12 w-12 rounded-full"
						unoptimized
					/>
				)}
			</div>
			<dl className="flex flex-auto flex-wrap gap-x-2">
				<dt className="sr-only">Project</dt>
				<dd className="w-full flex-none text-sm font-medium text-daintree-900 dark:text-celeste-100">
					{project.name}
					{project.links ? (
						<ul
							role="list"
							className="flex justify-center gap-2"
						>
							{project.links?.map((link) => (
								<li
									title={link.title}
									aria-label={link.title}
									key={link.title}
								>
									<span className="sr-only">{link.title}</span>
									{link.icon && (
										<link.icon className="h-6 w-6 text-daintree-800 dark:text-celeste-500" />
									)}
								</li>
							))}
						</ul>
					) : null}
				</dd>
				<dt className="sr-only">Description</dt>
				<dd className="text-xs text-celeste-500 dark:text-celeste-400">{project.description}</dd>
				<dt className="sr-only">Date</dt>
				<dd
					className="ml-auto text-xs text-celeste-400 dark:text-celeste-500"
					aria-label={`${startLabel} until ${endLabel}`}
				>
					<time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span>{" "}
					<time dateTime={endDate}>{endLabel}</time>
				</dd>
				<dd className="w-full">
					{project.stacks ? (
						<ul
							role="list"
							className="flex justify-left gap-2"
						>
							{project.stacks?.map((stack) => (
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
					) : null}
				</dd>
			</dl>
		</li>
	);
}

export default async function Projects({}) {
	const projects = await getProjects();

	return (
		<section className="rounded-2xl">
			<h2 className="font-title text-lg font-bold uppercase tracking-tight text-daintree-900 sm:text-xl dark:text-celeste-200">
				Projects
			</h2>
			<ol className="mt-6 space-y-4">
				{projects.map((project, projectIndex) => (
					<Project
						key={projectIndex}
						project={project}
					/>
				))}
			</ol>
			{/* <Button href="#" variant="secondary" className="group mt-6 w-full">
	  Download CV
	  <ArrowDownIcon className="h-4 w-4 stroke-celeste-400 transition group-active:stroke-celeste-600 dark:group-hover:stroke-celeste-50 dark:group-active:stroke-celeste-50" />
	</Button> */}
		</section>
	);
}
