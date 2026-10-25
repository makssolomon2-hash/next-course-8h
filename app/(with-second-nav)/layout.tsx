import { SecondNav } from "@/components/SecondNav"

export default function PagesLayout({
 children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <SecondNav/>

            <div>{children}</div>
        </section>
    )
}