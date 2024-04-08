import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-indigo-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <span className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="bg-white dark:bg-indigo-900 rounded-full p-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" className="h-8" alt="Pokeball logo" />
            </div>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-red-600">Pokedex</span>
          </span>
        </Link>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-indigo-900 dark:border-indigo-900">
            <li>
              <Link href="/search">
                <span className="block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-indigo-900 dark:hover:text-white md:dark:hover:bg-transparent">Search</span>
              </Link>
            </li>
            <li>
              <Link href="/compare">
                <span className="block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-indigo-900 dark:hover:text-white md:dark:hover:bg-transparent">Compare</span>
              </Link>
            </li>
            <li>
              <Link href="/pokemons">
                <span className="block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-indigo-900 dark:hover:text-white md:dark:hover:bg-transparent">Pokemon</span>
              </Link>
            </li>
            <li>
              <Link href="/favourites">
                <span className="block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-indigo-900 dark:hover:text-white md:dark:hover:bg-transparent">Favourites</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
