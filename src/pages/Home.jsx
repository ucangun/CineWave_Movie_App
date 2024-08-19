"use client";

import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export default function Home() {
  return (
    <div className="background">
      <nav className="flex items-center justify-between bg-slate-800 px-6">
        <Link to="/">
          <img alt="" src={Logo} className="h-[8rem] w-auto" />
        </Link>

        <Link
          to="/login"
          className="text-md font-semibold underline  text-slate-50"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </nav>

      <div className="px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:py-48 ">
          <div className="text-center">
            <h1 className="text-3xl font-bold  tracking-wide text-slate-300 sm:text-4xl">
              Dive Into Cinematic Adventures with CineWave
            </h1>
            <p className="mt-10 text-lg leading-8 text-gray-400">
              CineWave is your go-to platform for discovering and streaming the
              latest and greatest movies. Explore a vast library of films and
              enjoy a seamless viewing experience. Join us in the world of
              entertainment and never miss a movie!
            </p>
            <div className="mt-12">
              <Link
                to="/login"
                className="rounded-md bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
