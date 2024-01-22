"use client";
import { BackgroundHexagons } from "@/components/default/BackgroundHexagons";
import { Footer } from "@/components/default/Footer";
import PageLayout from "@/components/PageLayout";
import { ThemeProvider, useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useRef, useState, Children, isValidElement, cloneElement } from "react";

function usePrevious(value) {
	let ref = useRef();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}

function ThemeWatcher() {
	let { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		let media = window.matchMedia("(prefers-color-scheme: dark)");

		function onMediaChange() {
			let systemTheme = media.matches ? "dark" : "light";
			if (resolvedTheme === systemTheme) {
				setTheme("system");
			}
		}

		onMediaChange();
		media.addEventListener("change", onMediaChange);

		return () => {
			media.removeEventListener("change", onMediaChange);
		};
	}, [resolvedTheme, setTheme]);

	return null;
}

export const AppContext = createContext({});

function ThemeToggle() {
	let { resolvedTheme, setTheme } = useTheme();
	let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
	let [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<button
			type="button"
			aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
			className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
			onClick={() => setTheme(otherTheme)}
		>
			AAA
		</button>
	);
}

export function Providers({ children }) {
	let pathname = usePathname();
	let previousPathname = usePrevious(pathname);
	return (
		<AppContext.Provider value={{ previousPathname }}>
			<ThemeProvider
				attribute="class"
				disableTransitionOnChange
			>
				<ThemeWatcher />
				<main className="m-0 h-max w-full overflow-hidden px-0 md:px-20 lg:px-40">
					<PageLayout>
						<div className="overflow-x-clip">
							<BackgroundHexagons />
						</div>
						<ThemeToggle />
						{children}
						<Footer />
					</PageLayout>
				</main>
			</ThemeProvider>
		</AppContext.Provider>
	);
}
