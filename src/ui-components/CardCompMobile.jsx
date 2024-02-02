function CardCompMobile(props) {
  return (
    <div
      key={props.cardDetail.icon}
      className="bg-white rounded-lg shadow-md p-6 mt-3 w relative transition-transform transform-gpu hover:scale-105 border-b-8 border-yellow-400"
      onClick={() => props.handleCardClick(props.cardDetail)}
    >
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center justify-between space-x-4">
          <img
            src={props.cardDetail.icon}
            alt="Icon"
            className="h-8 w-8 rounded-full"
          />
          <span className="font-semibold">{props.cardDetail.title}</span>
        </div>
        <svg
          className={`w-4 h-4 transform transition-transform `}
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14m-7-7h14"></path>
        </svg>
      </div>
    </div>
  );
}

export default CardCompMobile;
