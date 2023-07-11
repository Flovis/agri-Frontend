const DynamicSelect = ({ options, nameData, label }) => {
  return (
    <div className=" relative max-w-6xl mx-auto ">
      <label className="font-medium">{label} </label>
      <select
        name={nameData}
        className={` border mt-2  border-borde-gray text-text-gray text-md appearance-none rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5 `}
      >
        {options?.map((el) => {
          return <option key={el}>{el}</option>;
        })}
      </select>
    </div>
  );
};
export default DynamicSelect;
