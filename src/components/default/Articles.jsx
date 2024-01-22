import { getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";
import { Card } from "@/components/Card";

function Article({ article }) {
	return (
		<Card as="article">
			<Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
			<Card.Eyebrow
				as="time"
				dateTime={article.date}
				decorate
			>
				{formatDate(article.date)}
			</Card.Eyebrow>
			<Card.Description>{article.description}</Card.Description>
			<Card.Cta>Read article</Card.Cta>
		</Card>
	);
}

export default async function Articles({}) {
    let articles = (await getAllArticles()).slice(0, 4);;

    if (!articles) return null

	return (
		<div className="row-span-3 flex flex-col">
			<section className="rounded-2xl">
				<h2 className="font-title text-lg font-bold uppercase tracking-tight text-daintree-900 sm:text-xl dark:text-celeste-200">
					Articles
				</h2>
				{articles.map((article) => (
					<Article
						key={article.slug}
						article={article}
					/>
				))}
			</section>
		</div>
	);
}
