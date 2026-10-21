export default function AboutLayout({
 children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h1 className="text-4xl mt-5 font-bold">Hello from About Layout!!</h1>

            <div>{children}</div>
        </section>
    )
}
