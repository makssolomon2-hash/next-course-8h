import Link from "next/link";

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
                <Link href={link.href} className="hover:bg-zinc-700 px-3 rounded-xl py-2">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
       
          <div className="flex gap-5 text-2xl p-1">
            <Link href='/' className="hover:bg-zinc-700 px-3 py-2 rounded-xl">
              Sign In
            </Link>
            <Link href='/' className="bg-blue-700 text-white font-bold hover:bg-zinc-700 px-3 py-2 rounded-xl">
              Login
            </Link>
          </div>
    </div>      
  </nav>

  
 )
}