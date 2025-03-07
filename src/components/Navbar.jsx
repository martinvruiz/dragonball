import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="p-4">
            <ul className="flex justify-center space-x-8 text-3xl text-black">
                <li className="hover:scale-125 transform transition duration-300">
                    <Link to="/" >Home</Link>
                </li>
                <li className="hover:scale-125 transform transition duration-300">
                    <Link to="/characters" >Characters</Link>
                </li>
                <li className="hover:scale-125 transform transition duration-300">
                    <Link to="/planets" >planets</Link>
                </li>
            </ul>
        </nav>
    )
}