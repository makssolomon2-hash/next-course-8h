import Link from "next/link"
import { SecondNav } from "../../components/SecondNav"

export default function Intergration({
 children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>

            {/* Shared UI for all /about pages */}
            <SecondNav/>
           

            <div>{children}</div>
        </section>
    )
}