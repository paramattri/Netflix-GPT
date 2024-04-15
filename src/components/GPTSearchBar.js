const GPTSearchBar = () => {
  return (
    <div className="bg-black/75 h-36 flex items-center rounded-md">
      <form className="flex justify-around items-center w-full">
        <input
          className="px-5 h-[50px] w-[70%] rounded-[4px] bg-neutral-700 text-white focus:outline-none"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className="px-6 py-4 w-[10%] text-white bg-red-600 rounded-[4px] font-medium"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
