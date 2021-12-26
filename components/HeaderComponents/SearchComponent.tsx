function SearchComponent() {
  return (
    <div className="w-full h-full flex items-center border">
      <form className="flex px-4 justify-evenly w-full  flex-col">
        <label
          className="text-center text-2xl my-2 font-MerryWeather"
          htmlFor="search-input"
        >
          Lets find something
        </label>
        <div className="w-full flex justify-around">
          <input
            className="py-3 px-2 border outline-none w-full"
            type="text"
            autoComplete="off"
            placeholder="Search..."
            name="search"
            id="search-input"
          />
          <button
            className="w-10 flex items-center justify-center border border-l-0"
            title="submit"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchComponent;
