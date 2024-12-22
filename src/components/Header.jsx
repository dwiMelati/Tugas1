import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-pink-600 text-white shadow-md">
      <nav className="container-custom py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-pink-200 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/novels" className="text-white hover:text-pink-200 transition-colors duration-200">
              Novels
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-pink-200 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/profil" className="text-white hover:text-pink-200 transition-colors duration-200">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

