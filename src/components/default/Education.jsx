"use server";
import Image from "next/image";
import { getEducation } from "@/lib/Career";
import { isValidElement } from "react";

function Certificate({ certificate }) {
	let startLabel = typeof certificate.start === "string" ? certificate.start : certificate.start.label;
	let startDate = typeof certificate.start === "string" ? certificate.start : certificate.start.dateTime;

	let endLabel = typeof certificate.end === "string" ? certificate.end : certificate.end.label;
	let endDate = typeof certificate.end === "string" ? certificate.end : certificate.end.dateTime;

	return (
		<li className="flex gap-4">
			<div className="relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-celeste-800/5 ring-1 ring-celeste-900/5 dark:border dark:border-celeste-700/50 dark:bg-celeste-100 dark:ring-0">
				{isValidElement(certificate.logo) ? (
					certificate.logo
				) : (
					<Image
						src={certificate.logo}
						alt=""
						className="h-12 w-12 rounded-full"
						unoptimized
					/>
				)}
			</div>
			<dl className="flex flex-auto flex-wrap gap-x-2">
				<dt className="sr-only">Institute</dt>
				<dd className="w-full flex-none text-sm font-medium text-daintree-900 dark:text-celeste-100">
					{certificate.institute}
					{certificate.links ? (
						<ul
							role="list"
							className="inline-flex gap-2 pl-1 align-sub"
						>
							{certificate.links?.map((link) => (
								<li
									title={link.title}
									aria-label={link.title}
									key={link.title}
								>
									<a href={link.url} target="_blank">
										<span className="sr-only">{link.title}</span>
										{link.icon && (
											<link.icon className="h-5 w-5 text-daintree-800 dark:text-celeste-500" />
										)}
									</a>
								</li>
							))}
						</ul>
					) : null}
				</dd>
				<dt className="sr-only">Certification</dt>
				<dd className="text-xs text-celeste-500 dark:text-celeste-400">{certificate.certificate}</dd>
				<dt className="sr-only">Date</dt>
				<dd
					className="ml-auto text-xs text-celeste-400 dark:text-celeste-500"
					aria-label={`${startLabel} until ${endLabel}`}
				>
					<time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span>{" "}
					<time dateTime={endDate}>{endLabel}</time>
				</dd>
				<dd className="w-full">
					{certificate.stacks ? (
						<ul
							role="list"
							className="flex justify-left gap-2"
						>
							{certificate.stacks?.map((stack) => (
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

export default async function Education() {
	const education = await getEducation();

	return (
		<section className="rounded-2xl">
			<h2 className="font-title text-lg font-bold uppercase tracking-tight text-daintree-900 sm:text-xl dark:text-celeste-200">
				Education
			</h2>
			<ol className="mt-6 space-y-4">
				{education.map((certificate, certificateIndex) => (
					<Certificate
						key={certificateIndex}
						certificate={certificate}
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
