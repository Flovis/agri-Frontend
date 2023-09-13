export default () => {
  return (
    <div>
      <label className="text-gray-600">Amount</label>
      <div className="relative mt-2 max-w-xs text-gray-500">
        <div className="absolute inset-y-0 left-3 flex items-center">
          <select className="text-sm bg-transparent outline-none rounded-lg h-full">
            <option>USD</option>
            <option>EUR</option>
            <option>MRO</option>
          </select>
        </div>
        <input
          type="number"
          placeholder="$0.00"
          className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
    </div>
  );
};
