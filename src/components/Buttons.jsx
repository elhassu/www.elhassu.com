export function ButtonSolid({ children, className, as:Tag="button", ...props }) {
    return (
        <Tag
            className={`px-4 py-2 font-semibold text-opacity-75 text-white bg-daintree-800 rounded-md hover:bg-daintree-700 dark:bg-celeste-400 dark:hover:bg-celeste-500 ${className} transition`}
            {...props}
        >
            {children}
        </Tag>
    );
}

export function ButtonOutline({ children, className, ...props }) {
    return (
        <button
            className={`px-4 py-2 font-semibold text-celeste-500 border border-celeste-500 rounded-md hover:bg-celeste-50 dark:text-celeste-400 dark:border-celeste-400 dark:hover:bg-celeste-500 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}