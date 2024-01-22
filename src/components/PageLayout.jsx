export default function PageLayout({ children }) {
	return (
		<div className={`xl:inset-x-50 min-h-screen border-celeste-900 border-opacity-60 bg-celeste-100 py-2 shadow-lg md:inset-x-20 dark:border-x dark:bg-daintree-900`}>
			{children}
		</div>
	);
}
