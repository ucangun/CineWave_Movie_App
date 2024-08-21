"use client";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="background">
      <Navbar />

      <div className="px-8">
        <div className="max-w-2xl py-32 mx-auto sm:py-40 lg:py-48 ">
          <Header />
        </div>
      </div>
    </div>
  );
}
