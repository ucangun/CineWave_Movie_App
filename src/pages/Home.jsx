"use client";

import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="background">
      <nav className="flex items-center justify-between bg-slate-800 px-6">
        <Logo type="primary" />

        <Button to="/login" type="secondary">
          Log in <span aria-hidden="true">&rarr;</span>
        </Button>
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
              <Button to="/login" type="primary">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
