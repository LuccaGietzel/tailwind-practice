import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function MyComponent() {
	const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false);
	const [colorTheme, setColorTheme] = useState("dark");

	useEffect(() => {
		const root = document.documentElement;

		// 1. Toggle the Tailwind dark class
		if (colorTheme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

		// 2. Update Safari's top bar color
		const themeColor = colorTheme === "dark" ? "#0f172a" : "#ffffff"; // Match slate-900 & white
		let metaThemeColor = document.querySelector('meta[name="theme-color"]');

		if (!metaThemeColor) {
			metaThemeColor = document.createElement("meta");
			metaThemeColor.setAttribute("name", "theme-color");
			document.head.appendChild(metaThemeColor);
		}

		metaThemeColor.setAttribute("content", themeColor);
	}, [colorTheme]);

	return (
		<div
			className={`${colorTheme} text-background dark:bg-background dark:text-primary min-h-dvh pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]`}
		>
			{/* Navbar */}
			<div className="flex items-center justify-between p-4">
				<div className="font-bold">
					<FontAwesomeIcon icon={faPersonDigging} className="text-xl" />
				</div>

				{/* Desktop Nav */}
				<div className="hidden items-center gap-2 sm:flex">
					<span className="cursor-pointer transition-all active:text-gray-300 sm:hover:text-gray-300">
						Home
					</span>
					<span className="cursor-pointer transition-all active:text-gray-300 sm:hover:text-gray-300">
						About
					</span>
					<span className="cursor-pointer transition-all active:text-gray-300 sm:hover:text-gray-300">
						Contact
					</span>
					<button
						onClick={() =>
							setColorTheme(colorTheme === "light" ? "dark" : "light")
						}
						type="button"
						className="cursor-pointer text-2xl"
					>
						{colorTheme === "light" ? "🌕" : "☀️"}
					</button>
				</div>

				<button
					onClick={() => setMobileNavBarOpen(!mobileNavBarOpen)}
					type="button"
					className="cursor-pointer text-2xl sm:hidden"
				>
					≡
				</button>
			</div>
			{/* Mobile Nav */}
			{mobileNavBarOpen && (
				<div className="flex flex-col items-center gap-2 p-4 sm:hidden">
					<span className="cursor-pointer transition-all active:text-gray-300 sm:hover:text-gray-300">
						Home
					</span>
					<span className="cursor-pointer transition-all active:text-gray-300 sm:hover:text-gray-300">
						About
					</span>
					<span className="cursor-pointer transition-all active:text-gray-300 sm:hover:text-gray-300">
						Contact
					</span>
					<button
						onClick={() =>
							setColorTheme(colorTheme === "light" ? "dark" : "light")
						}
						type="button"
						className="cursor-pointer text-2xl sm:hidden"
					>
						{colorTheme === "light" ? "🌕" : "☀️"}
					</button>
				</div>
			)}

			<div className="text-primary grid gap-6 p-6 text-center text-2xl font-semibold sm:grid-cols-2 sm:text-sm md:grid-cols-3">
				<div className="bg-background rounded p-4 transition-all hover:scale-105 active:scale-105 sm:active:scale-107 dark:bg-neutral-500">
					Feature One
				</div>
				<div className="bg-background rounded p-4 transition-all hover:scale-105 active:scale-105 sm:active:scale-107 dark:bg-neutral-500">
					Feature Two
				</div>
				<div className="bg-background rounded p-4 transition-all hover:scale-105 active:scale-105 sm:active:scale-107 dark:bg-neutral-500">
					Feature Three
				</div>
				<div className="bg-background rounded p-4 transition-all hover:scale-105 active:scale-105 sm:active:scale-107 dark:bg-neutral-500">
					Feature Four
				</div>
				<div className="bg-background rounded p-4 transition-all hover:scale-105 active:scale-105 sm:active:scale-107 dark:bg-neutral-500">
					Feature Five
				</div>
				<div className="bg-background rounded p-4 transition-all hover:scale-105 active:scale-105 sm:active:scale-107 dark:bg-neutral-500">
					Feature Six
				</div>
			</div>
		</div>
	);
}
