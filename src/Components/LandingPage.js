import React from "react";

const LandingPage = ({ user }) => {
  var text = ["Design", " ", "Create", " ", "Render", " ", "Showcase"];
  return (
    <div className="text-white bg-black">
      <div className="max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 animate-bounce">
            {text.map((item) => {
              return (
                <span className="text-19xl font-bold text-sky-500 block h-full pr-3 text-center ">
                  {item}
                </span>
              );
            })}
          </p>
        </div>
        <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
          Your imagination to this world
        </h1>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          ZeroTwo connects everyone in the production process of animation so
          the team can deliver better results, faster.
        </p>

        <button className="bg-sky-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
