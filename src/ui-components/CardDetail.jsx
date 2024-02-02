import rect from "../assests/images/rect.svg";
import circle from "../assests/images/circle.svg";

import { useState, useEffect } from "react";

function CardDetail(props) {
  const [isOpen, setIsOpen] = useState("");
  const [whatDataToShow, setWhatDataToShow] = useState({});
  const handleWhichOpen = (id) => {
    if (id === isOpen) setIsOpen("");
    else setIsOpen(id);
  };

  
  useEffect(() => {
    if (props.cardDetailDesc?.length) {
      let tempSelected = props.cardDetailDesc?.find(
        (element) => element.isSelected
      );
      setWhatDataToShow(() => tempSelected);
    }
  }, [props.cardDetailDesc]);

  return (
    <div className="bg-hf-yellow-60 rounded-lg p-4 w-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 py-5">
        <div className=" p-6 w-full">
          <div class="  font-semibold  text-4xl md:text-6xl ">
            {whatDataToShow?.title}
          </div>
          
          <div class="  text-xl md:text-2xl pt-5  pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            scelerisque risus id ante maximus blandit.
          </div>

          <button class="bg-hf-orange  px-6 py-3 rounded-full border-4 border-black font-bold">
            Product Details
          </button>
          {/* Content for the first column */}
        </div>
        <div className="p-6 w-full">
          <div class="max-w-md mx-auto">
            {[1, 2, 3, 4, 5].map((element, index) => {
              return (
                <div
                  key={index}
                  className="mb-4 bg-hf-yellow-60 rounded-lg overflow-hidden relative transition-transform transform-gpu hover:scale-105"
                >
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer border-b border-solid border-black"
                    onClick={() => handleWhichOpen(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={rect}
                        alt="Icon"
                        className="h-8 w-8 rounded-full"
                      />
                      <span className="font-semibold">
                        Accordion title  {element}
                      </span>
                    </div>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        index === isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>

                  {index === isOpen && (
                    <div className="px-2 border-t">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Content for the second column */}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
