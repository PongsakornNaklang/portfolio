import ThemeToggle from "./theme_toggle"

const Container = ({ children }) => {
    return (
        <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {children}
            <ThemeToggle />
        </div>
    )
}

export default Container
