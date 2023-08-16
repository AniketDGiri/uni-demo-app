import { useRef } from "react";

const HomePage = () => {
  const numberRef = useRef();

  const onButtonClickHandler = (event) => {
    event.preventDefault();
    console.log("Entered Data is", numberRef.current.value);
  };
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center justify-center">
      <div className="text my-5 ml-10">
        <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
          <span>
            <strong>NX Wave.</strong> The next-gen credit card for those who
            love rewards.
          </span>
        </h1>
        <p className="font-medium text-sm md:text-base md:mb-9">
          1% Cashback
          <i className="bi bi-plus mx-2"></i>
          5x Rewards
          <i className="bi bi-plus mx-2"></i>
          Zero Forex Markup
        </p>
        <div className="flex justify-between items-center max-w-[94vw]">
          <div className="flex flex-col">
            <form onSubmit={onButtonClickHandler}>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="number"
                  ref={numberRef}
                  id="default-search"
                  className="block w-full p-4  text-sm text-white rounded-xl bg-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Phone Number"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-amber-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Apply
                </button>
              </div>
            </form>

            <div className="consent flex items-center py-4 px-2 max-w-xs">
              <input type="checkbox" id="consent-msg" />
              <label
                htmlFor="consent-msg"
                className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer mx-3"
              >
                You agree to be contacted by Uni Cards over Call, SMS, Email or
                WhatsApp to guide you through your application.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="visual my-5 lg:max-w-md mr-10">
        <img
          className="rounded-lg max-h-full"
          src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};

export default HomePage;
