import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Links = [
  {name: "Products", href: "products/" },
  {name: "Solution", href: "/solution" },
  {name: "Resourses", href: "/resourses" },
  {name: "Enterprice", href: "/enterprice" },
  {name: "Docs", href: "/docs" },
  {name: "Contact", href: "/about/contact" },
  {name: "Pricing", href:"/pricing" },
];


export function SecondNav()
{
    return(
        <nav >
                {/* <p>about nav:</p> */}
                <div >
                    <ul className="flex flex-row justify-end p-0 gap-0  text-2xl">
                        {Links.map((link) =>(
                            <li>
                                <Link href={link.href} className={buttonVariants({variant:"default"})} >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                  
                </div>
                
            </nav>
    );
}
