const AlertCard = ({ type, message }) => {
  let cardColor;

  if (type === "urgence") {
    cardColor = "bg-[red] text-custom-white ";
  } else if (type === "normale") {
    cardColor = "bg-[green] text-custom-white";
  } else if (type === "météorologique") {
    cardColor = "bg-[yellow] text-custom-white";
  }

  return (
    <div className={`p-4 rounded-lg ${cardColor}`}>
      <p className="text-white">{message}</p>
    </div>
  );
};

export default AlertCard;
