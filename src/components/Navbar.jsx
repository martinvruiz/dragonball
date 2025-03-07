import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="p-4">
            <ul className="flex justify-center space-x-8 text-xl md:text-2xl lg:text-3xl text-black">
                <li className="hover:scale-125 transform transition duration-300">
                    <Link to="/" >Inicio</Link>
                </li>
                <li className="hover:scale-125 transform transition duration-300">
                    <Link to="/characters" >Personajes</Link>
                </li>
                <li className="hover:scale-125 transform transition duration-300">
                    <Link to="/planets" >Planetas</Link>
                </li>
            </ul>
        </nav>
    )
}