import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full md:p-2 hover:bg-[var(--color-surface-light)] transition-colors px-6 py-2"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun className="h-6 w-6 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 text-[var(--color-text-main)] absolute top-0 left-0" />
                <Moon className="h-6 w-6 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 text-[var(--color-text-main)] absolute top-0 left-0" />
            </div>
        </button>
    )
}
