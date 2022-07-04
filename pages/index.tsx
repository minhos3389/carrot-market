import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="selec-none open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">what is my fav. food.</summary>
        <span className="selection:bg-indigo-600 selection:text-white">
          김치
        </span>
      </details>
    </div>
  );
};

export default Home;
