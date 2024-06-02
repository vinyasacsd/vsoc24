import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'About' },
    { id: 2, link: 'Timeline' },
    { id: 3, link: 'Partners' },
    {
      id: 4,
      link: 'Register',
      url: 'https://vinyasa-summer-of-code-vsoc.devfolio.co/'
    }
  ];

  return (
    <nav className="sticky top-0 z-10 bg-orange-700 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <div className="max-w-6xl mx-auto space-x-10 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <img src="/logobg.png" alt="Logo" className="h-16 sm:h-16 " />
        </div>
        <ul><li><a className='cursor-pointer capitalize text-md font-Vsoc py-2 mt-4 font-bold text-red-700 bg-red-200 px-4 text-xl rounded-lg hover:scale-105 duration-200 sm:hidden' href="https://vinyasa-summer-of-code-vsoc.devfolio.co/">Register</a></li></ul>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-8 text-xl font-vsoc pl-36">
          {links.map(({ id, link, url }) =>
            link !== 'Register' ? (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                className="cursor-pointer capitalize text-md font-Vsoc font-bold  text-gray-600  hover:scale-105 duration-200"
              >
                {link}
              </Link>
            ) : (
              <a
                key={id}
                href={url}
                className="cursor-pointer capitalize text-md font-Vsoc font-bold text-red-700 bg-red-200 px-4 text-xl rounded-lg hover:scale-105 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!Nav)}
          className="cursor-pointer  m-4 mt-10 z-10 text-gray-500 md:hidden"
        >
          {Nav ? <FaTimes size={36} /> : <FaBars size={36} />}
          
        </div>
      </div>

      {Nav && (
        <ul className="flex flex-col duration-300 justify-center  items-center scroll-m-0 top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-700 to-white text-black">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer duration-500 capitalize py-6 text-2xl">
              {link !== 'Register' ? (
                <Link onClick={() => setNav(!Nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              ) : (
                <a
                  href="https://vinyasa-summer-of-code-vsoc.devfolio.co/"
                  onClick={() => setNav(!Nav)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 bg-red-200 px-4 py-2 rounded-lg hover:scale-105 duration-200"
                >
                  {link}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;