import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
export function NavbarLandingPage() {
  const [navbarOpen, setNavbarOpen] = useState(false); 
  return (
    <>
      <nav className="bg-transparent px-10 md:px-20 py-2">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="#/" className="flex items-center">
            <img
              src="/assets/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Kingdomly Logo"
            />
            <span className="self-center text-2xl text-white font-bold whitespace-nowrap ">
              Kingdomly
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:text-green-900"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => {
                if (navbarOpen) {
                  setNavbarOpen(false);
                } else {
                  setNavbarOpen(true);
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hamburger */}
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="justify-between items-center md:flex w-full md:w-auto md:order-2 bg-black md:bg-transparent mt-2 md:mt-0 bg-opacity-20 rounded-lg"
            hidden={navbarOpen}
          >
            <ul className="flex flex-col p-4 bg-transparent md:flex-row md:space-x-8 md:mt-0 text-sm md:text-base md:font-medium ">
              <li>
                <a
                  href="#about"
                  className="block py-2 pr-4 pl-3 text-white hover:text-green-900 md:p-0 drop-shadow-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#rentals"
                  className="block py-2 pr-4 pl-3 text-white hover:text-green-900 md:hover:bg-transparent md:hover:text-green-900 md:p-0 drop-shadow-lg"
                >
                  Rentals
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="block py-2 pr-4 pl-3 text-white hover:text-green-900 md:hover:bg-transparent md:hover:text-green-900 md:p-0 drop-shadow-lg"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#contactus"
                  className="block py-2 pr-4 pl-3 text-white hover:text-green-900 md:hover:bg-transparent md:hover:text-green-900 md:p-0 drop-shadow-lg"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center py-2 pr-4 pl-3 text-white hover:text-green-900 md:p-0 drop-shadow-lg"
                >
                  Docs {"\xa0"}
                  <BsBoxArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export function NavbarMainApp() {
  return <></>;
}

export default NavbarLandingPage;
