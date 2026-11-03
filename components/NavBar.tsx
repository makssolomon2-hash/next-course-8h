import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import { ThemeToggle } from "./web/theme-toogle";

const navLinks = [
  {name: "Home", href: "/" },
  {name: "Intergration", href: "/intergration" },
  {name: "Activity", href: "/activity" },
  {name: "Domains", href: "/domains" },
  {name: "Usage", href: "/usage" },
  {name: "Contact", href: "/about/contact" },
  {name: "About", href:"/about" },
  {name: "Settings", href: "/settings" },
];


export function NavBar() {
 return(
  <nav className="" >
    <div className="nav-bar top-0 flex flex-row items-center w-full mt-0 h-[60px] py-50% mx-auto my-auto justify-between   text-[1px] font-medium text-white px-3 gap-3 bg-zinc-900">
      <Link href='/'>
            <p className="text-3xl">Next<span className="text-blue-700 font-extrabold text-3xl">PRO</span></p>
          </Link>
          
          {/* mapping */}
          <ul className="nav-links flex flex-row justify-center p-0 gap-0  text-2xl">
            {navLinks.map((link) =>(
              <li key={link.name}>
                <Link href={link.href} className={buttonVariants({
                  variant:"ghost",
                  className: ""
                  
                  })}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
       
          <div className="flex gap-5 text-2xl p-1">
            <Button variant= {"destructive"} >DELETE</Button>
            <Button 
              variant={'default'} 
              className="hover:bg-zinc-700"
            >Add</Button>

            <ThemeToggle></ThemeToggle>

            <Link href='/auth/sighnup' className={buttonVariants( {
              variant: "default",
              className: "hover:bg-zinc-700"
              } )}>
              Sign In
            </Link>

            <Link href='/auth/login' className={buttonVariants( {
              variant: "outline",
              className: "text-foreground"
              
              } )}>
              Log In
            </Link>

          </div>
    </div>      
  </nav>

    /*className="hover:bg-zinc-700 px-3 py-2 rounded-xl"*/
  
 )
}