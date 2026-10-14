export default function AboutLayout({
 children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>

            {/* Shared UI for all /about pages */}
            <nav className="flex flex-row mx-auto justify-center mt-5 text-4xl font-bold px-3 gap-3 bg-gray-800">
                <p>about nav:</p>
                <a href="/about">Overview</a>
                <a href="/about/our-projects">Our Projects</a>
                <a href="/about/contact">Contact</a>
            </nav>
            <h1 className="text-4xl mt-5 font-bold">Hello from About Layout!!</h1>

            <div>{children}</div>
        </section>
    )
}
