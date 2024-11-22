import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCardToDisplay = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardToDisplay();
    window.addEventListener("resize", updateCardToDisplay);
    return () => window.removeEventListener("resize", updateCardToDisplay);
  }, []);
  return (
    <div
      className=" container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden "
      id="Projects"
    >
      <h1 className=" text-2xl sm:text-4xl font-bold mb-2 text-center ">
        {" "}
        Projects{" "}
        <span className=" underline underline-offset-4 decoration-1 under font-light ">
          {" "}
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 w-8/12 my-5 mx-auto">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        perferendis nesciunt cumque consectetur dignissimos deserunt maiores
        esse omnis, aperiam asperiores!
      </p>
      <div className=" flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="bg-gray-200 rounded mr-2 p-2 w-10"
          aria-label="previous project"
        >
          <img src={assets.left_arrow} alt="" />
        </button>

        <div className="overflow-hidden ">
          <div
            className="  flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {projectsData.map((project, i) => (
              <div key={i} className=" relative flex-shrink-0 w-full sm:w-1/4">
                <img
                  className=" w-full h-64 mb-14"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className=" text-lg font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextProject}
          className="bg-gray-200 rounded  p-2 w-10 ml-2"
          aria-label="next project"
        >
          <img src={assets.right_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Works;
