const DynamicSelect = ({
    options,
    nameData,
    placeholder,
    label,
    onChange,
    defaultValue,
    ref,
}) => {
    return (
        <div className="  w-full  mx-0 ">
            <label className="font-medium text-sm text-text-gray">
                {label}{" "}
            </label>
            <select
                name={nameData}
                ref={ref}
                onChange={onChange}
                defaultValue={defaultValue}
                className={` border mt-2 bg-custom-white  border-borde-gray text-text-gray text-md appearance-none rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5 `}
            >
                <option value="" disabled selected hidden>{placeholder}</option>
              
                {options?.map((el) => {
                    return <option key={el}>{el}</option>;
                })}
            </select>
        </div>
    );
};
export default DynamicSelect;
