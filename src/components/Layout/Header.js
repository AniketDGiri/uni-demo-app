import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" dark:bg-gray-900 dark:border-gray-700 mx-10 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/Uni_Cards_Logo.jpg"
            className="h-14 mr-3 ml-5 my-5"
            alt="Flowbite Logo"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Uni
          </span> */}
        </Link>

        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-800 hover:text-indigo-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Uni Paycheck
        </button>
      </div>
    </nav>
  );
};

export default Header;
