import { Link } from "react-router-dom";

export default function Header() {
  return(
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
                <Link to="/"><div className="text-2xl font-bold"> Logo</div></Link>
                <nav className="space-x-4">
                
                    <Link to="/about" className="hover:text-blue-400">About Us</Link>
                    <Link to="/services" className="hover:text-blue-400">Services</Link>
                    <Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link>
                    <Link to="/contact" className="hover:text-blue-400">Contact</Link>
                    <Link to="/signin" className="hover:text-blue-400">SignIn</Link>
                </nav>
            </header>
            </>
  )
}

