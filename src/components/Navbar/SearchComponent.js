import React from "react";

const SearchComponent = () => {
    return (
        <form className="flex items-center  w-2/3 lg:w-1/3 ">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                />
            </div>
        </form>

        // <div className="pt-2 relative   text-gray-600">
        //     <input
        //         className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        //         type="search"
        //         name="search"
        //         placeholder="Search"
        //     />
        //     <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        //         <svg
        //             className="text-gray-600 h-4 w-4 fill-current"
        //             xmlns="http://www.w3.org/2000/svg"
        //             version="1.1"
        //             id="Capa_1"
        //             x="0px"
        //             y="0px"
        //             viewBox="0 0 56.966 56.966"
        //               width="512px"
        //             height="512px"
        //         >
        //             <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        //         </svg>
        //     </button>
        // </div>
    );
};

export default SearchComponent;
