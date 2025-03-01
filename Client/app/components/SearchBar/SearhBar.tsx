import cn from "~/utils/cn";
import Container from "../Container/Container";
import { useState, type ChangeEvent } from "react";
import { defaultSearch, type SearchFieldTypes } from "./search-field.types";
import { useStore } from "~/store/useStore";

const SearchBar = () => {
  const {
    dispatch,
    state: { theme },
  } = useStore();
  const [search, setSearch] = useState<SearchFieldTypes>(defaultSearch);

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    if (value.length === 0) {
      dispatch({
        type: "RESET",
      });
    } else {
      setSearch({
        ...search,
        [name]: value,
      });
    }
  };

  const handleSearch = () => {
    if (search.position.length > 0 && search.location.length > 0) {
      dispatch({
        type: "FILTER_JOBS_BY_POSITION",
        payload: search.position,
      });
      dispatch({
        type: "FILTER_JOBS_BY_LOCATION",
        payload: search.location,
      });
    } else if (search.position.length > 0) {
      console.log("position");
      dispatch({
        type: "FILTER_JOBS_BY_POSITION",
        payload: search.position,
      });
    } else if (search.location.length > 0) {
      dispatch({
        type: "FILTER_JOBS_BY_LOCATION",
        payload: search.location,
      });
    }
  };

  return (
    <div className="absolute top-[9.6rem] md:top-[11rem] w-full">
      <Container className="md:hidden">
        <div className="relative w-full">
          <input
            placeholder="Filter by title..."
            onChange={handleChange}
            className={cn(
              "w-full h-[8rem]  rounded-md p-[2.4rem] outline-0",
              "bg-white text-very-dark-blue placeholder-very-dark-blue/50",
              theme.darkMode &&
                "bg-very-dark-blue text-white/50 placeholder-white/50"
            )}
            type="text"
          />
          <button
            className={cn(
              "absolute top-[3rem] right-[8.803rem] cursor-pointer",
              theme.darkMode && "dark"
            )}
          >
            <img
              // onClick={toggleFilter}
              className={cn(
                "absolute top-[3rem] right-[8.803rem] cursor-pointer",
                theme.darkMode && "invert brightness-0"
              )}
              src="/assets/mobile/icon-filter.svg"
              alt=""
            />
          </button>

          <button
            className={cn(
              "bg-violet absolute right-[1.6rem] top-[1.6rem] z-2 p-[1.4rem] rounded-[0.5rem]",
              "h-[4.8rem] w-[4.8rem] cursor-pointer"
            )}
            onClick={handleSearch}
          >
            <img
              className="invert brightness-0"
              src="/assets/desktop/icon-search.svg"
              alt="Search"
            />
          </button>
        </div>
      </Container>
      <Container
        className={cn(
          "hidden md:block  mx-auto  rounded-tl-md rounded-bl-md md:max-w-[68.9rem] rounded-tr-md rounded-br-md",
          "bg-white",
          theme.darkMode && "dark"
        )}
      >
        <div className="relative w-full flex px-7">
          <div className="relative md:max-w-[22.2rem] lg:max-w-[46.3rem] w-full">
            <input
              placeholder="Filter by title..."
              onChange={handleChange}
              name="position"
              className={cn(
                "w-full h-[8rem]   rounded-tl-md rounded-bl-md p-[2.4rem] pl-[4rem] outline-0 border-grey/20 border-r-[0.01rem]",
                "bg-white text-very-dark-blue placeholder-very-dark-blue/50",
                theme.darkMode &&
                  "bg-very-dark-blue text-white/50 placeholder-white/50"
              )}
              type="text"
            />
            <img
              className="absolute top-[2.8rem]"
              src="/assets/desktop/icon-search.svg"
              alt="Search"
            />
          </div>
          <div className="relative md:max-w-[21.3rem] lg:max-w-[30rem] w-full">
            <input
              placeholder="Filter by location..."
              onChange={handleChange}
              name="location"
              className={cn(
                "w-full h-[8rem]  p-[2.4rem] pl-[5.6rem] outline-0 border-grey/20 border-r-[0.01rem]",
                "rounded-tl-md rounded-bl-md",
                "bg-white text-very-dark-blue placeholder-very-dark-blue/50",
                theme.darkMode &&
                  "bg-very-dark-blue text-white/50 placeholder-white/50"
              )}
              type="text"
            />
            <img
              className="absolute top-[2.8rem] left-[2.4rem]"
              src="/assets/desktop/icon-location.svg"
              alt="Search"
            />
          </div>
          <div className="flex w-full justify-between  items-center  pl-[2rem] md:max-w-[25.2rem] lg:max-w-[34.5rem]">
            <div className="font-bold w-full">
              <input
                className={cn("custom-checkbox", theme.darkMode && "dark")}
                id="myCheckbox"
                type="checkbox"
              />
              <label
                htmlFor="myCheckbox"
                className={cn(
                  "block",
                  theme.darkMode && "bg-very-dark-blue text-white"
                )}
              >
                <span>
                  {" "}
                  Full Time <span className="md:hidden lg:inline">Only</span>
                </span>
              </label>
            </div>
            <button
              onClick={handleSearch}
              className="bg-violet py-[1.6rem] lg:w-[12.3rem] lg:px-[3.55rem] px-[1.4rem] text-white rounded-[0.5rem] block ml-auto "
            >
              Search
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
