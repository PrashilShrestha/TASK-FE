import downArrowImage from "../assests/images/downicon.svg";

function CardComp(props) {
  return (
    <div
      key={props.cardDetail.icon}
      className="bg-white rounded-lg shadow-md p-6 m-4  w relative transition-transform transform-gpu hover:scale-105 "
      onClick={() => props.handleCardClick(props.cardDetail)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold leading-tight mb-2 w-50">
          {props.cardDetail.title}
        </h2>
        <img
          src={props.cardDetail.icon}
          alt="Icon"
          className="h-8 w-8  top-7 right-4"
        />
      </div>
      <p className="text-blue-600">{props.cardDetail.desc}</p>

      <div
        style={{
          width: "151.5px",
          height: "50px",
          borderRadius: "0px, 42px, 0px, 0px",
          border: "2px, 0px, 0px, 0px,",
        }}
      >
        <button
          className={
            props.cardDetail.isSelected
              ? "bg-hf-yellow py-2 px-4 absolute bottom-0 left-0 rounded-bl-md"
              : "bg-black-20 py-2 px-4 absolute bottom-0 left-0 rounded-bl-md"
          }
          style={{
            height: "60px",
            bottom: "0px",
            left: "0px",
            borderRadius: "0px 32px 0px 0px",
            padding: "16px 24px 16px 24px",
            gap: "20px",
          }}
        >
          <span className="font-medium flex">
            Discover <img class="ml-2" src={downArrowImage} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default CardComp;
