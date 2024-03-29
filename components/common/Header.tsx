import Link from 'next/link';

import { MenuIcon } from '@components/icons';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <div className="w-full z-100">
      <header className="flex items-center justify-between max-w-3xl py-8 mx-auto xl:max-w-5xl">
        <div>
          <Link href={'/'}>
            <a className="underlined">
              <h1 className="text-2xl font-medium cursor-pointer">
                Chany D. Dev
              </h1>
            </a>
          </Link>
        </div>
        <nav className="flex items-center text-lg">
          <ul className="hidden gap-4 md:flex">
            <li className="px-4 py-2 font-medium">
              <Link href={'/'}>
                <a className="underlined">Post</a>
              </Link>
            </li>
            <li className="px-4 py-2 font-medium">
              <Link href={'/'}>
                <a className="underlined">Note</a>
              </Link>
            </li>
            <li className="px-4 py-2 font-medium">
              <Link href={'/'}>
                <a className="underlined">About</a>
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 ml-4">
            <ThemeSwitch />
            <button className="p-3 transition border-2 border-gray-200 hover:border-black dark:border-gray-600 dark:hover:border-white md:hidden rounded-3xl">
              <MenuIcon className="w-5 h-5 fill-current" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
