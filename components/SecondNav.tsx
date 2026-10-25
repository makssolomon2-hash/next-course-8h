import Link from "next/link";

export function SecondNav()
{
    return(
        <nav className="flex flex-row mx-auto justify-end mt-0 h-[40px]  text-5xl font-bold px-3 gap-3 bg-zinc-800 text-xl">
                {/* <p>about nav:</p> */}
                <div className="about-links flex flex-row justify-center gap-4 p-1 text-zinc-200 ">
                    <Link href="/products">Products</Link>
                    <Link href="/solution">Solution</Link>
                    <Link href="/resourses">Resourses</Link>
                    <Link href="/enterprice">Enterprice</Link>
                    <Link href="/docs">Docs</Link>
                    <Link href="/pricing">Pricing</Link>
                  
                </div>
                
            </nav>
    );
}
