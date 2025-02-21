import React from "react";

import logo from "../img/logo.png";

const Header = () => {
  return (
    <header class="fixed flex items-center justify-center w-screen">
      <img
        src={logo}
        class="h-10 fixed top-10 border-4 border-yellow-600 rounded-full z-50"
        alt="Logo"
      />
      <nav class="w-screen bg-stone-900/70 backdrop-blur-lg border-b-4 border-yellow-600 px-4 lg:px-0 py-3 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center rounded">
            {/* <img src={logo} class="mr-3 h-6 sm:h-8" alt="Logo" /> */}
            <span class="self-center text-xl font-medium whitespace-nowrap bg-gradient-to-r from-cyan-600 to-slate-50 bg-clip-text text-transparent border-dotted border-b-2 border-t-2 border-gray-100">
              DataStorm 25
            </span>
          </a>

          <ul class="flex font-light text-sm lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="/"
                class="block text-gray-100 p-2 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Content
              </a>
            </li>

            <div class="flex items-center lg:border-l lg:border-yellow-600">
              &nbsp;
            </div>

            <li>
              <a
                href="/"
                class="block text-gray-100 p-2 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Content
              </a>
            </li>

            <div class="flex items-center lg:border-l lg:border-yellow-600">
              &nbsp;
            </div>

            <li>
              <a
                href="/"
                class="block text-gray-100 p-2 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Content
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
