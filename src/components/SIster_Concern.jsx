import React from "react";
import Marquee from "react-fast-marquee";
import m3 from "../assets/img/3m.svg";
import barstool from "../assets/img/barstool-store.svg";
import budweiser from "../assets/img/budweiser.svg";
import buzzfeed from "../assets/img/buzzfeed.svg";
import mybeast from "../assets/img/mrbeast.svg";
import macys from "../assets/img/macys.svg";
import menshealth from "../assets/img/menshealth.svg";

const SIster_Concern = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-bold my-2 text-center">
        Our{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Sister Concern
        </span>
      </h1>{" "}
      <div className="container bg-slate-200 p-5 mx-auto rounded-3xl my-10 border-2 border-blue-500">
        <Marquee speed={50} pauseOnHover={true}>
          <img className="h-20 mx-4" src={m3} />
          <img className="h-20 mx-4" src={barstool} />
          <img className="h-20 mx-4" src={budweiser} />
          <img className="h-20 mx-4" src={buzzfeed} />
          <img className="h-20 mx-4" src={mybeast} />
          <img className="h-20 mx-4" src={macys} />
          <img className="h-20 mx-4" src={menshealth} />
        </Marquee>
      </div>
    </div>
  );
};

export default SIster_Concern;
