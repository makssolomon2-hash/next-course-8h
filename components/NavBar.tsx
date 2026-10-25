import Link from "next/link";


export function NavBar() {
 return(
  <nav className="" >
    <div className="nav-bar top-0 flex flex-row items-center w-full mt-0 h-[60px] py-50% mx-auto my-auto justify-between   text-[1px] font-medium text-white px-3 gap-3 bg-zinc-900">
      <Link href='/'>
            <p className="text-3xl">Next<span className="text-blue-700 font-extrabold text-3xl">PRO</span></p>
          </Link>
          
          {/* <p>root nav:</p> */}

          <div className="nav-links flex flex-row justify-center p-0 gap-0  text-2xl ">
            <Link className="hover:bg-zinc-700 px-3 rounded-xl py-2" href="/">Home</Link>
            <Link href="/intergration" className="hover:bg-zinc-700 px-3 py-2 rounded-xl">Intergration</Link>
            <Link href="/activity" className="hover:bg-zinc-700 px-3 py-2 rounded-xl">Activity</Link>
            <Link href="/domains" className="hover:bg-zinc-700 px-3 py-2 rounded-xl">Domains</Link>
            <Link href="/usage" className="hover:bg-zinc-700 px-3 py-2 rounded-xl">Usage</Link>   
            <Link className="hover:bg-zinc-700 px-3 py-2 rounded-xl" href="/about/contact">Contact</Link>
            <Link className="hover:bg-zinc-700 px-3 py-2 rounded-xl" href="/about">About</Link>
            <Link href="/settings" className="hover:bg-zinc-700 px-3 py-2 rounded-xl">Settings</Link>
          
          </div>

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