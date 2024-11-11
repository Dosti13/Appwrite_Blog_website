import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state for menu
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container className="w-full px-0 mx-0">
      <header className="w-full py-3 shadow bg-gray-950 text-white">
        <nav className="flex items-center justify-between w-full px-4">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Toggle Button on the right */}
          <button
            onClick={handleToggle}
            className="md:hidden text-white bg-slate-700 px-3 py-2 rounded focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"} {/* Unicode for "X" and "Hamburger" icons */}
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex flex-col md:flex-row items-center bg-gray-950 md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="mb-2 md:mb-0 md:ml-4">
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setMenuOpen(false); // Close menu on selection
                    }}
                    className="inline-block px-6 py-2 duration-200 hover:bg-slate-700 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="md:ml-4">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
