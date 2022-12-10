import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto pt-3">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Trust by developers across the globe
          </h1>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            minima ut aspernatur, dolorum assumenda consectetur aliquid illo
            odit doloribus voluptates ab ratione fuga ipsam consequatur
            incidunt, saepe deserunt. Iste, accusantium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-500 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-500 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-500 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
