

import { useEffect, useState } from "react";
import rect from "./assests/images/rect.svg";
import circle from "./assests/images/circle.svg";
import bar from "./assests/images/bar.svg";
import mutu from "./assests/images/mutu.svg";
import CardComp from "./ui-components/CardComp";
import CardDetail from "./ui-components/CardDetail";
import CardCompMobile from "./ui-components/CardCompMobile";

function App() {
  const [cardDetailDesc, setCartDetailDesc] = useState([
    {
      title: "Card Title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isSelected: true,
      icon: rect,
    },
    {
      title: "Card Title that goes through lines",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isSelected: false,
      icon: circle,
    },
    {
      title: "Card Title ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isSelected: false,
      icon: bar,
    },
    {
      title: "Card Title that goes through lines",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isSelected: false,
      icon: mutu,
    },
  ]);

  const handleCardClick = (cardDesc) => {
    let tempCuurentCardDetail = [...cardDetailDesc];
    let currentSelectedIndex = tempCuurentCardDetail.indexOf(
      tempCuurentCardDetail.find((card) => card.isSelected)
    );
    if (currentSelectedIndex > -1) {
      tempCuurentCardDetail[currentSelectedIndex].isSelected = false;
    }
    let newSelectedIndex = tempCuurentCardDetail.indexOf(cardDesc);
    if (newSelectedIndex > -1) {
      tempCuurentCardDetail[newSelectedIndex].isSelected = true;
    }
    setCartDetailDesc(() => tempCuurentCardDetail);
  };
  return (
    <div className=" bg-red-300 ">
      <div class="mx-auto max-w-screen-lg">
        <div class="pt-5 text-center font-semibold  text-4xl md:text-6xl ">
          SECTION TITLE
        </div>
        <div className="pt-3 text-center font-medium text-lg md:text-xl lg:text-2xl ">
          Section Subtitle
        </div>

        <div class="  mt-4 hidden md:block">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-11=0 justify-center">
            {cardDetailDesc.map((cardDetail) => (
              <CardComp
                cardDetail={cardDetail}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
          {/* <div class="pt-5"> */}
          {/* </div> */}

          <div className="pb-5">
            <CardDetail cardDetailDesc={cardDetailDesc} />
          </div>
        </div>

        <div class="px-5  block md:hidden">
          {cardDetailDesc.map((cardDetail) => (
            <>
              <CardCompMobile
                cardDetail={cardDetail}
                handleCardClick={handleCardClick}
              />

              {cardDetail.isSelected && (
                <CardDetail cardDetailDesc={cardDetailDesc} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
