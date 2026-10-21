import Link from "next/link";


export function NavBar() {
 return(
  <nav className="top-0 flex flex-row w-full mt-0 h-[40px] mx-auto justify-between  text-5xl font-bold px-3 gap-3 bg-zinc-800">
          <Link href='/'>
            <p className="text-3xl">Next<span className="text-blue-700 font-extrabold text-3xl">PRO</span></p>
          </Link>
          
          {/* <p>root nav:</p> */}

          <div className="nav-links flex flex-row justify-center p-1 gap-5  text-2xl ">
            <Link className="hover:bg-gray-800" href="/">Home</Link>
            <Link href="/intergration">Intergration</Link>
            <Link href="/activity">Activity</Link>
            <Link href="/domains">Domains</Link>
            <Link href="/usage">Usage</Link>   
            <Link className="hover:bg-gray-800" href="/about/contact">Contact</Link>
            <Link className="hover:bg-gray-800" href="/about">About</Link>
            <Link href="/settings">Settings</Link>
          
          </div>

          <div className="flex gap-5 text-2xl p-1">
            <Link href='/'>
              Login
            </Link>
            <Link href='/'>
              Sign In
            </Link>
          </div>
        </nav>
 )
}