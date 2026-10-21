export default function AboutLayout({
 children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>

            {/* Shared UI for all /about pages */}
            <nav className="flex flex-row mx-auto justify-end mt-0 h-[40px]  text-5xl font-bold px-3 gap-3 bg-zinc-900 text-xl">
                {/* <p>about nav:</p> */}
                <div className="about-links flex flex-row justify-center gap-4 p-1 text-zinc-200 ">
                    <a href="/about">Overview</a>
                    <a href="/about/our-projects">Our Projects</a>
                    <a href="/about/contact">Contact</a>
                    <a href="/about/contact">Problems</a>
                    <a href="/about/contact">Settings</a>
                </div>
                
            </nav>
            <h1 className="text-4xl mt-5 font-bold">Hello from About Layout!!</h1>

            <div>{children}</div>
        </section>
    )
}
