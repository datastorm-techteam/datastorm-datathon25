import React from "react";

import logo from "../img/logo.png";

const Header = () => {
  return (
    <header class="sticky py-7 flex items-center justify-center">
      <img src={logo} class="h-10 fixed top-2 border-4 border-yellow-600 rounded-full" alt="Logo" />
      <nav class="w-screen bg-yellow-50 border-b-4 border-t-4 border-yellow-600 px-4 lg:px-0 py-4 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            {/* <img src={logo} class="mr-3 h-6 sm:h-8" alt="Logo" /> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap text-blue-900 border-dotted border-b-2 border-t-2 border-yellow-600">
              DataStorm 25
            </span>
          </a>

          <ul class="flex font-medium text-md lg:flex-row lg:space-x-8 lg:mt-0">
            <li class="flex items-center">
              <a
                href="/"
                class="block  text-gray-700 p-2 rounded bg-primary-700 lg:text-primary-700 lg:p-0 dark:text-white"
              >
                Home
              </a>
            </li>

            <div class="flex items-center lg:border-l-2 lg:border-sky-800 ">
              &nbsp;
            </div>

            <li>
              <a
                href="/"
                class="block  text-gray-700 p-2 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Content
              </a>
            </li>

            <div class="flex items-center lg:border-l-2 lg:border-sky-800 ">
              &nbsp;
            </div>

            <li>
              <a
                href="/"
                class="block  text-gray-700 p-2 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Content
              </a>
            </li>

            <div class="flex items-center lg:border-l-2 lg:border-sky-800 ">
              &nbsp;
            </div>

            <li>
              <a
                href="/"
                class="block  text-gray-700 p-2 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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
