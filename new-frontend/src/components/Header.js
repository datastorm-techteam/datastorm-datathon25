import React from "react";

import logo from "../img/logo.png";

const Header = () => {
  return (
    <header class="fixed flex items-center justify-center w-screen z-50 overflow-x-hidden">
      <img
        src={logo}
        class="h-10 right-3 md:right-[50vw] fixed top-4 md:top-7 border-2 md:border-4 border-yellow-600 rounded-full z-50"
        alt="Logo"
      />
      <nav class="w-screen bg-stone-900/70 backdrop-blur-lg border-b-4 border-yellow-600 px-4 lg:px-0 py-2 dark:bg-gray-800">
        <div class="flex flex-wrap flex-col md:flex-row md:justify-between md:items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center rounded">
            {/* <img src={logo} class="mr-3 h-6 sm:h-8" alt="Logo" /> */}
            <span class="self-center text-xl font-medium whitespace-nowrap bg-gradient-to-r from-cyan-600 via-slate-50 to-yellow-600 bg-clip-text text-transparent border-dashed border-y border-transparent hover:border-slate-50">
              DataStorm:25
            </span>
          </a>

          <ul class="flex font-extralight text-md gap-4">
            <li>
              <a
                href="/#mission"
                class="py-1 text-slate-50 border-dashed border-b border-transparent hover:border-slate-50"
              >
                About
              </a>
            </li>

            <div class="flex w-1 items-center lg:border-l lg:border-yellow-600">
              &nbsp;
            </div>

            <li>
              <a
                href="/schedule"
                class="py-1 text-slate-50 border-dashed border-b border-transparent hover:border-slate-50"
              >
                Schedule
              </a>
            </li>

            <div class="flex w-1 items-center lg:border-l lg:border-yellow-600">
              &nbsp;
            </div>

            <li>
              <a
                href="/register"
                class="py-1 text-slate-50 border-dashed border-b border-transparent hover:border-slate-50"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
