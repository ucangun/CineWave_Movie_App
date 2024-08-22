import Button from "../components/Button";
import React from "react";

const NotFound = () => {
  return (
    <>
      <main className="flex justify-center py-48 background ">
        <div className="text-center">
          <p className="text-xl font-semibold text-slate-200">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-400 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Button to="/" type="primary">
              Go back to home
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
