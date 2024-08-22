import Button from "./Button";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-wide text-slate-300 sm:text-4xl dark:text-slate-900 ">
        Dive Into Cinematic Adventures with CineWave
      </h1>
      <p className="mt-10 text-lg leading-8 text-gray-400 dark:text-gray-900 ">
        CineWave is your go-to platform for discovering and streaming the latest
        and greatest movies. Explore a vast library of films and enjoy a
        seamless viewing experience. Join us in the world of entertainment and
        never miss a movie!
      </p>
      <div className="mt-12">
        <Button to="/movies" type="primary">
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Header;
