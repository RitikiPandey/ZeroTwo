import React from "react";

function LandingPage() {
  var text = ["Design", " ", "Create", " ", "Render", " ", "Showcase"];
//   const [user, loading] = useAuthState(auth);
  return (
    <div className="flex flex-col items-center justify-center text-center absolute h-full w-full gap-y-24">
      <div className="text-7xl">
        <div className="box-content overflow-hidden h-20">
          {text.map((item) => {
            return (
              <span className="text-19xl font-bold text-sky-500 block h-full pr-3 animate-bounce  text-center ">
                {item}
              </span>
            );
          })}
        </div>
        <div className="">
          <p>Your imagination to this world</p>
        </div>
      </div>
      <div className="text-2xl w-3/6 flex items-center flex-col gap-12">
        <p>
          ZeroTwo connects everyone in the production process of animation so
          the team can deliver better results, faster.
        </p>
        {
        // !user &&    
        (
          <a
            className="block text-center px-3 py-2 rounded-md bg-sky-500 text-white w-3/12"
            href="/login"
          >
            Get Started
          </a>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
